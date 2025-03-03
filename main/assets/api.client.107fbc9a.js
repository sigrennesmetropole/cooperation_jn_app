import { l as linesFixtures } from "./stations.be73b7da.js";
import { l as linesIcon } from "./lines.f3fb9c7c.js";
import { p as photo1, a as photo2, b as photo3 } from "./photo3.89e6fe14.js";
import { R as RENNES_LAYER } from "./layers.2680b085.js";
const stationsFixtures = () => [
  {
    id: 1488,
    li_code: "T1 T2 T3",
    nom: "Mus\xE9e Beaux Arts",
    ordre_t1: 17,
    ordre_t2: 12,
    ordre_t3: 23,
    ordre_t4: null,
    desserte: "12 67 C1 C3 C4 C6 N4 N5 Relais_b TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1500,
    li_code: "T1 T2 T3",
    nom: "Pont de Bretagne",
    ordre_t1: 15,
    ordre_t2: 10,
    ordre_t3: 21,
    ordre_t4: null,
    desserte: "153 154 155 53 54 55 56",
    desserte_scolaire: "",
    desserte_soirs_we: "53 54",
    desserte_dimanche: "53 54 55"
  },
  {
    id: 1543,
    li_code: "T1 T2 T3",
    nom: "R\xE9publique",
    ordre_t1: 16,
    ordre_t2: 11,
    ordre_t3: 22,
    ordre_t4: null,
    desserte: "100 11 153 154 155 156 167 53 54 55 56 67 API Bzh7 C1 C2 C3 C4 C5 C6 N1 N2 N3 N4 N5 Relais_a a",
    desserte_scolaire: "",
    desserte_soirs_we: "11 50 51 53 54 61 62 64 72 77 C7",
    desserte_dimanche: "53 54 55 67"
  },
  {
    id: 1514,
    li_code: "T1 T2",
    nom: "Ch\xE8ques Postaux",
    ordre_t1: 13,
    ordre_t2: 8,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "10",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1509,
    li_code: "T1 T2",
    nom: "Fran\xE7ois Ch\xE2teau",
    ordre_t1: 22,
    ordre_t2: 17,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 C6 N4 TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1513,
    li_code: "T1 T2",
    nom: "Le Mail",
    ordre_t1: 14,
    ordre_t2: 9,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 C4 N1",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1556,
    li_code: "T1 T2",
    nom: "Les Pr\xE9ales",
    ordre_t1: 24,
    ordre_t2: 19,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 C6 N4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1489,
    li_code: "T1 T2",
    nom: "Paul Bert",
    ordre_t1: 18,
    ordre_t2: 13,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 C6 N4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1565,
    li_code: "T1 T2",
    nom: "Plaine de Baud",
    ordre_t1: 23,
    ordre_t2: 18,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 C6 N4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1560,
    li_code: "T1 T2",
    nom: "Pont de Ch\xE2teaudun",
    ordre_t1: 19,
    ordre_t2: 14,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 C6 N4 TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1521,
    li_code: "T1 T2",
    nom: "Pont de Strasbourg",
    ordre_t1: 21,
    ordre_t2: 16,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "32 C4 C6 N4 TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1557,
    li_code: "T1 T2",
    nom: "Robidou",
    ordre_t1: 20,
    ordre_t2: 15,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "67 C4 C6 N4 TTZ",
    desserte_scolaire: "210",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1567,
    li_code: "T1 T2",
    nom: "Tournebride",
    ordre_t1: 25,
    ordre_t2: 20,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "167 67 C4 C6 N4",
    desserte_scolaire: "206 210",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1548,
    li_code: "T1 T3",
    nom: "La Plesse",
    ordre_t1: 1,
    ordre_t2: null,
    ordre_t3: 11,
    ordre_t4: null,
    desserte: "12 14 178 78 C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1526,
    li_code: "T1",
    nom: "Beaulieu Atalante",
    ordre_t1: 28,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "164 C4 N4 Relais_b b",
    desserte_scolaire: "200",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1538,
    li_code: "T1",
    nom: "Beaulieu Chimie",
    ordre_t1: 26,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "10 14 C4 N4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1517,
    li_code: "T1",
    nom: "Berger",
    ordre_t1: 10,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 N1",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1530,
    li_code: "T1",
    nom: "Cerisaie",
    ordre_t1: 2,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "12 14 178 78",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1573,
    li_code: "T1",
    nom: "Cucill\xE9 - Frac",
    ordre_t1: 7,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 C4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1511,
    li_code: "T1",
    nom: "Dulac",
    ordre_t1: 4,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "12 C4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1512,
    li_code: "T1",
    nom: "Grand Quartier",
    ordre_t1: 3,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "12 14 178 78 C4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1491,
    li_code: "T1",
    nom: "Guilloux",
    ordre_t1: 12,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "53 C4 N1",
    desserte_scolaire: "",
    desserte_soirs_we: "53",
    desserte_dimanche: "53"
  },
  {
    id: 1574,
    li_code: "T1",
    nom: "La Salle",
    ordre_t1: 11,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4 N1 TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1545,
    li_code: "T1",
    nom: "L\xE9onard",
    ordre_t1: 5,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 178 52 68 78 C4",
    desserte_scolaire: "",
    desserte_soirs_we: "52",
    desserte_dimanche: "52"
  },
  {
    id: 1496,
    li_code: "T1",
    nom: "Longs Champs Est",
    ordre_t1: 29,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1571,
    li_code: "T1",
    nom: "Pr\xE9fecture",
    ordre_t1: 6,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 C4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1508,
    li_code: "T1",
    nom: "Villejean-Universit\xE9",
    ordre_t1: 9,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 152 165 168 178 52 65 68 76 77 78 81 82 C4 N1 Relais_a a",
    desserte_scolaire: "205",
    desserte_soirs_we: "52 77 81",
    desserte_dimanche: "52 65 77 81 82"
  },
  {
    id: 1535,
    li_code: "T1",
    nom: "ZA Saint-Sulpice",
    ordre_t1: 30,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "34 83 C4",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1471,
    li_code: "T1",
    nom: "IUT",
    ordre_t1: 27,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1472,
    li_code: "T1",
    nom: "Parc Administratif",
    ordre_t1: 8,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1499,
    li_code: "T2",
    nom: "Berthault",
    ordre_t1: null,
    ordre_t2: 2,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 54 55 56",
    desserte_scolaire: "",
    desserte_soirs_we: "54",
    desserte_dimanche: "54 55"
  },
  {
    id: 1497,
    li_code: "T2",
    nom: "Bordage",
    ordre_t1: null,
    ordre_t2: 31,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "167 67 C6",
    desserte_scolaire: "",
    desserte_soirs_we: "11",
    desserte_dimanche: ""
  },
  {
    id: 1516,
    li_code: "T2",
    nom: "Bourgchevreuil",
    ordre_t1: null,
    ordre_t2: 28,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "34 C6",
    desserte_scolaire: "206 214 216",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1527,
    li_code: "T2",
    nom: "Cesson Coll\xE8ge",
    ordre_t1: null,
    ordre_t2: 29,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C6",
    desserte_scolaire: "221",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1536,
    li_code: "T2",
    nom: "Chalotais",
    ordre_t1: null,
    ordre_t2: 30,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "34 C6",
    desserte_scolaire: "214 220 Ts61",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1553,
    li_code: "T2",
    nom: "Champs P\xE9ans",
    ordre_t1: null,
    ordre_t2: 21,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 67 C6",
    desserte_scolaire: "206 214",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1522,
    li_code: "T2",
    nom: "G\xE9niaux",
    ordre_t1: null,
    ordre_t2: 5,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 14 54 55 56 TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "54",
    desserte_dimanche: "54 55"
  },
  {
    id: 1550,
    li_code: "T2",
    nom: "Guilloux Lorient",
    ordre_t1: null,
    ordre_t2: 7,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 53 54 55 56 C4 N1",
    desserte_scolaire: "",
    desserte_soirs_we: "54",
    desserte_dimanche: "53 54 55"
  },
  {
    id: 1539,
    li_code: "T2",
    nom: "Hublais",
    ordre_t1: null,
    ordre_t2: 23,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 C6",
    desserte_scolaire: "206 214",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1520,
    li_code: "T2",
    nom: "Lemaistre",
    ordre_t1: null,
    ordre_t2: 3,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 54 55 56",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: "54 55"
  },
  {
    id: 1549,
    li_code: "T2",
    nom: "Mare Pav\xE9e",
    ordre_t1: null,
    ordre_t2: 26,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "34 C6",
    desserte_scolaire: "206 216",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1551,
    li_code: "T2",
    nom: "Muguet",
    ordre_t1: null,
    ordre_t2: 25,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "C6",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1532,
    li_code: "T2",
    nom: "Kerviler Papeteries",
    ordre_t1: null,
    ordre_t2: 6,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1541,
    li_code: "T2",
    nom: "Rigourdi\xE8re",
    ordre_t1: null,
    ordre_t2: 32,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "67 C6",
    desserte_scolaire: "",
    desserte_soirs_we: "11",
    desserte_dimanche: ""
  },
  {
    id: 1564,
    li_code: "T2",
    nom: "Roazhon Park",
    ordre_t1: null,
    ordre_t2: 4,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 14 TTZ",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1531,
    li_code: "T2",
    nom: "Sports et Nature",
    ordre_t1: null,
    ordre_t2: 24,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 C6",
    desserte_scolaire: "206 214",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1504,
    li_code: "T2",
    nom: "Taillis",
    ordre_t1: null,
    ordre_t2: 22,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "14 167 67 C6",
    desserte_scolaire: "206 214",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1528,
    li_code: "T2",
    nom: "Trois Marches",
    ordre_t1: null,
    ordre_t2: 1,
    ordre_t3: null,
    ordre_t4: null,
    desserte: "11 54 55 56",
    desserte_scolaire: "",
    desserte_soirs_we: "54",
    desserte_dimanche: "54 55"
  },
  {
    id: 1473,
    li_code: "T2",
    nom: "Grande Pierre",
    ordre_t1: null,
    ordre_t2: 27,
    ordre_t3: null,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1502,
    li_code: "T3",
    nom: "Anatole France",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 16,
    ordre_t4: null,
    desserte: "10 Bzh7 C2",
    desserte_scolaire: "208",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1554,
    li_code: "T3",
    nom: "Brest Verdun",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 18,
    ordre_t4: null,
    desserte: "10 C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1547,
    li_code: "T3",
    nom: "Camus",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 5,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1515,
    li_code: "T3",
    nom: "CARSAT",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 31,
    ordre_t4: null,
    desserte: "11 C1 C2",
    desserte_scolaire: "214",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1510,
    li_code: "T3",
    nom: "Champ Daguet",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 1,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1495,
    li_code: "T3",
    nom: "CHP Saint-Gr\xE9goire",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 10,
    ordre_t4: null,
    desserte: "178 78 C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1524,
    li_code: "T3",
    nom: "Cimeti\xE8re Nord",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 14,
    ordre_t4: null,
    desserte: "12 C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1498,
    li_code: "T3",
    nom: "Croix Saint-H\xE9lier",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 27,
    ordre_t4: null,
    desserte: "11 C1 C2 TTZ",
    desserte_scolaire: "Ts22",
    desserte_soirs_we: "11",
    desserte_dimanche: ""
  },
  {
    id: 1523,
    li_code: "T3",
    nom: "Deux Ruisseaux",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 35,
    ordre_t4: null,
    desserte: "34 C1",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1490,
    li_code: "T3",
    nom: "Discalceat",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 7,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1501,
    li_code: "T3",
    nom: "Domaine",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 30,
    ordre_t4: null,
    desserte: "C1",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1566,
    li_code: "T3",
    nom: "Forge",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 8,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1525,
    li_code: "T3",
    nom: "Gares",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 25,
    ordre_t4: null,
    desserte: "11 12 63 Bzh7 Bzh9a Bzh9b C1 C2 Relais_a Relais_b a b",
    desserte_scolaire: "208",
    desserte_soirs_we: "11",
    desserte_dimanche: ""
  },
  {
    id: 1558,
    li_code: "T3",
    nom: "G\xE9riatrie",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 36,
    ordre_t4: null,
    desserte: "34 C1",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1493,
    li_code: "T3",
    nom: "Haut Trait",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 9,
    ordre_t4: null,
    desserte: "178 C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1492,
    li_code: "T3",
    nom: "Horizons",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 19,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1562,
    li_code: "T3",
    nom: "La\xEBnnec",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 26,
    ordre_t4: null,
    desserte: "11 C1 C2",
    desserte_scolaire: "",
    desserte_soirs_we: "11",
    desserte_dimanche: ""
  },
  {
    id: 1569,
    li_code: "T3",
    nom: "La Touche",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 17,
    ordre_t4: null,
    desserte: "10 C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1546,
    li_code: "T3",
    nom: "Les Lices",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 20,
    ordre_t4: null,
    desserte: "C2 Relais_a",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1529,
    li_code: "T3",
    nom: "Lyc\xE9e Mend\xE8s France",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 12,
    ordre_t4: null,
    desserte: "12 14 C2",
    desserte_scolaire: "204 228",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1570,
    li_code: "T3",
    nom: "Mou\xE9zy",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 28,
    ordre_t4: null,
    desserte: "11 C1",
    desserte_scolaire: "",
    desserte_soirs_we: "11",
    desserte_dimanche: ""
  },
  {
    id: 1533,
    li_code: "T3",
    nom: "Nobel",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 3,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "204",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1575,
    li_code: "T4",
    nom: "Saint-Jacques - Ga\xEEt\xE9",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 1,
    desserte: "13 156 37 C6 C7 C7ex N3 Relais_b b",
    desserte_scolaire: "245",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1572,
    li_code: "T3",
    nom: "Pierre Legrand",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 15,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1542,
    li_code: "T3",
    nom: "Ricoquais",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 4,
    ordre_t4: null,
    desserte: "C2",
    desserte_scolaire: "204 223",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1503,
    li_code: "T3",
    nom: "Rosa Parks",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 37,
    ordre_t4: null,
    desserte: "34 C1",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1518,
    li_code: "T3",
    nom: "TNB",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 24,
    ordre_t4: null,
    desserte: "11 12 C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1540,
    li_code: "T3",
    nom: "Trois Croix",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 13,
    ordre_t4: null,
    desserte: "12 14 C2",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1474,
    li_code: "T3",
    nom: "Uttenreuth",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 6,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1519,
    li_code: "T3",
    nom: "Villebois-Mareuil",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 29,
    ordre_t4: null,
    desserte: "32 C1",
    desserte_scolaire: "Ts22",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1475,
    li_code: "T3",
    nom: "Bout du Monde",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 2,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1476,
    li_code: "T3",
    nom: "Pont Boeuf",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 38,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1477,
    li_code: "T3",
    nom: "Bocage Citadin",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 39,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1478,
    li_code: "T3",
    nom: "La Poterie TER",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 32,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1544,
    li_code: "T4",
    nom: "Bruz Centre",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 21,
    desserte: "159 59 90 C7 C7ex",
    desserte_scolaire: "245",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1506,
    li_code: "T4",
    nom: "Bruz Gare",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 17,
    desserte: "159 59 90",
    desserte_scolaire: "",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1552,
    li_code: "T4",
    nom: "Centre M\xE9t\xE9o",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 8,
    desserte: "13",
    desserte_scolaire: "219 245",
    desserte_soirs_we: "",
    desserte_dimanche: "C7"
  },
  {
    id: 1479,
    li_code: "T4",
    nom: "Ch\xE2teliers",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 20,
    desserte: ""
  },
  {
    id: 1559,
    li_code: "T4",
    nom: "Coeur de Campus",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 13,
    desserte: "C7 C7ex N3",
    desserte_scolaire: "219",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1534,
    li_code: "T4",
    nom: "Corbi\xE8res",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 16,
    desserte: "C7 C7ex",
    desserte_scolaire: "219 245",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1480,
    li_code: "T4",
    nom: "Croix Madame",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 15,
    desserte: ""
  },
  {
    id: 1561,
    li_code: "T4",
    nom: "Etangs",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 12,
    desserte: "C7 C7ex N3",
    desserte_scolaire: "219",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1494,
    li_code: "T4",
    nom: "Haut Bois",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 4,
    desserte: "C7 N3",
    desserte_scolaire: "245",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1505,
    li_code: "T4",
    nom: "Ker Lann",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 14,
    desserte: "C7 C7ex N3",
    desserte_scolaire: "219",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1563,
    li_code: "T4",
    nom: "St-Jacques Mairie",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 3,
    desserte: "C7 N3",
    desserte_scolaire: "245",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1568,
    li_code: "T4",
    nom: "Vert Buisson",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 18,
    desserte: "91 C7 C7ex",
    desserte_scolaire: "245",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  },
  {
    id: 1481,
    li_code: "T4",
    nom: "La Martini\xE8re",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 5,
    desserte: ""
  },
  {
    id: 1482,
    li_code: "T4",
    nom: "Halte Saint-Jacques",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 6,
    desserte: ""
  },
  {
    id: 1507,
    li_code: "T4",
    nom: "A\xE9roport",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 7,
    desserte: "13 C6",
    desserte_scolaire: "219 245",
    desserte_soirs_we: "",
    desserte_dimanche: "C7"
  },
  {
    id: 1483,
    li_code: "T4",
    nom: "Parc Expo",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 9,
    desserte: ""
  },
  {
    id: 1484,
    li_code: "T4",
    nom: "Gaudrais",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 10,
    desserte: ""
  },
  {
    id: 1485,
    li_code: "T4",
    nom: "Parc Relais",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 11,
    desserte: ""
  },
  {
    id: 1486,
    li_code: "T4",
    nom: "Europe",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 19,
    desserte: ""
  },
  {
    id: 1537,
    li_code: "T3",
    nom: "Chantepie Mairie",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 34,
    ordre_t4: null,
    desserte: "13 34 C1",
    desserte_scolaire: "Ts22",
    desserte_soirs_we: "",
    desserte_dimanche: ""
  },
  {
    id: 1487,
    li_code: "T3",
    nom: "Loges",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: 33,
    ordre_t4: null,
    desserte: ""
  },
  {
    id: 1555,
    li_code: "T4",
    nom: "Malti\xE8re",
    ordre_t1: null,
    ordre_t2: null,
    ordre_t3: null,
    ordre_t4: 2,
    desserte: "13 C6 C7 N3",
    desserte_scolaire: "209",
    desserte_soirs_we: "C7",
    desserte_dimanche: "C7"
  }
];
const bikeIcon = "/cooperation_jn_trambus/main/assets/bike.71284de4.svg";
const stationIcon = "/cooperation_jn_trambus/main/assets/station.1e5eef8e.svg";
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
const travelTimeFixtures = () => [
  {
    id: 1,
    line: 1,
    new: 23,
    old: 31,
    start: "R\xE9publique",
    end: "Grand Quartier"
  },
  {
    id: 2,
    line: 1,
    new: 20,
    old: 24,
    start: "ZA Saint-Sulpice",
    end: "R\xE9publique"
  },
  {
    id: 3,
    line: 2,
    new: 15,
    old: 15,
    start: "Trois Marches",
    end: "R\xE9publique"
  },
  {
    id: 4,
    line: 2,
    new: 31,
    old: 35,
    start: "Rigourdi\xE8re",
    end: "R\xE9publique"
  },
  {
    id: 5,
    line: 2,
    new: 25,
    old: 29,
    start: "Bourgchevreuil",
    end: "R\xE9publique"
  },
  {
    id: 6,
    line: 3,
    new: 20,
    old: 25,
    start: "Uttenreuth",
    end: "R\xE9publique"
  },
  {
    id: 7,
    line: 3,
    new: 22,
    old: 36,
    start: "Rosa Parks",
    end: "R\xE9publique"
  },
  {
    id: 8,
    line: 3,
    new: 17,
    old: 25,
    start: "Chantepie Mairie",
    end: "R\xE9publique"
  },
  {
    id: 9,
    line: 4,
    new: 20,
    old: 31,
    start: "A\xE9roport",
    end: "Gares"
  },
  {
    id: 10,
    line: 4,
    new: 30,
    old: 32,
    start: "Coeur de Campus",
    end: "Gares"
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
const LIST_BUS = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C7ex"];
function sortStationsByOrder(stations, lineNumber) {
  function compareStations(lineNumber2, s1, s2) {
    let compare = 0;
    switch (lineNumber2) {
      case 1:
        compare = s1.ordre_t1 - s2.ordre_t1;
        break;
      case 2:
        compare = s1.ordre_t2 - s2.ordre_t2;
        break;
      case 3:
        compare = s1.ordre_t3 - s2.ordre_t3;
        break;
      case 4:
        compare = s1.ordre_t4 - s2.ordre_t4;
        break;
    }
    return compare;
  }
  stations = stations.sort((s1, s2) => compareStations(lineNumber, s1, s2));
  return stations;
}
function filterStationsByLineNumber(stations, num_line) {
  return stations.filter((station) => station.li_code.includes(num_line));
}
function isStationOnLine(stations, name_station, num_line) {
  const station = stations.find(
    (station2) => station2.nom === name_station
  );
  return isOnLine(station.li_code, num_line);
}
function isOnLine(li_code, num_line) {
  return li_code.includes(`T${num_line}`);
}
function keepOnlyUsefulDessertes(stations) {
  return stations.map((station) => {
    let new_desserte = "";
    if (station.desserte !== void 0 && station.desserte !== null) {
      station.desserte.split(" ").map((desserte) => {
        if (LIST_BUS.includes(desserte)) {
          new_desserte += new_desserte == "" ? desserte : " " + desserte;
        }
      });
    }
    station.desserte = new_desserte;
    return station;
  });
}
function formatLiCode(stations, num_line) {
  return stations.map((station) => {
    let new_li_code = "";
    station.li_code.split(" ").map((li_line) => {
      if (li_line != num_line) {
        li_line = li_line.replace("T", "");
        new_li_code += new_li_code == "" ? li_line : " " + li_line;
      }
    });
    station.li_code = new_li_code;
    return station;
  });
}
async function fetchStationsByLine(rennesApp, lineNumber) {
  const stations = [];
  const stationsFeatures = await rennesApp.getFeaturesThatContainAttributeFromLayer(
    RENNES_LAYER.trambusStops,
    "li_code",
    lineNumber.toString()
  );
  stationsFeatures.forEach((feature) => {
    stations.push({
      id: feature.get("id"),
      nom: feature.get("nom"),
      li_code: feature.get("li_code"),
      ordre_t1: null,
      ordre_t2: null,
      ordre_t3: null,
      ordre_t4: null,
      parking: false,
      desserte: feature.get("desserte"),
      desserte_scolaire: feature.get("desserte_scolaire"),
      desserte_soirs_we: feature.get("desserte_soirs_we"),
      desserte_dimanche: feature.get("desserte_dimanche")
    });
  });
  return stations;
}
async function completeStationsData(rennesApp, stations, lineNumber, stationsOrder, parkings) {
  stations.forEach((station) => {
    const stationOrder = stationsOrder.find(
      (order) => order.nom === station.nom
    );
    if (stationOrder === void 0) {
      return station;
    }
    station.ordre_t1 = stationOrder.ordre_t1;
    station.ordre_t2 = stationOrder.ordre_t2;
    station.ordre_t3 = stationOrder.ordre_t3;
    station.ordre_t4 = stationOrder.ordre_t4;
    const parking = parkings.find(
      (parking2) => parking2.arret_nom === station.nom
    );
    if (parking !== void 0) {
      station.parking = true;
    }
    return station;
  });
  stations = sortStationsByOrder(stations, lineNumber);
  stations = keepOnlyUsefulDessertes(stations);
  const num_line = "T" + lineNumber.toString();
  stations = formatLiCode(stations, num_line);
  return stations;
}
class ApiClientService {
  async fetchNetworkFigure() {
    return new Promise((resolve) => {
      resolve(networkFiguresFixtures());
    });
  }
  async fetchTravelTimeByLine(lineNumber) {
    return new Promise((resolve) => {
      resolve(
        travelTimeFixtures().filter((travel) => travel.line == lineNumber)
      );
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
  async fetchLineFrequency(lineNumber) {
    return new Promise((resolve) => {
      resolve(linesFixtures()[lineNumber - 1]["frequency"]);
    });
  }
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
  async fetchStationsOrderByLine(lineNumber) {
    return new Promise((resolve) => {
      resolve(stationsFixtures());
    }).then((val) => {
      const num_line = "T" + lineNumber.toString();
      val = filterStationsByLineNumber(val, num_line);
      return val;
    });
  }
  async fetchStationDescription(stationId) {
    return new Promise((resolve) => {
      resolve(stationsFixtures().find((station) => station.id == stationId));
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
  apiClientService as a,
  stationsFixtures as b,
  completeStationsData as c,
  fetchStationsByLine as f,
  isStationOnLine as i,
  stationIcon as s
};
