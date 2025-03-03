import { aN as defineStore, aO as ref } from "./vendor.b1ae577d.js";
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
defineStore("traveltimes-views", () => {
  const selectedTravelTime = ref(null);
  return { selectedTravelTime };
});
const useLineViewsStore = defineStore("line-views", () => {
  const selectedTravelTime = ref(null);
  const selectedLine = ref(SelectedTrambusLine.NONE);
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
const useTraveltimeInteractionStore = defineStore(
  "traveltime-interaction-map",
  () => {
    const selectedTraveltime = ref(null);
    function selectTraveltime(traveltime) {
      selectedTraveltime.value = traveltime;
    }
    return {
      selectedTraveltime,
      selectTraveltime
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
export {
  SelectedTrambusLine as S,
  useMapStore as a,
  useLineViewsStore as b,
  useLineInteractionStore as c,
  useTraveltimeInteractionStore as d,
  useViewsStore as u,
  viewList as v
};
