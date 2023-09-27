import type { ParkingModel } from '@/model/parkings.model'
import type { RennesApp } from '@/services/RennesApp'
import { RENNES_LAYER } from '@/stores/layers'
import type { StationModel } from '@/model/stations.model'

export async function fetchParkingsByStations(
  rennesApp: RennesApp,
  stations: StationModel[]
) {
  const parkings: ParkingModel[] = []
  const parkingsFeatures = await rennesApp.getFeaturesFromLayer(
    RENNES_LAYER.parking
  )

  stations.forEach((station) => {
    const nom_station = station['nom']
    const parkings_on_station = parkingsFeatures.filter(
      (feature) => feature.getProperties()['arret_nom'] === nom_station
    )
    if (parkings_on_station.length > 0) {
      parkings_on_station.forEach((feature) => {
        parkings.push({
          id: feature.get('id'),
          arret_nom: feature.get('arret_nom'),
          li_code: feature.get('li_code'),
          nom: feature.get('nom'),
          nb_max_places: feature.get('nb_max_places'),
          nb_min_places: feature.get('nb_min_places'),
        })
      })
    }
  })
  return parkings
}
