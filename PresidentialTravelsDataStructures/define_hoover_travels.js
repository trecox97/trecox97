const arcs1928 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 13.292907,  // Amapala, Honduras
    endLng: -87.6533563
  },
  {
    startLat: 13.292907, // Amapala, Honduras
    startLng: -87.6533563,
    endLat: 13.7523996,  // Cutuco, El Salvador
    endLng: -88.6599211
  },
  {
    startLat: 13.7523996, // Cutuco, El Salvador
    startLng: -88.6599211,
    endLat: 12.4816978,  // Corinto, Nicaragua
    endLng: -87.1742553
  },
  {
    startLat: 12.4816978, // Corinto, Nicaragua
    startLng: -87.1742553,
    endLat: 9.9325427,  // San Jose, Costa Rica
    endLng: -84.0795782
  },
  {
    startLat: 9.9325427, // San Jose, Costa Rica
    startLng: -84.0795782,
    endLat: -2.1900563,  // Guayaquil, Ecuador
    endLng: -79.8868741
  },
  {
    startLat: -2.1900563, // Guayaquil, Ecuador
    startLng: -79.8868741,
    endLat: -12.0621065,  // Lima, Peru
    endLng: -77.0365256
  },
  {
    startLat: -12.0621065, // Lima, Peru
    startLng: -77.0365256,
    endLat: -23.6463741,  // Antofagasta, Chile
    endLng: -70.3980033
  },
  {
    startLat: -23.6463741, // Antofagasta, Chile
    startLng: -70.3980033,
    endLat: -33.4377756,  // Santiago, Chile
    endLng: -70.6504502
  },
  {
    startLat: -33.4377756, // Santiago, Chile
    startLng: -70.6504502,
    endLat: -34.6083696,  // Buenos Aires, Argentina
    endLng: -58.4440583
  },
  {
    startLat: -34.6083696, // Buenos Aires, Argentina
    startLng: -58.4440583,
    endLat: -34.9058916,  // Montevideo, Uruguay
    endLng: -56.1913095
  },
  {
    startLat: -34.9058916, // Montevideo, Uruguay
    startLng: -56.1913095,
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

const cities1928 = [
  { lat: 13.292907, lng: -87.6533563, name: "Amapala" },
  { lat: -2.1900563, lng: -79.8868741, name: "Guayaquil" },
  { lat: -34.6083696, lng: -58.4440583, name: "Buenos Aires" },
  { lat: -22.9110137, lng: -43.2093727, name: "Rio de Janeiro" },
  { lat: 13.7523996, lng: -88.6599211, name: "Cutuco" },
  { lat: -23.6463741, lng: -70.3980033, name: "Antofagasta" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 12.4816978, lng: -87.1742553, name: "Corinto" },
  { lat: 9.9325427, lng: -84.0795782, name: "San Jose" },
  { lat: -34.9058916, lng: -56.1913095, name: "Montevideo" },
  { lat: -33.4377756, lng: -70.6504502, name: "Santiago" },
  { lat: -12.0621065, lng: -77.0365256, name: "Lima" },
];

export const labelsDefaultCities = [...cities1928];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1928 Trips": {
    arcs: arcs1928,
    labels: cities1928
  },
};
