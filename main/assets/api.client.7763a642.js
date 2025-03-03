import { l as linesIcon } from "./lines.f3fb9c7c.js";
import { p as photo1, a as photo2, b as photo3 } from "./photo3.1c8fee27.js";
const linesFixtures = () => [
  {
    id: 1,
    name: "Ligne T1",
    start: "La Plesse",
    end: "ZA Saint-Sulpice",
    frequency: 7
  },
  {
    id: 2,
    name: "Ligne T2",
    start: "Trois Marches",
    end: "Rigourdi\xE8re",
    frequency: 5
  },
  {
    id: 3,
    name: "Ligne T3",
    start: "Champ Daguet",
    end: "Bocage Citadin",
    frequency: 7
  },
  {
    id: 4,
    name: "Ligne T4",
    start: "Saint-Jacques - Ga\xEEt\xE9",
    end: "Bruz Centre",
    frequency: 7
  }
];
const bikeIcon = "/rennes3d-front/main/assets/bike.71284de4.svg";
const stationIcon = "/rennes3d-front/main/assets/station.1e5eef8e.svg";
const networkFiguresFixtures = () => [
  {
    id: "lines",
    figure: 7,
    description: "Nouvelles lignes",
    icon: linesIcon
  },
  {
    id: "stations",
    figure: 129,
    description: "Nouvelles stations",
    icon: stationIcon
  },
  {
    id: "bike",
    figure: 128,
    description: "Am\xE9nagement cyclables",
    unit: "km",
    icon: bikeIcon
  }
];
const lineFiguresFixtures = () => [
  {
    id: "station",
    figure: 23,
    description: "Stations"
  },
  {
    id: "parking",
    figure: 2,
    description: "Parking relais"
  },
  {
    id: "frequency",
    figure: 8,
    description: "Fr\xE9quence",
    unit: "min",
    moreInformation: "Fr\xE9quence th\xE9orique en Heure de Pointe du matin"
  }
];
const photoFixtures = () => [
  {
    url: photo1
  },
  {
    url: photo2
  },
  {
    url: photo3
  }
];
const travelTimeFixtures = () => [
  {
    line: 1,
    new: 23,
    old: 31,
    start: "Grand Quartier",
    end: "R\xE9publique"
  },
  {
    line: 1,
    new: 20,
    old: 24,
    start: "ZA Saint-Sulpice",
    end: "R\xE9publique"
  },
  {
    line: 2,
    new: 15,
    old: 15,
    start: "Trois Marches",
    end: "R\xE9publique"
  },
  {
    line: 2,
    new: 31,
    old: 35,
    start: "Rigourdi\xE8re",
    end: "R\xE9publique"
  },
  {
    line: 2,
    new: 25,
    old: 29,
    start: "Bourgchevreuil",
    end: "R\xE9publique"
  },
  {
    line: 3,
    new: 20,
    old: 25,
    start: "Uttenreuth",
    end: "R\xE9publique"
  },
  {
    line: 3,
    new: 22,
    old: 36,
    start: "Rosa Parks",
    end: "R\xE9publique"
  },
  {
    line: 3,
    new: 17,
    old: 25,
    start: "Chantepie Mairie",
    end: "R\xE9publique"
  },
  {
    line: 4,
    new: 20,
    old: 31,
    start: "A\xE9roport",
    end: "Gares"
  },
  {
    line: 4,
    new: 26,
    old: 33,
    start: "Coeur de Campus",
    end: "R\xE9publique"
  }
];
class ApiClientService {
  async fetchNetworkFigure() {
    return new Promise((resolve) => {
      resolve(networkFiguresFixtures());
    });
  }
  async fetchLineFigure() {
    return new Promise((resolve) => {
      resolve(lineFiguresFixtures());
    });
  }
  async fetchTravelTimeByIndex(index) {
    return new Promise((resolve) => {
      resolve(travelTimeFixtures()[index]);
    });
  }
  async fetchTravelTime(count = null) {
    return new Promise((resolve) => {
      if (count == null) {
        resolve(travelTimeFixtures());
      } else {
        resolve(travelTimeFixtures().slice(0, count));
      }
    });
  }
  async fetchLineDescriptions() {
    return new Promise((resolve) => {
      resolve(linesFixtures());
    });
  }
  async fetchLineDescription(lineNumber) {
    return new Promise((resolve) => {
      resolve(linesFixtures()[lineNumber - 1]);
    });
  }
  async fetchPhotos() {
    return new Promise((resolve) => {
      resolve(photoFixtures());
    });
  }
}
const apiClientService = new ApiClientService();
export {
  apiClientService as a
};
