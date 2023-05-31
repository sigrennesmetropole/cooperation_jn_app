import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { TravelTimeModel } from '@/model/travel-time.model'
import type { Cartesian2 } from '@vcmap-cesium/engine'
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import type { RennesApp } from '@/services/RennesApp'
import { getCartesianPositionFromFeature } from '@/helpers/featureHelper'
import type { Viewpoint } from '@vcmap/core'
import { getCenterOfArrow } from '@/helpers/arcHelpers'
import {
  addGenericListenerForUpdatePositions,
  updateCartesianPositions,
} from '@/services/aboveMapService'

export const useTraveltimeInteractionStore = defineStore(
  'traveltime-interaction-map',
  () => {
    const selectedTraveltime: Ref<TravelTimeModel | null> = ref(null)
    const displayedTravelTimes: Ref<TravelTimeModel[]> = ref([])

    function selectTraveltime(traveltime: TravelTimeModel | null) {
      selectedTraveltime.value = traveltime
    }

    function addDisplayTravelTime(traveltime: TravelTimeModel) {
      displayedTravelTimes.value.push(traveltime)
    }

    function isOnlySelected(travelTime: TravelTimeModel) {
      return (
        displayedTravelTimes.value.length === 1 &&
        displayedTravelTimes.value[0].id === travelTime.id
      )
    }
    function setDisplayTravelTimes(travelTimes: TravelTimeModel[]) {
      displayedTravelTimes.value = travelTimes
    }
    function removeDisplayTravelTime() {
      displayedTravelTimes.value = []
    }

    return {
      selectedTraveltime,
      displayedTravelTimes,
      addDisplayTravelTime,
      isOnlySelected,
      setDisplayTravelTimes,
      removeDisplayTravelTime,
      selectTraveltime,
    }
  }
)

export const useTravelTimeBoxesStore = defineStore(
  'travelTime-boxes-map',
  () => {
    const travelTimeBoxes: Ref<
      {
        travelTimeFeature: TravelTimeModel
        feature: Feature
        cartesian: Cartesian2
      }[]
    > = ref([])
    const previousViewPoint: Ref<Viewpoint | null> = ref(null)

    async function setTravelTimeBoxes(
      rennesApp: RennesApp,
      travelTimes: TravelTimeModel[],
      is3D: boolean
    ) {
      travelTimeBoxes.value = []
      travelTimes.forEach((travelTime) => {
        const feature = getCenterOfArrow(rennesApp, is3D, travelTime)
        feature.then((feat) => {
          const cartesian = getCartesianPositionFromFeature(rennesApp, feat)

          if (cartesian !== undefined) {
            travelTimeBoxes.value.push({
              travelTimeFeature: travelTime,
              cartesian: cartesian,
              feature: feat,
            })
          }
        })
      })
    }

    function cleanTravelTimesBoxes() {
      travelTimeBoxes.value = []
    }

    function updatePositionsTravelTimeBoxes(rennesApp: RennesApp) {
      updateCartesianPositions(rennesApp, travelTimeBoxes.value)
    }

    function addListenerForUpdatePositions(rennesApp: RennesApp) {
      addGenericListenerForUpdatePositions(
        rennesApp,
        previousViewPoint.value,
        updatePositionsTravelTimeBoxes
      )
    }

    return {
      travelTimeBoxes,
      addListenerForUpdatePositions,
      setTravelTimeBoxes,
      cleanTravelTimesBoxes,
    }
  }
)

export const useLineInteractionStore = defineStore(
  'line-interaction-map',
  () => {
    const selectedLines: Ref<string[]> = ref([])
    const clickPosition: Ref<Cartesian2 | null> = ref(null)
    const featureLabel: Ref<Feature<Geometry> | null> = ref(null)

    function selectLines(lines: string[]) {
      selectedLines.value = lines
    }

    function selectClickPosition(cartesian: Cartesian2 | null) {
      clickPosition.value = cartesian
    }

    function selectFeatureLabel(feature: Feature<Geometry>) {
      featureLabel.value = feature
    }

    function resetLinesLabels() {
      selectedLines.value = []
      clickPosition.value = null
      featureLabel.value = null
    }

    return {
      selectedLines,
      selectLines,
      clickPosition,
      selectClickPosition,
      featureLabel,
      selectFeatureLabel,
      resetLinesLabels,
    }
  }
)

export const useMetroInteractionStore = defineStore(
  'metro-interaction-map',
  () => {
    const selectedMetros: Ref<string[]> = ref([])
    const clickPosition: Ref<Cartesian2 | null> = ref(null)
    const featureLabel: Ref<Feature<Geometry> | null> = ref(null)

    function selectMetros(metroLines: string[]) {
      selectedMetros.value = metroLines
    }

    function selectClickPosition(cartesian: Cartesian2 | null) {
      clickPosition.value = cartesian
    }

    function selectFeatureLabel(feature: Feature<Geometry>) {
      featureLabel.value = feature
    }

    function resetMetroLabels() {
      selectedMetros.value = []
      clickPosition.value = null
      featureLabel.value = null
    }

    return {
      selectedMetros,
      selectMetros,
      clickPosition,
      selectClickPosition,
      featureLabel,
      selectFeatureLabel,
      resetMetroLabels,
    }
  }
)

export const useBusInteractionStore = defineStore('bus-interaction-map', () => {
  const selectedBusLines: Ref<string[]> = ref([])
  const clickPosition: Ref<Cartesian2 | null> = ref(null)
  const featureLabel: Ref<Feature<Geometry> | null> = ref(null)

  function selectBusLines(busLines: string[]) {
    selectedBusLines.value = busLines
  }

  function selectClickPosition(cartesian: Cartesian2 | null) {
    clickPosition.value = cartesian
  }

  function selectFeatureLabel(feature: Feature<Geometry>) {
    featureLabel.value = feature
  }

  function resetBusLabels() {
    selectedBusLines.value = []
    clickPosition.value = null
    featureLabel.value = null
  }

  return {
    selectedBusLines,
    selectBusLines,
    clickPosition,
    selectClickPosition,
    featureLabel,
    selectFeatureLabel,
    resetBusLabels,
  }
})

export const useBikeInteractionStore = defineStore(
  'bike-interaction-map',
  () => {
    const clickPosition: Ref<Cartesian2 | null> = ref(null)
    const featureLabel: Ref<Feature<Geometry> | null> = ref(null)

    function selectClickPosition(cartesian: Cartesian2 | null) {
      clickPosition.value = cartesian
    }

    function selectFeatureLabel(feature: Feature<Geometry>) {
      featureLabel.value = feature
    }

    function resetBikeLabels() {
      clickPosition.value = null
      featureLabel.value = null
    }

    return {
      clickPosition,
      selectClickPosition,
      featureLabel,
      selectFeatureLabel,
      resetBikeLabels,
    }
  }
)

export const usePoiInteractionStore = defineStore('poi-interaction-map', () => {
  const currentFeaturePoi: Ref<Feature<Geometry> | null> = ref(null)

  function selectCurrentFeaturePoi(feature: Feature<Geometry> | null) {
    currentFeaturePoi.value = feature
  }

  return {
    currentFeaturePoi,
    selectCurrentFeaturePoi,
  }
})
