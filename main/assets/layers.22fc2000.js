import { aK as defineStore, aL as ref } from "./vendor.d7213fe5.js";
const RENNES_LAYER = {
  rennesOrtho: "rennesOrtho",
  alternativeRennesOrtho: "alternativeRennesOrtho",
  rennesBase: "rennesBase",
  metro: "metro",
  bus: "bus",
  bike: "bike",
  trambusLines: "trambusLines",
  trambusStops: "trambusStops",
  parking: "parking",
  poi: "poi",
  _traveltimeArrow: "_traveltimeArrow",
  customLayerLabelLine: "customLayerLabelLine",
  _trambusStopsOutline: "_trambusStopsOutline"
};
const useLayersStore = defineStore("layers", () => {
  const visibilities = ref({
    rennesOrtho: false,
    alternativeRennesOrtho: false,
    rennesBase: false,
    metro: false,
    bus: false,
    bike: false,
    trambusLines: false,
    trambusStops: false,
    parking: false,
    poi: false,
    _traveltimeArrow: false,
    _trambusStopsOutline: false
  });
  function toggleLayer(name) {
    visibilities.value = {
      ...visibilities.value,
      [name]: !visibilities.value[name]
    };
  }
  function disableLayer(name) {
    visibilities.value = {
      ...visibilities.value,
      [name]: false
    };
  }
  function enableLayer(name) {
    visibilities.value = {
      ...visibilities.value,
      [name]: true
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
    visibilities.value._trambusStopsOutline = newVisibilities.trambusStops;
    visibilities.value.parking = newVisibilities.parking;
    visibilities.value.poi = newVisibilities.poi;
    visibilities.value.metro = newVisibilities.metro;
    visibilities.value.bus = newVisibilities.bus;
    visibilities.value.bike = newVisibilities.bike;
    visibilities.value._traveltimeArrow = newVisibilities._traveltimeArrow;
  }
  function displayAlternativeOrtho() {
    visibilities.value.rennesOrtho = false;
    visibilities.value.alternativeRennesOrtho = true;
  }
  function removeAlternativeOrtho() {
    visibilities.value.alternativeRennesOrtho = false;
    visibilities.value.rennesOrtho = true;
  }
  return {
    visibilities,
    toggleLayer,
    disableLayer,
    enableLayer,
    update3DBaseLayer,
    setVisibilities,
    displayAlternativeOrtho,
    removeAlternativeOrtho
  };
});
export {
  RENNES_LAYER as R,
  useLayersStore as u
};
