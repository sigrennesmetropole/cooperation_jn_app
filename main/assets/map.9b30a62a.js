import { aR as defineStore, aN as ref } from "./vendor.243fe843.js";
const useLayersStore = defineStore("layers", () => {
  const visibilities = ref({
    rennesOrtho: false,
    rennesBase: false,
    metro: false,
    bus: false,
    bike: false,
    trambusLines: false,
    trambusStops: false,
    parking: false,
    poi: false
  });
  function toggleLayer(name) {
    visibilities.value = {
      ...visibilities.value,
      [name]: !visibilities.value[name]
    };
  }
  function update3DBaseLayer(is3D) {
    visibilities.value.rennesBase = !is3D;
    visibilities.value.rennesOrtho = is3D;
  }
  function setVisibilities(is3D, newVisibilities) {
    update3DBaseLayer(is3D);
    visibilities.value.trambusLines = newVisibilities.trambusLines;
    visibilities.value.trambusStops = newVisibilities.trambusStops;
    visibilities.value.parking = newVisibilities.parking;
    visibilities.value.poi = newVisibilities.poi;
  }
  return { visibilities, toggleLayer, update3DBaseLayer, setVisibilities };
});
const viewList = {
  home: "home",
  station: "station",
  line: "line",
  traveltimes: "traveltimes"
};
var SelectedTrambusLine = /* @__PURE__ */ ((SelectedTrambusLine2) => {
  SelectedTrambusLine2[SelectedTrambusLine2["NONE"] = 0] = "NONE";
  SelectedTrambusLine2[SelectedTrambusLine2["LINE_1"] = 1] = "LINE_1";
  SelectedTrambusLine2[SelectedTrambusLine2["LINE_2"] = 2] = "LINE_2";
  SelectedTrambusLine2[SelectedTrambusLine2["LINE_3"] = 3] = "LINE_3";
  SelectedTrambusLine2[SelectedTrambusLine2["LINE_4"] = 4] = "LINE_4";
  return SelectedTrambusLine2;
})(SelectedTrambusLine || {});
const useViewsStore = defineStore("views", () => {
  const currentView = ref(viewList.home);
  return { currentView };
});
const useTravelTimesViewStore = defineStore("traveltimes-views", () => {
  const selectedTravelTime = ref(null);
  return { selectedTravelTime };
});
const useLineViewsStore = defineStore("line-views", () => {
  const selectedLine = ref(SelectedTrambusLine.NONE);
  const displayedOtherLines = ref(false);
  function selectLine(line) {
    selectedLine.value = line;
    displayedOtherLines.value = false;
  }
  function displayOtherLines() {
    displayedOtherLines.value = !displayedOtherLines.value;
  }
  return { selectLine, displayedOtherLines, selectedLine, displayOtherLines };
});
const useStationViewsStore = defineStore("station-views", () => {
  const nameSelectedStation = ref("");
  const idSelectedStation = ref(0);
  function setNameSelectedStation(stationName) {
    nameSelectedStation.value = stationName;
  }
  function setIdSelectedStation(idStation) {
    idSelectedStation.value = idStation;
  }
  function emptySelectedStation() {
    nameSelectedStation.value = "";
    idSelectedStation.value = 0;
  }
  return {
    nameSelectedStation,
    setNameSelectedStation,
    idSelectedStation,
    setIdSelectedStation,
    emptySelectedStation
  };
});
const useMapStore = defineStore("map", () => {
  const activeMap = ref("ol");
  const viewPoint = ref("rennes");
  const eventRandomId = ref(0);
  function triggerEvent() {
    eventRandomId.value = Math.random();
  }
  function is3D() {
    return activeMap.value == "cesium";
  }
  function toggle3D() {
    if (is3D()) {
      activeMap.value = "ol";
    } else {
      activeMap.value = "cesium";
    }
  }
  function updateViewpoint(viewpoint, force = false) {
    viewPoint.value = viewpoint;
    if (force) {
      triggerEvent();
    }
  }
  return {
    triggerEvent,
    eventRandomId,
    viewPoint,
    activeMap,
    is3D,
    toggle3D,
    updateViewpoint
  };
});
export {
  SelectedTrambusLine as S,
  useViewsStore as a,
  useMapStore as b,
  useLineViewsStore as c,
  useStationViewsStore as d,
  useTravelTimesViewStore as e,
  useLayersStore as u,
  viewList as v
};
