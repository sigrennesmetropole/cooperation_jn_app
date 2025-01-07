// @ts-nocheck
import type { LineNumber } from '@/model/lines.model'
import * as ol_color from 'ol/color'
import type { FeatureLike } from 'ol/Feature'
import { Icon, Style } from 'ol/style'
import parkingIcon from '../assets/icons/parkingRelaisMin.png'
import pinIconBlack from '../assets/icons/pin-black.svg'
import pinIconWhite from '../assets/icons/pin-white.svg'
import { VectorStyleItem } from '@vcmap/core'
import colors from '@/constants/colors.js'

export function getTrambusLineNumber(feature: FeatureLike): number {
  const lineNumberString = feature.get('li_code') // e.g. T1
  return Number(lineNumberString.substr(1, 2))
}

export function getTrambusTraceType(feature: FeatureLike): string {
  return feature.get('trace_type') // e.g. base, variante
}

export const lineColorsOl: Record<LineNumber, ol_color.Color> = {
  1: ol_color.fromString(colors['T1-classic']),
  2: ol_color.fromString(colors['T2-classic']),
  3: ol_color.fromString(colors['T3-classic']), // emerald-600
  4: ol_color.fromString(colors['T4-classic']), // purple-600
}

// TODO: it seems the dimmed color is not so dimmed
export const lineDimmedColors: Record<LineNumber, ol_color.Color> = {
  1: ol_color.fromString(colors['T1-light']),
  2: ol_color.fromString(colors['T2-light']),
  3: ol_color.fromString(colors['T3-light']),
  4: ol_color.fromString(colors['T4-light']),
}

export const parkingStyle: Style = new Style({
  image: new Icon({
    opacity: 1,
    src: parkingIcon,
    scale: 1,
  }),
})

export function generatePoiStyle(
  label: string,
  distance: string,
  is3D: boolean,
  displayDistance: boolean,
  hovering: boolean = false
) {
  if (displayDistance) {
    label = label + '\n' + distance + 'm'
  }
  label = label.replace("'", ' ')
  // @ts-ignore
  return new VectorStyleItem({
    text: {
      font: is3D ? 'bold 14px DM Sans' : 'bold 14px DM Sans',
      fill: {
        color: is3D ? '#ffffff' : '#000000',
        width: 2,
      },
      stroke: {
        color: is3D ? '#000000' : '#ffffff',
        width: 2,
      },
      offsetX: 20,
      offsetY: is3D ? -10 : 0,
      textAlign: 'left',
      justify: 'left',
    },
    label: label,
    image: {
      src: is3D ? pinIconWhite : pinIconBlack,
      scale: hovering && !is3D ? 1.5 : 1,
    },
  })
}

export function generatePoiStyleWithoutLabel(is3D: boolean) {
  // @ts-ignore
  return new VectorStyleItem({
    image: {
      src: is3D ? pinIconWhite : pinIconBlack,
      scale: 1,
    },
  })
}
