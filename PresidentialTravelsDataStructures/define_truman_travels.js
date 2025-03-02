const arcs1945 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 51.2211097,  // Antwerp, Belgium
    endLng: 4.3997081
  },
  {
    startLat: 51.2211097, // Antwerp, Belgium
    startLng: 4.3997081,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 52.4009309,  // Potsdam, Germany
    endLng: 13.0591397
  },
  {
    startLat: 52.4009309, // Potsdam, Germany
    startLng: 13.0591397,
    endLat: 50.3714122,  // Plymouth, United Kingdom
    endLng: -4.1424451
  },
  {
    startLat: 50.3714122, // Plymouth, United Kingdom
    startLng: -4.1424451,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1945 = [
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 51.2211097, lng: 4.3997081, name: "Antwerp" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
  { lat: 50.3714122, lng: -4.1424451, name: "Plymouth" },
  { lat: 52.4009309, lng: 13.0591397, name: "Potsdam" },
];

const arcs1946 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 32.2942679,  // Hamilton, Bermuda
    endLng: -64.7853167
  },
  {
    startLat: 32.2942679, // Hamilton, Bermuda
    startLng: -64.7853167,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1946 = [
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 32.2942679, lng: -64.7853167, name: "Hamilton" },
];

const arcs1947 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 23.6585116,  // Mexico, Mexico
    endLng: -102.0077097
  },
  {
    startLat: 23.6585116, // Mexico, Mexico
    startLng: -102.0077097,
    endLat: 19.4326296,  // D.F., Mexico
    endLng: -99.1331785
  },
  {
    startLat: 19.4326296, // D.F., Mexico
    startLng: -99.1331785,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 45.4208777,  // Ottawa, Canada
    endLng: -75.6901106
  },
  {
    startLat: 45.4208777, // Ottawa, Canada
    startLng: -75.6901106,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -22.9110137,  // Rio de Janeiro, Brazil
    endLng: -43.2093727
  },
  {
    startLat: -22.9110137, // Rio de Janeiro, Brazil
    startLng: -43.2093727,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1947 = [
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 23.6585116, lng: -102.0077097, name: "Mexico" },
  { lat: 19.4326296, lng: -99.1331785, name: "D.F." },
  { lat: -22.9110137, lng: -43.2093727, name: "Rio de Janeiro" },
  { lat: 45.4208777, lng: -75.6901106, name: "Ottawa" },
];

export const labelsDefaultCities = [...cities1945, ...cities1946, ...cities1947];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1945 Trips": {
    arcs: arcs1945,
    labels: cities1945
  },
  "1946 Trips": {
    arcs: arcs1946,
    labels: cities1946
  },
  "1947 Trips": {
    arcs: arcs1947,
    labels: cities1947
  },
};
