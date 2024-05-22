import type { Point } from 'ol/geom'

export type LineNumber = 1 | 2 | 3 | 4
export type SelectedTrambusLine = 0 | LineNumber

export interface LineModel {
  id: LineNumber
  name: string
  start: string
  end: string
  frequency: number
  // eslint-disable-next-line
  prettyPoint: Point
}
