const arcs1912 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 52.5056354,  // Bermuda, United Kingdom
    endLng: -1.4789788
  },
  {
    startLat: 52.5056354, // Bermuda, United Kingdom
    startLng: -1.4789788,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1912 = [
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 52.5056354, lng: -1.4789788, name: "Bermuda" },
];

const arcs1918 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 48.8534951,  // Paris, France
    endLng: 2.3483915
  },
  {
    startLat: 48.8534951, // Paris, France
    startLng: 2.3483915,
    endLat: 48.1111324,  // Chaumont, France
    endLng: 5.1395849
  },
  {
    startLat: 48.1111324, // Chaumont, France
    startLng: 5.1395849,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
    endLat: 54.8948478,  // Carlisle, United Kingdom
    endLng: -2.9362311
  },
  {
    startLat: 54.8948478, // Carlisle, United Kingdom
    startLng: -2.9362311,
    endLat: 53.4794892,  // Manchester, United Kingdom
    endLng: -2.2451148
  },
  {
    startLat: 53.4794892, // Manchester, United Kingdom
    startLng: -2.2451148,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1918 = [
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 53.4794892, lng: -2.2451148, name: "Manchester" },
  { lat: 48.8534951, lng: 2.3483915, name: "Paris" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 54.8948478, lng: -2.9362311, name: "Carlisle" },
  { lat: 48.1111324, lng: 5.1395849, name: "Chaumont" },
];

const arcs1919 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 48.8534951,  // Paris, France
    endLng: 2.3483915
  },
  {
    startLat: 48.8534951, // Paris, France
    startLng: 2.3483915,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 44.40726,  // Genoa, Italy
    endLng: 8.9338624
  },
  {
    startLat: 44.40726, // Genoa, Italy
    startLng: 8.9338624,
    endLat: 45.4641943,  // Milan, Italy
    endLng: 9.1896346
  },
  {
    startLat: 45.4641943, // Milan, Italy
    startLng: 9.1896346,
    endLat: 45.0677551,  // Turin, Italy
    endLng: 7.6824892
  },
  {
    startLat: 45.0677551, // Turin, Italy
    startLng: 7.6824892,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 48.8534951,  // Paris, France
    endLng: 2.3483915
  },
  {
    startLat: 48.8534951, // Paris, France
    startLng: 2.3483915,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 50.4116233,  // Charleroi, Belgium
    endLng: 4.444528
  },
  {
    startLat: 50.4116233, // Charleroi, Belgium
    startLng: 4.444528,
    endLat: 51.0281381,  // Malines, Belgium
    endLng: 4.4803453
  },
  {
    startLat: 51.0281381, // Malines, Belgium
    startLng: 4.4803453,
    endLat: 50.879202,  // Louvain, Belgium
    endLng: 4.7011675
  },
  {
    startLat: 50.879202, // Louvain, Belgium
    startLng: 4.7011675,
    endLat: 48.8534951,  // Paris, France
    endLng: 2.3483915
  },
  {
    startLat: 48.8534951, // Paris, France
    startLng: 2.3483915,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1919 = [
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 51.0281381, lng: 4.4803453, name: "Malines" },
  { lat: 50.4116233, lng: 4.444528, name: "Charleroi" },
  { lat: 50.879202, lng: 4.7011675, name: "Louvain" },
  { lat: 48.8534951, lng: 2.3483915, name: "Paris" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 45.4641943, lng: 9.1896346, name: "Milan" },
  { lat: 45.0677551, lng: 7.6824892, name: "Turin" },
  { lat: 44.40726, lng: 8.9338624, name: "Genoa" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
];

export const labelsDefaultCities = [...cities1912, ...cities1918, ...cities1919];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1912 Trip": {
    arcs: arcs1912,
    labels: cities1912
  },
  "1918 Trip": {
    arcs: arcs1918,
    labels: cities1918
  },
  "1919 Trips": {
    arcs: arcs1919,
    labels: cities1919
  },
};
