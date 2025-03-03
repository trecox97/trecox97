const arcs1920 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 9.3553005,  // Colon, Panama
    endLng: -79.8974085
  },
  {
    startLat: 9.3553005, // Colon, Panama
    startLng: -79.8974085,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 51.41259,  // Kingston (Jamaica), United Kingdom
    endLng: -0.2974
  },
  {
    startLat: 51.41259, // Kingston (Jamaica), United Kingdom
    startLng: -0.2974,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1920 = [
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 9.3553005, lng: -79.8974085, name: "Colon" },
  { lat: 51.41259, lng: -0.2974, name: "Kingston (Jamaica)" }
];

const arcs1923 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 49.2608724,  // Vancouver, Canada
    endLng: -123.113952
  },
  {
    startLat: 49.2608724, // Vancouver, Canada
    startLng: -123.113952,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1923 = [
  { lat: 49.2608724, lng: -123.113952, name: "Vancouver" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

export const labelsDefaultCities = [...cities1920, ...cities1923];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1920 Trips": {
    arcs: arcs1920,
    labels: cities1920
  },
  "1923 Trips": {
    arcs: arcs1923,
    labels: cities1923
  },
};
