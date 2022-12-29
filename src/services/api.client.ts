import { linesFixtures } from '@/model/lines.fixtures'
import type { LineModel } from '@/model/lines.model'
import { networkFiguresFixtures } from '@/model/network-figures.fixtures'
import { lineFiguresFixtures } from '@/model/line-figures.fixtures'
import { photoFixtures } from '@/model/photos.fixtures'
import type { PhotoModel } from '@/model/photos.model'
import { travelTimeFixtures } from '@/model/travel-time.fixtures'
import type { TravelTimeModel } from '@/model/travel-time.model'
import type { NetworkFigureModel } from '../model/network-figures.model'
import type { LineFigureModel } from '../model/line-figures.model'

class ApiClientService {
  async fetchNetworkFigure() {
    return new Promise<NetworkFigureModel[]>((resolve) => {
      resolve(networkFiguresFixtures())
    })
  }
  // TODO: Add line number as a parameter
  async fetchLineFigure() {
    return new Promise<LineFigureModel[]>((resolve) => {
      resolve(lineFiguresFixtures())
    })
  }

  async fetchTravelTimeByIndex(index: number) {
    return new Promise<TravelTimeModel>((resolve) => {
      resolve(travelTimeFixtures()[index])
    })
  }

  async fetchTravelTime(count: number | null = null) {
    return new Promise<TravelTimeModel[]>((resolve) => {
      if (count == null) {
        resolve(travelTimeFixtures())
      } else {
        resolve(travelTimeFixtures().slice(0, count))
      }
    })
  }

  async fetchLineDescriptions() {
    return new Promise<LineModel[]>((resolve) => {
      resolve(linesFixtures())
    })
  }

  async fetchLineDescription(lineNumber: number) {
    return new Promise<LineModel>((resolve) => {
      resolve(linesFixtures()[lineNumber - 1])
    })
  }

  async fetchPhotos() {
    return new Promise<PhotoModel[]>((resolve) => {
      resolve(photoFixtures())
    })
  }
}

export const apiClientService = new ApiClientService()
