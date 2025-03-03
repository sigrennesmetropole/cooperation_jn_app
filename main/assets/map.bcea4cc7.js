import { aR as defineStore, aN as ref } from "./vendor.fd236c41.js";
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
const useViewsStore = defineStore("views", () => {
  const currentView = ref(viewList.home);
  return { currentView };
});
const useTravelTimesViewStore = defineStore("traveltimes-views", () => {
  const selectedTravelTime = ref(null);
  return { selectedTravelTime };
});
const useLineViewsStore = defineStore("line-views", () => {
  const selectedLine = ref(0);
  function selectLine(line) {
    selectedLine.value = line;
  }
  return { selectLine, selectedLine };
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
  useViewsStore as a,
  useMapStore as b,
  useLineViewsStore as c,
  useStationViewsStore as d,
  useTravelTimesViewStore as e,
  useLayersStore as u,
  viewList as v
};
