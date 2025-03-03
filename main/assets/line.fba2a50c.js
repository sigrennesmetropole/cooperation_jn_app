import { R as RENNES_LAYER } from "./layers.b0101898.js";
import { aL as defineStore, aM as ref } from "./vendor.b604c758.js";
const LIST_BUS = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C7ex"];
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
function sortStationsByOrder(stations, lineNumber) {
  function compareStations(lineNumber2, s1, s2) {
    let compare = 0;
    switch (lineNumber2) {
      case 1:
        compare = s1.ordre_t1 - s2.ordre_t1;
        break;
      case 2:
        compare = s1.ordre_t2 - s2.ordre_t2;
        break;
      case 3:
        compare = s1.ordre_t3 - s2.ordre_t3;
        break;
      case 4:
        compare = s1.ordre_t4 - s2.ordre_t4;
        break;
    }
    return compare;
  }
  stations = stations.sort((s1, s2) => compareStations(lineNumber, s1, s2));
  return stations;
}
function isStationOnLine(stations, name_station, num_line) {
  const station = stations.find(
    (station2) => station2.nom === name_station
  );
  if (station === void 0) {
    return false;
  }
  return isOnLine(station.li_code, num_line);
}
function isOnLine(li_code, num_line) {
  return li_code.includes(`T${num_line}`);
}
function keepOnlyUsefulDessertes(stations) {
  return stations.map((station) => {
    let new_desserte = "";
    if (station.desserte !== void 0 && station.desserte !== null) {
      station.desserte.split(" ").map((desserte) => {
        if (LIST_BUS.includes(desserte)) {
          new_desserte += new_desserte == "" ? desserte : " " + desserte;
        }
      });
    }
    station.desserte = new_desserte;
    return station;
  });
}
function formatLiCode(stations, num_line) {
  return stations.map((station) => {
    let new_li_code = "";
    station.li_code.split(" ").map((li_line) => {
      if (li_line != num_line) {
        li_line = li_line.replace("T", "");
        new_li_code += new_li_code == "" ? li_line : " " + li_line;
      }
    });
    station.li_code = new_li_code;
    return station;
  });
}
async function completeStationsData(stations, lineNumber, parkings) {
  stations.forEach((station) => {
    const parking = parkings.find(
      (parking2) => parking2.arret_nom === station.nom
    );
    if (parking !== void 0) {
      station.parking = true;
    }
    return station;
  });
  stations = sortStationsByOrder(stations, lineNumber);
  stations = keepOnlyUsefulDessertes(stations);
  const num_line = "T" + lineNumber.toString();
  stations = formatLiCode(stations, num_line);
  return stations;
}
function buildStationModelFromStationFeature(feature) {
  return {
    id: feature.get("id"),
    nom: feature.get("nom"),
    li_code: feature.get("li_code"),
    ordre_t1: feature.get("ordre_t1"),
    ordre_t2: feature.get("ordre_t2"),
    ordre_t3: feature.get("ordre_t3"),
    ordre_t4: feature.get("ordre_t4"),
    parking: false,
    desserte: feature.get("desserte"),
    desserte_scolaire: feature.get("desserte_scolaire"),
    desserte_soirs_we: feature.get("desserte_soirs_we"),
    desserte_dimanche: feature.get("desserte_dimanche")
  };
}
async function getStations(rennesApp) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.trambusStops);
  const stations = [];
  layer.getFeatures().forEach((feature) => {
    stations.push(buildStationModelFromStationFeature(feature));
  });
  return stations;
}
async function fetchStationsByLine(rennesApp, lineNumber) {
  const stations = [];
  const stationsFeatures = await rennesApp.getFeaturesThatContainAttributeFromLayer(
    RENNES_LAYER.trambusStops,
    "li_code",
    lineNumber.toString()
  );
  stationsFeatures.forEach((feature) => {
    stations.push(buildStationModelFromStationFeature(feature));
  });
  return stations;
}
async function fetchStationDescription(rennesApp, stationId) {
  const stations = await getStations(rennesApp);
  return stations.find((station) => station.id == stationId);
}
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
function getStartAndEndStationOfLine(stations, lineNumber) {
  const startStation = stations.find(
    (s) => s["ordre_t" + lineNumber.toString()] == 1
  );
  const endStation = stations.find(
    (s) => s["ordre_t" + lineNumber.toString()] == stations.length
  );
  return [startStation, endStation];
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
async function fetchLineDescriptions(rennesApp) {
  const lines = await getLinesId(rennesApp);
  const linesDescriptions = [];
  for (const line of lines) {
    const stations = await fetchStationsByLine(rennesApp, parseInt(line));
    const [startStation, endStation] = getStartAndEndStationOfLine(
      stations,
      parseInt(line)
    );
    const frequency = await fetchLineFrequency(rennesApp, parseInt(line));
    linesDescriptions.push({
      id: parseInt(line),
      name: "Ligne T" + line,
      start: (startStation == null ? void 0 : startStation.nom) || "",
      end: (endStation == null ? void 0 : endStation.nom) || "",
      frequency: parseInt(frequency)
    });
  }
  return linesDescriptions;
}
async function fetchLineDescription(rennesApp, lineNumber) {
  const lines = await fetchLineDescriptions(rennesApp);
  return lines.find((line) => line.id == lineNumber);
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
  getStations as a,
  fetchLineDescriptions as b,
  useLinesStore as c,
  fetchLineDescription as d,
  fetchStationsByLine as e,
  fetchLineFrequency as f,
  getLinesId as g,
  completeStationsData as h,
  isStationOnLine as i,
  fetchStationDescription as j,
  useStationsStore as u
};
