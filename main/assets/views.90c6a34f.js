import { aN as defineStore, aO as ref } from "./vendor.27016d7f.js";
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
  useLineViewsStore as a,
  useViewsStore as u,
  viewList as v
};
