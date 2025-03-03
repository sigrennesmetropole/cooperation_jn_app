import { aJ as defineStore, aK as ref } from "./vendor.aca542ae.js";
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
    poi: false,
    _traveltimeArrow: false,
    _poiArrow: false
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
    visibilities.value._traveltimeArrow = newVisibilities._traveltimeArrow;
    visibilities.value._poiArrow = newVisibilities._poiArrow;
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
export {
  SelectedTrambusLine as S,
  useViewsStore as a,
  useLineViewsStore as b,
  useLayersStore as u,
  viewList as v
};
