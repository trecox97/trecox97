const arcs1906 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 9.3553005,  // Colon, Panama
    endLng: -79.8974085
  },
  {
    startLat: 9.3553005, // Colon, Panama
    startLng: -79.8974085,
    endLat: 8.9714493,  // Panama City, Panama
    endLng: -79.5341802
  },
  {
    startLat: 8.9714493, // Panama City, Panama
    startLng: -79.5341802,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1906 = [
  { lat: 8.9714493, lng: -79.5341802, name: "Panama City" },
  { lat: 9.3553005, lng: -79.8974085, name: "Colon" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

export const labelsDefaultCities = [...cities1906];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1906 Trips": {
    arcs: arcs1906,
    labels: cities1906
  },
};
