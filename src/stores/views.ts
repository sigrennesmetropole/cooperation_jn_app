import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TravelTimeModel } from '@/model/travel-time.model'
import { type View, viewList } from '@/model/views.model'
import type { SelectedTrambusLine } from '@/model/lines.model'
import { useMapViewPointStore } from '@/stores/map'
import { usePoiParkingStore } from '@/stores/poiParking'
import { useStationsStore } from '@/stores/stations'
import type { LineNumber } from '@/model/lines.model'
import {
  useTravelTimeBoxesStore,
  useTraveltimeInteractionStore,
} from '@/stores/interactionMap'

export const useViewsStore = defineStore('views', () => {
  // TODO: use union string for list of view
  const currentView: Ref<View> = ref(viewList.home)
  const mapViewpointStore = useMapViewPointStore()
  const poiStore = usePoiParkingStore()
  const stationsStore = useStationsStore()
  const lineViewsStore = useLineViewsStore()
  const travelTimeBoxesStore = useTravelTimeBoxesStore()
  const traveltimeInteractionStore = useTraveltimeInteractionStore()

  function setCurrentView(
    view: View,
    selectedLine: SelectedTrambusLine,
    selectedStation: string | null
  ) {
    currentView.value = view
    if (view === viewList.line && selectedLine) {
      poiStore.activeLineProfile(selectedLine.toString())
      lineViewsStore.selectLine(selectedLine)
      stationsStore.lineViewSetUpStationsToDisplay(selectedLine)

      mapViewpointStore.updateViewpoint(`line${selectedLine}`, true)
    } else if (view === viewList.station && selectedLine && selectedStation) {
      poiStore.activeStationProfile(selectedStation)
      lineViewsStore.selectLine(selectedLine)
      mapViewpointStore.updateViewpoint(viewList.station, true)
      traveltimeInteractionStore.removeDisplayTravelTime()
      travelTimeBoxesStore.cleanTravelTimesBoxes()
    } else if (view === viewList.home) {
      setHomeAsCurrentView()
    }
  }

  function setHomeAsCurrentView() {
    poiStore.activeHomeProfile()
    lineViewsStore.selectLine(0)
    stationsStore.homeViewSetUpStationsToDisplay()
    mapViewpointStore.updateViewpoint('rennes', true)
    travelTimeBoxesStore.cleanTravelTimesBoxes()
    traveltimeInteractionStore.removeDisplayTravelTime()

    currentView.value = viewList.home
  }

  function setLegalNoticeAsCurrentView() {
    currentView.value = viewList.legalnotice
  }

  return {
    currentView,
    setCurrentView,
    setHomeAsCurrentView,
    setLegalNoticeAsCurrentView,
  }
})

export const useTravelTimesViewStore = defineStore('traveltimes-views', () => {
  const selectedTravelTime: Ref<TravelTimeModel | null> = ref(null)

  return { selectedTravelTime }
})

export const useHomeViewsStore = defineStore('home-views', () => {
  const selectedLineOnHomePage: Ref<LineNumber | null> = ref(null)
  const previousSelectedLineOnHomePage: Ref<LineNumber | null> = ref(null)

  function setSelectedLineOnHomePage(lineNumber: LineNumber | null) {
    previousSelectedLineOnHomePage.value = selectedLineOnHomePage.value
    selectedLineOnHomePage.value = lineNumber
  }

  function getPreviousSelectedLineOnHomePage() {
    return previousSelectedLineOnHomePage.value
  }

  function getSelectedLineOnHomePage() {
    return selectedLineOnHomePage.value
  }
  return {
    selectedLineOnHomePage,
    previousSelectedLineOnHomePage,
    setSelectedLineOnHomePage,
    getPreviousSelectedLineOnHomePage,
    getSelectedLineOnHomePage,
  }
})

export const useLineViewsStore = defineStore('line-views', () => {
  const selectedTravelTime: Ref<TravelTimeModel | null> = ref(null)
  const selectedLine: Ref<SelectedTrambusLine> = ref(0)
  const displayedOtherLines: Ref<boolean> = ref(false)

  function selectLine(line: SelectedTrambusLine) {
    selectedLine.value = line
    displayedOtherLines.value = false
  }

  function displayOtherLines() {
    displayedOtherLines.value = !displayedOtherLines.value
  }

  return {
    selectLine,
    displayedOtherLines,
    selectedLine,
    displayOtherLines,
    selectedTravelTime,
  }
})
