import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const RENNES_LAYER = {
  rennesOrtho: 'rennesOrtho',
  alternativeRennesOrtho: 'alternativeRennesOrtho',
  rennesBase: 'rennesBase',
  metro: 'metro',
  bus: 'bus',
  bike: 'bike',
  trambusLines: 'trambusLines',
  trambusStops: 'trambusStops',
  parking: 'parking',
  poi: 'poi',
  // The following layers are scratch layers
  _traveltimeArrow: '_traveltimeArrow',
  customLayerLabelLine: 'customLayerLabelLine',
  _trambusStopsOutline: '_trambusStopsOutline',
}

export const RENNES_LAYERNAMES = [
  RENNES_LAYER.rennesOrtho,
  RENNES_LAYER.alternativeRennesOrtho,
  RENNES_LAYER.rennesBase,
  RENNES_LAYER.metro,
  RENNES_LAYER.bus,
  RENNES_LAYER.bike,
  RENNES_LAYER.trambusLines,
  RENNES_LAYER.trambusStops,
  RENNES_LAYER.parking,
  RENNES_LAYER.poi,
  RENNES_LAYER._traveltimeArrow,
  RENNES_LAYER.customLayerLabelLine,
  RENNES_LAYER._trambusStopsOutline,
] as const

export type RennesLayer = typeof RENNES_LAYERNAMES[number]
export type LayersVisibility = Record<RennesLayer, boolean>

export const useLayersStore = defineStore('layers', () => {
  const visibilities: Ref<LayersVisibility> = ref({
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
    _trambusStopsOutline: false,
  })

  function toggleLayer(name: RennesLayer) {
    visibilities.value = {
      ...visibilities.value,
      [name]: !visibilities.value[name],
    }
  }

  function disableLayer(name: RennesLayer) {
    visibilities.value = {
      ...visibilities.value,
      [name]: false,
    }
  }

  function enableLayer(name: RennesLayer) {
    visibilities.value = {
      ...visibilities.value,
      [name]: true,
    }
  }

  function update3DBaseLayer(is3D: boolean) {
    visibilities.value.rennesBase = !is3D
    visibilities.value.rennesOrtho = is3D
  }

  function setVisibilities(
    is3D: boolean,
    newVisibilities: {
      trambusLines: boolean
      trambusStops: boolean
      parking: boolean
      poi: boolean
      metro: boolean
      bus: boolean
      bike: boolean
      _traveltimeArrow: boolean
    }
  ) {
    update3DBaseLayer(is3D)
    visibilities.value.trambusLines = newVisibilities.trambusLines
    visibilities.value.trambusStops = newVisibilities.trambusStops
    // Set the "fake" layer for trambus stops outline to the same as the trambus stop
    visibilities.value._trambusStopsOutline = newVisibilities.trambusStops
    visibilities.value.parking = newVisibilities.parking
    visibilities.value.poi = newVisibilities.poi
    visibilities.value.metro = newVisibilities.metro
    visibilities.value.bus = newVisibilities.bus
    visibilities.value.bike = newVisibilities.bike
    visibilities.value._traveltimeArrow = newVisibilities._traveltimeArrow
  }

  const checkedMapButton: Ref<boolean> = ref(false)

  function displayAlternativeOrtho() {
    visibilities.value.rennesOrtho = false
    visibilities.value.alternativeRennesOrtho = true
    checkedMapButton.value = true
  }

  function removeAlternativeOrtho() {
    visibilities.value.alternativeRennesOrtho = false
    visibilities.value.rennesOrtho = true
    checkedMapButton.value = false
  }

  return {
    visibilities,
    checkedMapButton,
    toggleLayer,
    disableLayer,
    enableLayer,
    update3DBaseLayer,
    setVisibilities,
    displayAlternativeOrtho,
    removeAlternativeOrtho,
  }
})
