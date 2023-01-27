import {
  ArcStyle,
  ArrowEnd,
  markVolatile,
  mercatorProjection,
  VectorLayer,
} from '@vcmap/core'
import type { LineString } from 'ol/geom'
import { Feature } from 'ol'
import type { RennesApp } from '@/services/RennesApp'

export function getScratchLayer(
  app: RennesApp,
  layerName: string
): VectorLayer {
  if (app.layers.hasKey(layerName)) {
    return app.layers.getByKey(layerName) as VectorLayer
  }

  const layer = new VectorLayer({
    name: layerName,
    projection: mercatorProjection.toJSON(),
    zIndex: 3,
    vectorProperties: {
      altitudeMode: 'absolute',
    },
  })

  markVolatile(layer)
  app.layers.add(layer)
  layer.activate()
  return layer
}

export function updateArrowFeatures(
  linestrings: LineString[],
  arrowLayer: VectorLayer
) {
  arrowLayer.removeAllFeatures()
  const features: Feature[] = []
  linestrings.forEach((linestring) => {
    features.push(new Feature(linestring))
  })
  arrowLayer.addFeatures(features)
}

export function updateArrowLayerStyle(
  arrowLayer: VectorLayer,
  is3D: boolean,
  // False negative: Property 'END' does not exist on type 'typeof ArrowEnd'
  // @ts-ignore
  end: ArrowEnd = ArrowEnd.END
) {
  // Update arrow's style
  let arrowColor = '#000000'
  if (is3D) {
    arrowColor = '#FFFFFF'
  }
  arrowLayer.setStyle(
    new ArcStyle({
      width: 1.5,
      arcFactor: 0.15,
      color: arrowColor,
      end: end,
    })
  )
}
