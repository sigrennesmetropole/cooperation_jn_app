import {
  AbstractInteraction,
  EventType,
  ModificationKeyType,
  vcsLayerName,
  type InteractionEvent,
} from '@vcmap/core'
import type { Feature } from 'ol'
import type { Point } from 'ol/geom'
import { useStationsStore } from '@/stores/stations'
import { useLineViewsStore, useViewsStore } from '@/stores/views'
import router from '@/router'
import { viewList } from '@/model/views.model'
import type { RennesApp } from '@/services/RennesApp'

class SelectStationInteraction extends AbstractInteraction {
  private readonly _stationsLayerName: string
  private _rennesApp: RennesApp

  constructor(rennesApp: RennesApp, stationsLayerName: string) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE)

    this._stationsLayerName = stationsLayerName
    this._rennesApp = rennesApp
  }

  async pipe(event: InteractionEvent): Promise<InteractionEvent> {
    const isLayerFeature =
      event.feature?.[vcsLayerName] === this._stationsLayerName
    const stationsStore = useStationsStore()

    if (isLayerFeature) {
      document.body.style.cursor = 'pointer'
      const feature: Feature<Point> = event.feature as Feature<Point>
      const stationName = feature?.get('nom')
      if (event.type & EventType.CLICK) {
        const viewStore = useViewsStore()
        if (viewStore.currentView == viewList.line) {
          const lineViewStore = useLineViewsStore()
          const lineNumber = lineViewStore.selectedLine
          const stationId = feature?.get('id')
          router.push(`/line/${lineNumber}/station/${stationId}`)
        }
      } else if (event.type & EventType.MOVE) {
        stationsStore.addStationToDisplay(stationName)
        stationsStore.flagClearStationsExceptPermanently = true
      }
    } else {
      if (stationsStore.flagClearStationsExceptPermanently) {
        stationsStore.clearStationsExceptPermanently()
        stationsStore.flagClearStationsExceptPermanently = false
      }

      document.body.style.cursor = 'auto'
    }
    return event
  }
}

export default SelectStationInteraction
