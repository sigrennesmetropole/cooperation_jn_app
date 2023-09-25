import type { OpenlayersMap } from '@vcmap/core'
import { Projection, StyleItem } from '@vcmap/core'
import type { Map as olMap } from 'ol'
import { NearFarScalar, Math as CesiumMath } from '@vcmap-cesium/engine'
import type { FeatureLike } from 'ol/Feature'
/**
 * Calculates the camera distance based on the current viewport, view and resolution
 * @param {number} resolution
 * @param {import("ol").Map} map
 */
function getDistanceFromResolution(resolution: number, map: olMap): number {
  const viewport = map.getViewport()
  const size = {
    height: viewport.offsetHeight || 1,
    width: viewport.offsetWidth || 1,
  }
  const fov = Math.PI / 3.0
  const aspectRatio = size.width / size.height
  const fovy = Math.atan(Math.tan(fov * 0.5) / aspectRatio) * 2.0
  const view = map.getView()
  const metersPerUnit = view.getProjection().getMetersPerUnit() ?? 1

  const visibleMapUnits = resolution * size.height
  const wgs84Center = Projection.mercatorToWgs84(view.getCenter() ?? [0, 0])
  const relativeCircumference = Math.cos(
    Math.abs(CesiumMath.toRadians(wgs84Center[1]))
  )
  const visibleMeters = visibleMapUnits * metersPerUnit * relativeCircumference
  return Math.abs(visibleMeters / 2 / Math.tan(fovy / 2))
}

/**
 * Patches the layers style & sets the layers scaleByDistance so that the features in this layer
 * are only shown based on a given distance.
 */
export function setDistanceDisplayConditionFeature(
  layer: StyleItem,
  map: OpenlayersMap
): void {
  const currentStyle = layer.style
  layer.style = (feature: FeatureLike, resolution: number) => {
    let featureDistance
    const scaleByDistance = feature.get('olcs_scaleByDistance')
    let featureNearFar = undefined
    if (scaleByDistance !== undefined && scaleByDistance.length === 4) {
      featureNearFar = new NearFarScalar(
        scaleByDistance[0],
        scaleByDistance[1],
        scaleByDistance[2],
        scaleByDistance[3]
      )
    }
    if (featureNearFar) {
      featureDistance = featureNearFar.far
    }
    if (
      featureDistance != null &&
      getDistanceFromResolution(resolution, map.olMap!) > featureDistance
    ) {
      return undefined
    }
    if (typeof currentStyle === 'function') {
      return currentStyle(feature, resolution)
    }
    return currentStyle
  }
}
