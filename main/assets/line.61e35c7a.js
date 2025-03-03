import { R as RENNES_LAYER } from "./layers.12c041c0.js";
import { aL as defineStore, aM as ref } from "./vendor.60af8f16.js";
const useStationsStore = defineStore("stations", () => {
  const stationsToDisplayPermanently = ref([]);
  const stationsToDisplay = ref([]);
  const currentStationView = ref("");
  const flagClearStationsExceptPermanently = ref(false);
  const lineOfStation = ref(null);
  const viewPointStation = ref(null);
  function addStationToDisplay(stationName) {
    if (!stationsToDisplay.value.includes(stationName)) {
      stationsToDisplay.value.push(stationName);
    }
  }
  function deleteStationToDisplay(stationName) {
    if (!stationsToDisplayPermanently.value.includes(stationName)) {
      stationsToDisplay.value = stationsToDisplay.value.filter(
        (station) => station != stationName
      );
    }
  }
  function addStationToDisplayPermanently(stationName) {
    if (!stationsToDisplayPermanently.value.includes(stationName)) {
      stationsToDisplayPermanently.value.push(stationName);
      addStationToDisplay(stationName);
    }
  }
  function setCurrentStationView(stationName) {
    currentStationView.value = stationName;
    addStationToDisplayPermanently(stationName);
  }
  function stationIsInStationsToDisplay(stationName) {
    return stationsToDisplay.value.includes(stationName);
  }
  function stationIsInStationsToDisplayPermanently(stationName) {
    return stationsToDisplayPermanently.value.includes(stationName);
  }
  function clearStationsExceptPermanently() {
    stationsToDisplay.value = [];
    stationsToDisplayPermanently.value.forEach(
      (s) => stationsToDisplay.value.push(s)
    );
  }
  function clearAllStations() {
    stationsToDisplay.value = [];
    stationsToDisplayPermanently.value = [];
  }
  function addStationStartEndPermanently() {
    getAllStartEndStations().forEach((s) => addStationToDisplayPermanently(s));
  }
  function addStationStartEndOfLinePermanently(lineNumber) {
    getStartEndStationsOfLine(lineNumber).forEach(
      (s) => addStationToDisplayPermanently(s)
    );
  }
  function stationViewSetUpStationsToDisplay(stationName, lineNumber) {
    clearAllStations();
    setCurrentStationView(stationName);
    addStationStartEndOfLinePermanently(lineNumber);
  }
  function lineViewSetUpStationsToDisplay(lineNumber, isClear = true) {
    if (isClear) {
      clearAllStations();
    }
    addStationStartEndOfLinePermanently(lineNumber);
  }
  function traveltimesViewSetUpStationsToDisplay() {
    clearAllStations();
    addStationStartEndPermanently();
  }
  function homeViewSetUpStationsToDisplay() {
    clearAllStations();
  }
  function updateStationsToDisplayFromTravelTimes(travelTime) {
    clearAllStations();
    addStationToDisplayPermanently(travelTime.start);
    addStationToDisplayPermanently(travelTime.end);
  }
  function setLineOfStation(lineNumber) {
    lineOfStation.value = lineNumber;
  }
  function setViewPointStation(newViewpoint) {
    viewPointStation.value = newViewpoint;
  }
  return {
    stationsToDisplay,
    currentStationView,
    flagClearStationsExceptPermanently,
    viewPointStation,
    stationViewSetUpStationsToDisplay,
    stationIsInStationsToDisplayPermanently,
    lineViewSetUpStationsToDisplay,
    stationIsInStationsToDisplay,
    traveltimesViewSetUpStationsToDisplay,
    addStationToDisplay,
    addStationToDisplayPermanently,
    deleteStationToDisplay,
    clearStationsExceptPermanently,
    homeViewSetUpStationsToDisplay,
    updateStationsToDisplayFromTravelTimes,
    clearAllStations,
    setLineOfStation,
    setViewPointStation,
    addStationStartEndOfLinePermanently,
    lineOfStation
  };
});
const useLinesStore = defineStore("lines", () => {
  const lineDesciptions = ref([]);
  function setLineDescriptions(lines) {
    lineDesciptions.value = lines;
  }
  return {
    lineDesciptions,
    setLineDescriptions
  };
});
async function getLinesId(rennesApp) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.trambusLines);
  const ids = [];
  layer.getFeatures().forEach((f) => {
    const li_nom = f.getProperties()["li_nom"];
    const id = li_nom.split("T")[1];
    if (ids.indexOf(id) == -1) {
      ids.push(id);
    }
  });
  return ids.sort();
}
async function fetchLineFrequency(rennesApp, lineNumber) {
  const lines = await rennesApp.getFeaturesThatContainAttributeFromLayer(
    RENNES_LAYER.appTrambusLines,
    "li_code",
    lineNumber.toString()
  );
  const line = lines[0];
  const frequency = line.getProperties()["frequence"];
  const num_frequency = frequency.split(" ")[0];
  return num_frequency;
}
function getAllStartEndStations() {
  const startEndStations = [];
  const linesStore = useLinesStore();
  linesStore.lineDesciptions.forEach((line) => {
    startEndStations.push(line.start);
    startEndStations.push(line.end);
  });
  return startEndStations;
}
function getStartEndStationsOfLine(lineNumber) {
  const linesStore = useLinesStore();
  const line = linesStore.lineDesciptions.find((line2) => line2.id == lineNumber);
  return line ? [line.start, line.end] : [];
}
export {
  fetchLineFrequency as f,
  getLinesId as g,
  useStationsStore as u
};
