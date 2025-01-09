import { RENNES_LAYER } from '@/stores/layers'
import type { StyleFunction } from 'ol/style/Style'
import type { Style } from 'ol/style'
import type { VectorLayer } from '@vcmap/core'
import type { RennesApp } from '@/services/RennesApp'
import {
  trambusLineViewStyleFunction,
  trambusLineTravelTimesViewStyleFunction,
  homeViewStyleFunction,
  trambusLineStyle,
} from '@/styles/line'

import { useMap3dStore } from '@/stores/map'
import { useHomeViewsStore, useLineViewsStore } from '@/stores/views'
import {
  trambusStopLineViewStyleFunction,
  trambusStopOutlineTravelTimesViewStyleFunction,
  trambusStopTravelTimesViewStyleFunction,
  trambusStopOutlineLineViewStyleFunction,
} from '@/styles/trambusStop'
import {
  isTrambusStopBelongsLineToTravelTime,
  isTrambusStopBelongsToLine,
} from '@/services/station'
import {
  getTrambusLineNumber,
  getTrambusTraceType,
  parkingStyle,
} from '@/styles/common'
import { useTraveltimeInteractionStore } from '@/stores/interactionMap'
import { updateTraveltimeArrow } from '@/services/arrow'
import type { TravelTimeModel } from '@/model/travel-time.model'
import { staticLabelStyleFunction } from '@/styles/staticLabel'
import { useLayersStore } from '@/stores/layers'

export function clearLayerAndApplyStyle(
  rennesApp: RennesApp,
  layerName: string,
  style: Style | StyleFunction | undefined,
  clearFeaturesStyle: boolean = false
) {
  const layer = rennesApp.layers.getByKey(layerName) as VectorLayer
  if (layer && style) {
    layer.clearStyle()
    if (clearFeaturesStyle) layer.getFeatures().map((f) => f.setStyle(style))
    layer.setStyle(style)
  }
}

export async function updateLineViewStyle(rennesApp: RennesApp) {
  const mapStore = useMap3dStore()
  const lineViewStore = useLineViewsStore()
  const traveltimeInteractionStore = useTraveltimeInteractionStore()
  clearLayerAndApplyStyle(
    rennesApp,
    RENNES_LAYER.trambusLines,
    (feature) =>
      trambusLineViewStyleFunction(
        feature,
        lineViewStore.selectedLine,
        lineViewStore.displayedOtherLines
      ),
    true
  )
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.trambusStops, (feature) =>
    trambusStopLineViewStyleFunction(
      feature,
      lineViewStore.selectedLine,
      isTrambusStopBelongsToLine(feature, lineViewStore.selectedLine) ||
        isTrambusStopBelongsLineToTravelTime(
          feature,
          traveltimeInteractionStore.displayedTravelTimes
        ),
      mapStore.is3D()
    )
  )
  clearLayerAndApplyStyle(
    rennesApp,
    RENNES_LAYER._trambusStopsOutline,
    (feature) =>
      trambusStopOutlineLineViewStyleFunction(
        feature,
        lineViewStore.selectedLine,
        isTrambusStopBelongsToLine(feature, lineViewStore.selectedLine),
        mapStore.is3D()
      )
  )
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.parking, parkingStyle)
  await updateTraveltimeArrow(rennesApp)

  const layerStore = useLayersStore()
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.staticLabel, (feature) =>
    staticLabelStyleFunction(feature, layerStore.visibilities)
  )
}

function clearLayerAndApplyStyleTravelTimes(
  rennesApp: RennesApp,
  displayedTravelTime: TravelTimeModel | null
) {
  const mapStore = useMap3dStore()
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.trambusLines, (feature) =>
    trambusLineTravelTimesViewStyleFunction(feature, displayedTravelTime)
  )
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.trambusStops, (feature) =>
    trambusStopTravelTimesViewStyleFunction(
      feature,
      displayedTravelTime,
      mapStore.is3D()
    )
  )
  clearLayerAndApplyStyle(
    rennesApp,
    RENNES_LAYER._trambusStopsOutline,
    (feature) =>
      trambusStopOutlineTravelTimesViewStyleFunction(
        feature,
        displayedTravelTime,
        mapStore.is3D()
      )
  )
}

export async function updateTravelTimesViewStyle(rennesApp: RennesApp) {
  const traveltimeInteractionStore = useTraveltimeInteractionStore()
  if (traveltimeInteractionStore.displayedTravelTimes.length === 0) {
    clearLayerAndApplyStyleTravelTimes(rennesApp, null)
  } else {
    traveltimeInteractionStore.displayedTravelTimes.forEach(
      (displayedTravelTime) => {
        clearLayerAndApplyStyleTravelTimes(rennesApp, displayedTravelTime)
      }
    )
  }
  await updateTraveltimeArrow(rennesApp)
  const layerStore = useLayersStore()
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.staticLabel, (feature) =>
    staticLabelStyleFunction(feature, layerStore.visibilities)
  )
}

export async function updateStationViewStyle(rennesApp: RennesApp) {
  const mapStore = useMap3dStore()
  const lineViewStore = useLineViewsStore()
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.trambusLines, (feature) =>
    trambusLineViewStyleFunction(
      feature,
      lineViewStore.selectedLine,
      lineViewStore.displayedOtherLines
    )
  )
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.trambusStops, (feature) =>
    trambusStopLineViewStyleFunction(
      feature,
      lineViewStore.selectedLine,
      isTrambusStopBelongsToLine(feature, lineViewStore.selectedLine),
      mapStore.is3D()
    )
  )
  clearLayerAndApplyStyle(
    rennesApp,
    RENNES_LAYER._trambusStopsOutline,
    (feature) =>
      trambusStopOutlineLineViewStyleFunction(
        feature,
        lineViewStore.selectedLine,
        isTrambusStopBelongsToLine(feature, lineViewStore.selectedLine),
        mapStore.is3D()
      )
  )
  const layerStore = useLayersStore()
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.staticLabel, (feature) =>
    staticLabelStyleFunction(feature, layerStore.visibilities)
  )
}

export function updateHomeViewStyle(rennesApp: RennesApp) {
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.trambusLines, (feature) =>
    homeViewStyleFunction(feature)
  )
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.parking, parkingStyle)

  const layerStore = useLayersStore()
  clearLayerAndApplyStyle(rennesApp, RENNES_LAYER.staticLabel, (feature) =>
    staticLabelStyleFunction(feature, layerStore.visibilities)
  )
}

export async function highlightHoveredLine(rennesApp: RennesApp) {
  const homeViewStore = useHomeViewsStore()
  const layer = await rennesApp.getLayerByKey(RENNES_LAYER.trambusLines)
  const selectedLineFeature = layer
    .getFeatures()
    .find(
      (f) =>
        getTrambusLineNumber(f) === homeViewStore.getSelectedLineOnHomePage()!
    )

  const previousSelectedLineFeature = layer
    .getFeatures()
    .find(
      (f) =>
        getTrambusLineNumber(f) ===
        homeViewStore.getPreviousSelectedLineOnHomePage()!
    )
  selectedLineFeature?.setStyle(
    trambusLineStyle(
      homeViewStore.getSelectedLineOnHomePage()!,
      'selected',
      getTrambusTraceType(selectedLineFeature)
    )
  )
  previousSelectedLineFeature?.setStyle(
    trambusLineStyle(
      homeViewStore.getPreviousSelectedLineOnHomePage()!,
      'normal',
      getTrambusTraceType(previousSelectedLineFeature)
    )
  )
}
