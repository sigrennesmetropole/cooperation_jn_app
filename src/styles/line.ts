import type { LineNumber, SelectedTrambusLine } from '@/model/lines.model'
import { Stroke, Style } from 'ol/style'
import { getTrambusLineNumber, lineColors, lineDimmedColors } from './common'
import type { FeatureLike } from 'ol/Feature'
import type { TravelTimeModel } from '@/model/travel-time.model'
import { useHomeViewsStore } from '@/stores/views'

export type LineState = 'selected' | 'normal' | 'unselected' | 'hidden'

export function trambusLineStyle(
  lineNumber: LineNumber,
  lineState: LineState
): Style[] {
  const lineStyles = []
  const basicLineStyle = new Style({
    stroke: new Stroke({
      color: lineColors[lineNumber],
      width: 3,
    }),
    zIndex: 1,
  })
  const unselectedLineStyle = new Style({
    stroke: new Stroke({
      color: lineDimmedColors[lineNumber],
      width: 2,
    }),
    zIndex: 1,
  })

  if (lineState == 'hidden') {
    return []
  }

  if (lineState == 'selected') {
    const selectedLineStyle = basicLineStyle.clone()
    selectedLineStyle.setZIndex(2)
    selectedLineStyle.getStroke().setWidth(4)
    lineStyles.push(selectedLineStyle)
  } else if (lineState == 'normal') {
    lineStyles.push(basicLineStyle)
  } else if (lineState == 'unselected') {
    lineStyles.push(unselectedLineStyle)
  }

  return lineStyles
}

export function trambusLineViewStyleFunction(
  feature: FeatureLike,
  selectedLine: SelectedTrambusLine,
  displayOtherLine: boolean
): Style[] {
  const lineNumber = getTrambusLineNumber(feature) as LineNumber
  let lineState: LineState = 'normal'

  if (selectedLine == 0) {
    lineState = 'normal'
  } else if (getTrambusLineNumber(feature) == selectedLine) {
    lineState = 'selected'
  } else {
    lineState = displayOtherLine ? 'unselected' : 'hidden'
  }
  return trambusLineStyle(lineNumber, lineState)
}

export function trambusLineTravelTimesViewStyleFunction(
  feature: FeatureLike,
  selectedTravelTime: TravelTimeModel | null
): Style[] {
  const lineNumber = getTrambusLineNumber(feature) as LineNumber
  let lineState: LineState = 'normal'

  if (selectedTravelTime == null) {
    lineState = 'normal'
  } else if (getTrambusLineNumber(feature) == selectedTravelTime.line) {
    lineState = 'selected'
  } else {
    lineState = 'unselected'
  }
  return trambusLineStyle(lineNumber, lineState)
}

export function homeViewStyleFunction(feature: FeatureLike): Style[] {
  const lineNumber = getTrambusLineNumber(feature) as LineNumber
  const homeViewStore = useHomeViewsStore()
  let lineState: LineState = 'normal'
  if (homeViewStore.selectedLineOnHomePage == lineNumber) {
    lineState = 'selected'
  }
  return trambusLineStyle(lineNumber, lineState)
}
