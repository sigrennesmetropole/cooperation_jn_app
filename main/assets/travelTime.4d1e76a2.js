import { R as RENNES_LAYER } from "./layers.a751972b.js";
async function getAllTravelTimes(rennesApp) {
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.trambusTempsParcours);
  const travelTimes = [];
  layer.getFeatures().forEach((feature) => {
    const num_line = feature.get("li_code").split("T")[1];
    travelTimes.push({
      id: feature.get("id"),
      line: num_line,
      new: parseInt(feature.get("temps_futur")),
      old: parseInt(feature.get("temps_actuel")),
      start: feature.get("arret_depart"),
      end: feature.get("arret_destination")
    });
  });
  travelTimes.sort((a, b) => {
    return a.line - b.line;
  });
  return travelTimes;
}
async function fetchTravelTime(rennesApp, count = null) {
  const allTravelTimes = await getAllTravelTimes(rennesApp);
  if (count == null) {
    return allTravelTimes;
  } else {
    return allTravelTimes.slice(0, count);
  }
}
async function fetchTravelTimeByLine(rennesApp, lineNumber) {
  const allTravelTimes = await getAllTravelTimes(rennesApp);
  return allTravelTimes.filter((travel) => travel.line == lineNumber);
}
export {
  fetchTravelTimeByLine as a,
  fetchTravelTime as f
};
