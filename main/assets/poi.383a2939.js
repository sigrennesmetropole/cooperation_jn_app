import { R as RENNES_LAYER } from "./layers.bf3fda75.js";
import { bH as GlobalHider, bI as NearFarScalar, b6 as Projection, bk as CesiumMath, bf as Point, bJ as transform, bK as vectorStyleSymbol } from "./vendor.a3d1717e.js";
import { a as generatePoiStyle, b as generatePoiStyleWithoutLabel } from "./common.6de92bc6.js";
import { f as usePoiParkingStore, d as useLineViewsStore, v as viewList, b as useMap3dStore } from "./views.22becdb4.js";
import { i as isStationOnLine, b as stationsFixtures, f as fetchStationsByLine } from "./api.client.4f1172a9.js";
import { u as useStationsStore } from "./stations.16c7e9ce.js";
async function removeFilterOnLayers(rennesApp, layerName) {
  const lyr = await rennesApp.getLayerByKey(layerName);
  lyr.featureVisibility.clearHiddenObjects();
}
async function removeFiltersOnPoiAndParking(rennesApp) {
  await removeFilterOnLayers(rennesApp, RENNES_LAYER.poi);
  await removeFilterOnLayers(rennesApp, RENNES_LAYER.parking);
}
async function filterFeatureByParkingAndLine(rennesApp, line) {
  const stations = await fetchStationsByLine(rennesApp, line);
  const parkingsFeatures = await rennesApp.getFeaturesFromLayer(
    RENNES_LAYER.parking
  );
  const featuresToHide = [];
  parkingsFeatures.forEach((featureParking) => {
    const station_with_parking = stations.filter(
      (station) => station["nom"] === featureParking.getProperty("arret_nom")
    );
    if (station_with_parking.length == 0) {
      let id = featureParking.getId();
      if (typeof id === "number") {
        id = id.toString();
      }
      featuresToHide.push(id);
    }
  });
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.parking);
  layer.setGlobalHider(new GlobalHider());
  layer.featureVisibility.hideObjects(featuresToHide);
}
async function filterFeatureByPoiAndLine(rennesApp, line) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.poi);
  layer.setGlobalHider(new GlobalHider());
  const featuresToHide = layer.getFeatures().filter(
    (f) => !isStationOnLine(
      stationsFixtures(),
      f.getProperties()["station_nom"],
      line
    )
  ).map((f) => f.getId().toString());
  layer.featureVisibility.hideObjects(featuresToHide);
}
async function filterFeatureByPoiAndStation(rennesApp, station) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.poi);
  layer.setGlobalHider(new GlobalHider());
  const featuresToHide = layer.getFeatures().filter((f) => f.getProperties()["station_nom"] !== station).map((f) => f.getId());
  layer.featureVisibility.hideObjects(featuresToHide);
}
function getDistanceFromResolution(resolution, map) {
  var _a, _b;
  const viewport = map.getViewport();
  const size = {
    height: viewport.offsetHeight || 1,
    width: viewport.offsetWidth || 1
  };
  const fov = Math.PI / 3;
  const aspectRatio = size.width / size.height;
  const fovy = Math.atan(Math.tan(fov * 0.5) / aspectRatio) * 2;
  const view = map.getView();
  const metersPerUnit = (_a = view.getProjection().getMetersPerUnit()) != null ? _a : 1;
  const visibleMapUnits = resolution * size.height;
  const wgs84Center = Projection.mercatorToWgs84((_b = view.getCenter()) != null ? _b : [0, 0]);
  const relativeCircumference = Math.cos(
    Math.abs(CesiumMath.toRadians(wgs84Center[1]))
  );
  const visibleMeters = visibleMapUnits * metersPerUnit * relativeCircumference;
  return Math.abs(visibleMeters / 2 / Math.tan(fovy / 2));
}
function setDistanceDisplayConditionFeature(layer, map) {
  const currentStyle = layer.style;
  layer.style = (feature, resolution) => {
    let featureDistance;
    const scaleByDistance = feature.get("olcs_scaleByDistance");
    let featureNearFar = void 0;
    if (scaleByDistance !== void 0 && scaleByDistance.length === 4) {
      featureNearFar = new NearFarScalar(
        scaleByDistance[0],
        scaleByDistance[1],
        scaleByDistance[2],
        scaleByDistance[3]
      );
    }
    if (featureNearFar) {
      featureDistance = featureNearFar.far;
    }
    if (featureDistance != null && getDistanceFromResolution(resolution, map.olMap) > featureDistance) {
      return void 0;
    }
    if (typeof currentStyle === "function") {
      return currentStyle(feature, resolution);
    }
    return currentStyle;
  };
}
const CHAR_MAX = 25;
function shorterName(poiName) {
  let shorterName2 = poiName.replace("'", " ");
  if (poiName.length > CHAR_MAX) {
    shorterName2 = shorterName2.slice(0, CHAR_MAX).concat("...");
  }
  return shorterName2;
}
async function fixGeometryOfPoi(rennesApp) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.poi);
  layer.getFeatures().forEach((f) => {
    const coordinates = [
      f.getProperties()["site_x"],
      f.getProperties()["site_y"]
    ];
    f.setGeometry(new Point(transform(coordinates, "EPSG:4326", "EPSG:3857")));
    const echelleMax = f.get("echelle_max") / 5;
    f.set("olcs_scaleByDistance", [echelleMax - 1, 1, echelleMax, 0]);
  });
}
async function resetStyleOfPoi(view, rennesApp) {
  const map3dStore = useMap3dStore();
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.poi);
  layer.getFeatures().forEach((f) => {
    let styleItem;
    if (view === viewList.station) {
      styleItem = generatePoiStyle(
        shorterName(f.getProperties()["site_nom"]),
        f.getProperties()["distance"],
        map3dStore.is3D(),
        true
      );
    } else {
      styleItem = generatePoiStyleWithoutLabel(map3dStore.is3D());
      setDistanceDisplayConditionFeature(styleItem, rennesApp.get2DMap());
    }
    f[vectorStyleSymbol] = styleItem;
    f.setStyle(styleItem.style);
  });
}
async function filterFeaturesOnLine(rennesApp) {
  const lineViewStore = useLineViewsStore();
  await filterFeatureByParkingAndLine(rennesApp, lineViewStore.selectedLine);
}
async function poiStoreSubcribe(rennesApp) {
  const poiStore = usePoiParkingStore();
  const stationsStore = useStationsStore();
  const lineViewStore = useLineViewsStore();
  await removeFiltersOnPoiAndParking(rennesApp);
  await fixGeometryOfPoi(rennesApp);
  if (poiStore.currentProfile === viewList.station && stationsStore.currentStationView) {
    await filterFeaturesOnLine(rennesApp);
    await filterFeatureByPoiAndStation(
      rennesApp,
      stationsStore.currentStationView
    );
  } else if (poiStore.currentProfile === viewList.line && lineViewStore.selectedLine) {
    await filterFeaturesOnLine(rennesApp);
    await filterFeatureByPoiAndLine(rennesApp, lineViewStore.selectedLine);
  }
  await resetStyleOfPoi(poiStore.currentProfile, rennesApp);
}
export {
  poiStoreSubcribe as p
};
