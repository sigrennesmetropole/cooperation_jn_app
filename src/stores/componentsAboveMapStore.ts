import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cartesian2 } from '@vcmap/cesium'
import { CesiumMap, OpenlayersMap } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import { getCartesianPositionFromFeature } from '@/helpers/featureHelper'
import { useStationsStore } from '@/stores/stations'
import type { RennesApp } from '@/services/RennesApp'

export const useComponentAboveMapStore = defineStore(
  'component-above-map',
  () => {
    const cartesian: Ref<Cartesian2 | null> = ref(null)
    const labelsStationsList: Ref<
      {
        stationName: string
        feature: Feature<Geometry>
        cartesian: Cartesian2
      }[]
    > = ref([])

    function stationIsInList(stationName: string) {
      return (
        labelsStationsList.value.filter(
          (label) => label.stationName == stationName
        ).length > 0
      )
    }

    function addLabelStationToList(
      vcsApp: RennesApp,
      feature: Feature<Geometry>,
      stationName: string
    ) {
      if (!stationIsInList(stationName)) {
        const cartesian = getCartesianPositionFromFeature(vcsApp, feature)
        if (cartesian !== undefined) {
          labelsStationsList.value.push({
            stationName: stationName,
            feature: feature,
            cartesian: cartesian,
          })
        }
      }
    }

    async function updateListLabelsStations(vcsApp: RennesApp) {
      const stationsStore = useStationsStore()
      //Add new station to list
      const layer = await vcsApp.getLayerByKey(RENNES_LAYER.trambusStops)
      layer.getFeatures().forEach((feature) => {
        const stationInclude: boolean =
          stationsStore.stationsToDisplay.includes(feature.get('nom'))
        if (stationInclude) {
          addLabelStationToList(vcsApp, feature, feature.get('nom'))
        }
      })

      //Delete unused stations
      labelsStationsList.value = labelsStationsList.value.filter((label) =>
        stationsStore.stationsToDisplay.includes(label.stationName)
      )
    }

    function setCartesian(new_cartesian: Cartesian2 | null) {
      cartesian.value = new_cartesian
    }

    function updatePositionsComponents(vcsApp: RennesApp) {
      labelsStationsList.value.map((label) => {
        const cartesian = getCartesianPositionFromFeature(vcsApp, label.feature)
        if (cartesian !== undefined) {
          label.cartesian = cartesian
        }
        return label
      })
    }

    function addListenerForUpdatePositions(vcsApp: RennesApp) {
      const map = vcsApp.maps.activeMap
      if (map instanceof CesiumMap) {
        // map.getScene().postRender.addEventListener(() => {
        //   updatePositionsComponents(vcsApp)
        // })
        //TODO : delete this when 3D performance issue will be fixed with custom components
        const stationsStore = useStationsStore()
        stationsStore.clearAllStations()
      } else if (map instanceof OpenlayersMap) {
        map.postRender.addEventListener(() => {
          updatePositionsComponents(vcsApp)
        })
      }
    }

    return {
      cartesian,
      labelsStationsList,
      setCartesian,
      updatePositionsComponents,
      updateListLabelsStations,
      addListenerForUpdatePositions,
    }
  }
)
