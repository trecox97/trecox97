const arcs1928 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 23.135305,  // Havana, Cuba
    endLng: -82.3589631
  },
  {
    startLat: 23.135305, // Havana, Cuba
    startLng: -82.3589631,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1928 = [
  { lat: 23.135305, lng: -82.3589631, name: "Havana" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

export const labelsDefaultCities = [...cities1928];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1928 Trip": {
    arcs: arcs1928,
    labels: cities1928
  },
};
