import { aJ as defineStore, aK as ref, b6 as CesiumMap, b7 as Projection, b8 as Cartographic, b9 as OpenlayersMap, ba as SceneTransforms, bb as Cartesian2, bc as getHeightFromTerrainProvider, bd as mercatorProjection, be as LineString, bf as Feature, bg as Point, bh as getMidPoint, bi as cartesian2DDistance, bj as CatmullRomSpline, bk as Cartesian3, bl as CesiumMath } from "./vendor.86161968.js";
import { u as useLayersStore, R as RENNES_LAYER } from "./api.client.00fbeec7.js";
import { u as useStationsStore } from "./stations.cd525b57.js";
const viewList = {
  home: "home",
  station: "station",
  line: "line",
  traveltimes: "traveltimes"
};
const useMap3dStore = defineStore("map-3d", () => {
  const layerStore = useLayersStore();
  const activeMap = ref("ol");
  function is3D() {
    return activeMap.value == "cesium";
  }
  function toggle3D() {
    if (is3D()) {
      activeMap.value = "ol";
    } else {
      activeMap.value = "cesium";
    }
    layerStore.update3DBaseLayer(is3D());
  }
  return {
    activeMap,
    is3D,
    toggle3D
  };
});
const useMapViewPointStore = defineStore("map-viewpoint", () => {
  const viewPoint = ref("rennes");
  const eventRandomId = ref(0);
  function triggerEvent() {
    eventRandomId.value = Math.random();
  }
  function updateViewpoint(viewpoint, force = false) {
    viewPoint.value = viewpoint;
    if (force) {
      triggerEvent();
    }
  }
  return {
    viewPoint,
    updateViewpoint
  };
});
const usePoiParkingStore = defineStore("poi-parking-layers", () => {
  const currentProfile = ref(null);
  const lineName = ref(null);
  const stationName = ref(null);
  function activeHomeProfile() {
    currentProfile.value = viewList.home;
    lineName.value = null;
    stationName.value = null;
  }
  function activeLineProfile(line) {
    currentProfile.value = viewList.line;
    lineName.value = line;
    stationName.value = null;
  }
  function activeStationProfile(station) {
    currentProfile.value = viewList.station;
    stationName.value = station;
    lineName.value = null;
  }
  return {
    currentProfile,
    activeHomeProfile,
    activeLineProfile,
    activeStationProfile
  };
});
function getBalloonPositionCesium(scene, cartesian) {
  return SceneTransforms.wgs84ToWindowCoordinates(scene, cartesian);
}
function getBalloonPositionOL(olMap, position) {
  const pixel = olMap.getPixelFromCoordinate(position);
  if (pixel) {
    return new Cartesian2(...pixel);
  }
  return void 0;
}
function getBalloonPosition(app, position) {
  var _a;
  const map = app.maps.activeMap;
  let cartesian = void 0;
  if (map instanceof CesiumMap) {
    const wgs84Position = Projection.mercatorToWgs84(position);
    cartesian = Cartographic.toCartesian(
      Cartographic.fromDegrees(
        wgs84Position[0],
        wgs84Position[1],
        Math.max(50, (_a = position[2]) != null ? _a : 0)
      )
    );
    cartesian = getBalloonPositionCesium(map.getScene(), cartesian);
  } else if (map instanceof OpenlayersMap) {
    cartesian = getBalloonPositionOL(map.olMap, position);
  }
  return cartesian;
}
function getCartesianPositionFromFeature(rennesApp, feature) {
  return getBalloonPosition(rennesApp, feature.getGeometry().getCoordinates());
}
async function lineStringsFromTraveltimes(traveltimes, rennesApp, is3D) {
  const promises = traveltimes.map(async (traveltime) => {
    var _a, _b, _c, _d;
    const startTrambusStop = await rennesApp.getFeatureByAttributeFromLayer(
      RENNES_LAYER.trambusStops,
      "nom",
      traveltime.start
    );
    const endTrambusStop = await rennesApp.getFeatureByAttributeFromLayer(
      RENNES_LAYER.trambusStops,
      "nom",
      traveltime.end
    );
    if (is3D) {
      const cesiumMap = rennesApp.get3DMap();
      const [startCoordinate, endCoordinate] = await getHeightFromTerrainProvider(
        cesiumMap.terrainProvider,
        [
          (_a = startTrambusStop == null ? void 0 : startTrambusStop.getGeometry()) == null ? void 0 : _a.getCoordinates(),
          (_b = endTrambusStop == null ? void 0 : endTrambusStop.getGeometry()) == null ? void 0 : _b.getCoordinates()
        ],
        mercatorProjection
      );
      const geom = new LineString([startCoordinate, endCoordinate]);
      const feature = new Feature(geom);
      feature.setProperties({ ...traveltime });
      return feature;
    } else {
      const geom = new LineString([
        (_c = startTrambusStop == null ? void 0 : startTrambusStop.getGeometry()) == null ? void 0 : _c.getCoordinates(),
        (_d = endTrambusStop == null ? void 0 : endTrambusStop.getGeometry()) == null ? void 0 : _d.getCoordinates()
      ]);
      const feature = new Feature(geom);
      feature.setProperties({ ...traveltime });
      return feature;
    }
  });
  return await Promise.all(promises);
}
const arcFactor = 0.15;
const arcNumber = 64;
function getArcCoordinates(p1, p2, arcHeight, numberOfSegments, arcFactor2) {
  var _a, _b, _c;
  const midPoint = getMidPoint(p1, p2);
  midPoint[2] += arcHeight / 2;
  const distance = cartesian2DDistance(p1, p2) / numberOfSegments;
  const spline = new CatmullRomSpline({
    times: [0, 0.5, 1],
    points: [
      new Cartesian3(p1[0], p1[1], (_a = p1[2]) != null ? _a : 0),
      new Cartesian3(midPoint[0], midPoint[1], (_b = midPoint[2]) != null ? _b : 0),
      new Cartesian3(p2[0], p2[1], (_c = p2[2]) != null ? _c : 0)
    ],
    firstTangent: new Cartesian3(0, 0, arcFactor2 * distance),
    lastTangent: new Cartesian3(0, 0, -arcFactor2 * distance)
  });
  const coordinates = new Array(numberOfSegments + 1);
  let scratchCartesian = new Cartesian3();
  for (let i = 0; i <= numberOfSegments; i++) {
    scratchCartesian = spline.evaluate(i / numberOfSegments, scratchCartesian);
    coordinates[i] = [
      scratchCartesian.x,
      scratchCartesian.y,
      scratchCartesian.z
    ];
  }
  return coordinates;
}
function determineArcHeight(p1, p2, factor) {
  const distance = cartesian2DDistance(p1, p2);
  return distance * factor;
}
function getMidPointOnArc(p1, p2, arcHeight) {
  const lineVector = new Cartesian2(p2[0] - p1[0], p2[1] - p1[1]);
  let perp = Cartesian2.normalize(lineVector, new Cartesian2());
  const { x, y } = perp;
  perp = new Cartesian2(y, -x);
  Cartesian2.multiplyByScalar(perp, arcHeight, perp);
  const midPoint = getMidPoint(p1, p2);
  Cartesian2.add(perp, new Cartesian2(midPoint[0], midPoint[1]), perp);
  return [perp.x, perp.y];
}
async function getCenterOfArrow(rennesApp, is3D, selectedTraveltime) {
  let features = [];
  features = await lineStringsFromTraveltimes(
    [selectedTraveltime],
    rennesApp,
    is3D
  );
  const feature = new Feature();
  let midPoint;
  const lineString = features[0].getGeometry();
  if (is3D) {
    const arc = getArcCoordinates(
      lineString.getFirstCoordinate(),
      lineString.getLastCoordinate(),
      determineArcHeight(
        lineString.getFirstCoordinate(),
        lineString.getLastCoordinate(),
        arcFactor
      ),
      arcNumber,
      arcFactor
    );
    midPoint = arc[32];
  } else {
    midPoint = getMidPointOnArc(
      lineString.getFirstCoordinate(),
      lineString.getLastCoordinate(),
      determineArcHeight(
        lineString.getFirstCoordinate(),
        lineString.getLastCoordinate(),
        arcFactor
      )
    );
  }
  feature.setGeometry(new Point(midPoint));
  return feature;
}
function updateCartesianPositions(rennesApp, aboveMapItems) {
  aboveMapItems.map((item) => {
    const cartesian = getCartesianPositionFromFeature(rennesApp, item.feature);
    if (cartesian !== void 0) {
      item.cartesian = cartesian;
    }
    return item;
  });
}
function addGenericListenerForUpdatePositions(rennesApp, previousViewPoint, updatePositionsComponents) {
  const map = rennesApp.maps.activeMap;
  if (map instanceof CesiumMap) {
    map.getScene().postRender.addEventListener(() => {
      const vp = map.getViewpointSync();
      if (previousViewPoint === null || vp !== null && !vp.equals(previousViewPoint, CesiumMath.EPSILON5)) {
        updatePositionsComponents(rennesApp);
        previousViewPoint = vp;
      }
    });
  } else if (map instanceof OpenlayersMap) {
    map.postRender.addEventListener(() => {
      updatePositionsComponents(rennesApp);
    });
  }
}
const useTraveltimeInteractionStore = defineStore(
  "traveltime-interaction-map",
  () => {
    const selectedTraveltime = ref(null);
    const displayedTravelTimes = ref([]);
    function selectTraveltime(traveltime) {
      selectedTraveltime.value = traveltime;
    }
    function addDisplayTravelTime(traveltime) {
      displayedTravelTimes.value.push(traveltime);
    }
    function isOnlySelected(travelTime) {
      return displayedTravelTimes.value.length === 1 && displayedTravelTimes.value[0].id === travelTime.id;
    }
    function setDisplayTravelTimes(travelTimes) {
      displayedTravelTimes.value = travelTimes;
    }
    function removeDisplayTravelTime() {
      displayedTravelTimes.value = [];
    }
    return {
      selectedTraveltime,
      displayedTravelTimes,
      addDisplayTravelTime,
      isOnlySelected,
      setDisplayTravelTimes,
      removeDisplayTravelTime,
      selectTraveltime
    };
  }
);
const useTravelTimeBoxesStore = defineStore(
  "travelTime-boxes-map",
  () => {
    const travelTimeBoxes = ref([]);
    const previousViewPoint = ref(null);
    async function setTravelTimeBoxes(rennesApp, travelTimes, is3D) {
      travelTimeBoxes.value = [];
      travelTimes.forEach((travelTime) => {
        const feature = getCenterOfArrow(rennesApp, is3D, travelTime);
        feature.then((feat) => {
          const cartesian = getCartesianPositionFromFeature(rennesApp, feat);
          if (cartesian !== void 0) {
            travelTimeBoxes.value.push({
              travelTimeFeature: travelTime,
              cartesian,
              feature: feat
            });
          }
        });
      });
    }
    function cleanTravelTimesBoxes() {
      travelTimeBoxes.value = [];
    }
    function updatePositionsTravelTimeBoxes(rennesApp) {
      updateCartesianPositions(rennesApp, travelTimeBoxes.value);
    }
    function addListenerForUpdatePositions(rennesApp) {
      addGenericListenerForUpdatePositions(
        rennesApp,
        previousViewPoint.value,
        updatePositionsTravelTimeBoxes
      );
    }
    return {
      travelTimeBoxes,
      addListenerForUpdatePositions,
      setTravelTimeBoxes,
      cleanTravelTimesBoxes
    };
  }
);
const useLineInteractionStore = defineStore(
  "line-interaction-map",
  () => {
    const selectedLines = ref([]);
    const clickPosition = ref(null);
    const featureLabel = ref(null);
    function selectLines(lines) {
      selectedLines.value = lines;
    }
    function selectClickPosition(cartesian) {
      clickPosition.value = cartesian;
    }
    function selectFeatureLabel(feature) {
      featureLabel.value = feature;
    }
    function resetLinesLabels() {
      selectedLines.value = [];
      clickPosition.value = null;
      featureLabel.value = null;
    }
    return {
      selectedLines,
      selectLines,
      clickPosition,
      selectClickPosition,
      featureLabel,
      selectFeatureLabel,
      resetLinesLabels
    };
  }
);
defineStore("poi-interaction-map", () => {
  const currentFeaturePoi = ref(null);
  function selectCurrentFeaturePoi(feature) {
    currentFeaturePoi.value = feature;
  }
  return {
    currentFeaturePoi,
    selectCurrentFeaturePoi
  };
});
const useViewsStore = defineStore("views", () => {
  const currentView = ref(viewList.home);
  const mapViewpointStore = useMapViewPointStore();
  const poiStore = usePoiParkingStore();
  const stationsStore = useStationsStore();
  const lineViewsStore = useLineViewsStore();
  const travelTimeBoxesStore = useTravelTimeBoxesStore();
  const traveltimeInteractionStore = useTraveltimeInteractionStore();
  function setCurrentView(view, selectedLine, selectedStation) {
    currentView.value = view;
    if (view === viewList.line && selectedLine) {
      poiStore.activeLineProfile(selectedLine.toString());
      lineViewsStore.selectLine(selectedLine);
      stationsStore.lineViewSetUpStationsToDisplay(selectedLine);
      mapViewpointStore.updateViewpoint(`line${selectedLine}`, true);
    } else if (view === viewList.station && selectedLine && selectedStation) {
      poiStore.activeStationProfile(selectedStation);
      lineViewsStore.selectLine(selectedLine);
      mapViewpointStore.updateViewpoint(viewList.station, true);
      travelTimeBoxesStore.cleanTravelTimesBoxes();
    } else if (view === viewList.home) {
      setHomeAsCurrentView();
    }
  }
  function setHomeAsCurrentView() {
    poiStore.activeHomeProfile();
    lineViewsStore.selectLine(0);
    stationsStore.homeViewSetUpStationsToDisplay();
    mapViewpointStore.updateViewpoint("rennes", true);
    travelTimeBoxesStore.cleanTravelTimesBoxes();
    traveltimeInteractionStore.removeDisplayTravelTime();
    currentView.value = viewList.home;
  }
  return { currentView, setCurrentView, setHomeAsCurrentView };
});
defineStore("traveltimes-views", () => {
  const selectedTravelTime = ref(null);
  return { selectedTravelTime };
});
const useHomeViewsStore = defineStore("home-views", () => {
  const selectedLineOnHomePage = ref(null);
  return { selectedLineOnHomePage };
});
const useLineViewsStore = defineStore("line-views", () => {
  const selectedTravelTime = ref(null);
  const selectedLine = ref(0);
  const displayedOtherLines = ref(false);
  function selectLine(line) {
    selectedLine.value = line;
    displayedOtherLines.value = false;
  }
  function displayOtherLines() {
    displayedOtherLines.value = !displayedOtherLines.value;
  }
  return {
    selectLine,
    displayedOtherLines,
    selectedLine,
    displayOtherLines,
    selectedTravelTime
  };
});
export {
  useViewsStore as a,
  useMap3dStore as b,
  useLineInteractionStore as c,
  useLineViewsStore as d,
  useTraveltimeInteractionStore as e,
  usePoiParkingStore as f,
  useMapViewPointStore as g,
  useHomeViewsStore as u,
  viewList as v
};
