import { p as photo1, a as photo2, b as photo3 } from "./photo3.89e6fe14.js";
const photoFixtures = () => [
  {
    url: photo1,
    line: 1
  },
  {
    url: photo2,
    line: 2
  },
  {
    url: photo3,
    line: 3
  }
];
const servicesFixtures = () => [
  {
    type: "ticket-machine",
    idStation: 1543
  },
  {
    type: "bike-rack",
    idStation: 1543
  },
  {
    type: "box-bike",
    idStation: 1543
  },
  {
    type: "usb-charging",
    idStation: 1543
  },
  {
    type: "newspaper-distributor",
    idStation: 1543
  },
  {
    type: "vegetable-garden",
    idStation: 1543
  },
  {
    type: "public-sanitary",
    idStation: 1543
  },
  {
    type: "parcel-locker",
    idStation: 1543
  }
];
class ApiClientService {
  async fetchPhotos() {
    return new Promise((resolve) => {
      resolve(photoFixtures());
    });
  }
  async fetchPhotoByLine(lineNumber) {
    return new Promise((resolve) => {
      resolve(photoFixtures().find((photo) => photo.line == lineNumber));
    });
  }
  async fetchServicesByStation(stationId) {
    return new Promise((resolve) => {
      resolve(servicesFixtures());
    });
  }
}
const apiClientService = new ApiClientService();
export {
  apiClientService as a
};
