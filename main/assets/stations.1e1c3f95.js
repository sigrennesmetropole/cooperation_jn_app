import { aK as defineStore, aL as ref } from "./vendor.a9455e02.js";
const linesFixtures = () => [
  {
    id: 1,
    name: "Ligne T1",
    start: "La Plesse",
    end: "ZA Saint-Sulpice",
    frequency: 7
  },
  {
    id: 2,
    name: "Ligne T2",
    start: "Trois Marches",
    end: "Rigourdi\xE8re",
    frequency: 5
  },
  {
    id: 3,
    name: "Ligne T3",
    start: "Champ Daguet",
    end: "Bocage Citadin",
    frequency: 7
  },
  {
    id: 4,
    name: "Ligne T4",
    start: "Saint-Jacques - Ga\xEEt\xE9",
    end: "Bruz Centre",
    frequency: 7
  }
];
function getAllStartEndStations() {
  const startEndStations = [];
  linesFixtures().forEach((line) => {
    startEndStations.push(line.start);
    startEndStations.push(line.end);
  });
  return startEndStations;
}
function getStartEndStationsOfLine(lineNumber) {
  const line = linesFixtures().find((line2) => line2.id == lineNumber);
  return line ? [line.start, line.end] : [];
}
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
  function lineViewSetUpStationsToDisplay(lineNumber) {
    clearAllStations();
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
    lineOfStation
  };
});
export {
  linesFixtures as l,
  useStationsStore as u
};
