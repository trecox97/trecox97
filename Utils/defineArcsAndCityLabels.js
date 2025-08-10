const arcsUSAMoves = [
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 37.8715,  // Berkeley
    endLng: -122.2730,
    color: ["orange", "gold"]
  },
  {
    startLat: 37.8715, // Berkeley
    startLng: -122.2730,
    endLat: 38.18797,  // Pinecrest
    endLng: -120.0083704,
    color: ["gold", "blue"]
  },
  {
    start: 38.18797,  // Pinecrest
    start: -120.0083704,
    endLat: 37.8715,  // Berkeley
    endLng: -122.2730,
    color: ["blue", "gold"]
  },
  {
    startLat: 37.8715, // Berkeley
    startLng: -122.2730,
    endLat: 43.6975,  // Sun Valley
    endLng: -114.3514,
    color: ["gold", "white"]
  },
  {
    startLat: 43.6975, // Sun Valley
    startLng: -114.3514,
    endLat: 38.18797,  // Pinecrest
    endLng: -120.0083704,
    color: ["white", "blue"]
  },
  {
    startLat: 38.18797, // Pinecrest
    startLng: -120.0083704,
    endLat: 40.7608,  // Salt Lake City
    endLng: -111.8910,
    color: ["blue", "aliceblue"]
  },
  {
    startLat: 40.7608,  // Salt Lake City
    startLng: -111.8910,
    endLat: 43.6975,  // Sun Valley
    endLng: -114.3514,
    color: ["aliceblue", "white"]
  },
  {
    startLat: 38.18797, // Pinecrest
    startLng: -120.0083704,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["blue", "orange"]
  }
];

const arcsAlaskaTrip = [
  {
    startLat: 49.2827, // Vancouver
    startLng: -123.1207,
    endLat: 55.3422,  // Ketchikan
    endLng: -131.6461,
    color: ["red", "pink"]
  },
  {
    startLat: 55.3422, // Ketchikan
    startLng: -131.6461,
    endLat: 58.3019,  // Juneau
    endLng: -134.4197,
    color: ["pink", "green"]
  },
  {
    startLat: 58.3019, // Juneau
    startLng: -134.4197,
    endLat: 59.4583,  // Skagway
    endLng: -135.3139,
    color: ["green", "black"]
  },
  {
    startLat: 59.4583, // Skagway
    startLng: -135.3139,
    endLat: 60.1806,  // Carcross
    endLng: -134.7001,
    color: ["black", "white"]
  },
  {
    startLat: 60.1806, // Carcross
    startLng: -134.7001,
    endLat: 58.6658,  // Glacier Bay National Park
    endLng: -136.9002,
    color: ["white", "lightblue"]
  },
  {
    startLat: 58.6658, // Glacier Bay National Park
    startLng: -136.9002,
    endLat: 61.2126,  // College Fjord
    endLng: -147.6530,
    color: ["lightblue", "lightblue"]
  },
  {
    startLat: 61.2126, // College Fjord
    startLng: -147.6530,
    endLat: 61.2181,  // Anchorage
    endLng: -149.9003,
    color: ["lightblue", "blue"]
  },
  {
    startLat: 61.2181, // Anchorage
    startLng: -149.9003,
    endLat: 47.6062,  // Seattle
    endLng: -122.3321,
    color: ["blue", "grey"]
  }
];

const arcsPeaceCorpsTravels = [
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["orange", "green"]
  },
  {
    startLat: -1.286389, // Nairobi
    startLng: 36.817223,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["green", "orange"]
  },
  {
    startLat: -1.286389,  // Nairobi
    startLng: 36.817223,
    endLat: -4.0435,  // Mombasa
    endLng: 39.6682,
    color: ["green", "white"]
  },
  {
    startLat: -4.0435,  // Mombasa
    startLng: 39.6682,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["white", "green"]
  },
  {
    startLat: -1.286389,  // Nairobi
    startLng: 36.817223,
    endLat: -0.2833,  // Kakamega
    endLng: 34.7500,
    color: ["green", "red"]
  },
  {
    startLat: -0.2833,  // Kakamega
    startLng: 34.7500,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["red", "green"]
  },
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 51.5074,  // London
    endLng: -0.1278,
    color: ["orange", "red"]
  },
  {
    startLat: 51.5074, // London
    startLng: -0.1278,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["red", "green"]
  },
  {
    startLat: -1.286389, // Nairobi
    startLng: 36.817223,
    endLat: -6.1659,  // Zanzibar
    endLng: 39.2026,
    color: ["green", "blue"]
  },
  {
    startLat: -6.1659, // Zanzibar
    startLng: 39.2026,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["blue", "green"]
  },
  {
    startLat: -1.286389, // Nairobi
    startLng: 36.817223,
    endLat: 9.0192,  // Addis Ababa
    endLng: 38.7524,
    color: ["green", "yellow"]
  },

  {
    startLat: 9.0192, // Addis Ababa
    startLng: 38.7524,
    endLat: 13.7563,  // Bangkok
    endLng: 100.5018,
    color: ["yellow", "white", "blue"]
  },
  {
    startLat: 13.7563, // Bangkok
    startLng: 100.5018,
    endLat: 22.3193,  // Hong Kong
    endLng: 114.1694,
    color: ["blue", "white", "red"]
  },
  {
    startLat: 22.3193, // Hong Kong
    startLng: 114.1694,
    endLat: 35.682839,  // Tokyo
    endLng: 139.759455,
    color: ["red", "red"]
  },
  {
    startLat: 35.682839, // Tokyo
    startLng: 139.759455,
    endLat: 34.3853,  // Hiroshima
    endLng: 132.4553,
    color: ["red", "white"]
  },
  {
    startLat: 34.3853, // Hiroshima
    startLng: 132.4553,
    endLat: 33.5892,  // Fukuoka
    endLng: 130.4017,
    color: ["white", "white"]
  },
  {
    startLat: 33.5892, // Fukuoka
    startLng: 130.4017,
    endLat: 35.682839,  // Tokyo
    endLng: 139.759455,
    color: ["white", "red"]
  },
  {
    startLat: 35.682839, // Tokyo
    startLng: 139.759455,
    endLat: 47.6062,     // Seattle
    endLng: -122.3321,
    color: ["red", "grey"]
  },
  {
    startLat: 47.6062,   // Seattle
    startLng: -122.3321,
    endLat: 40.7128,     // New York
    endLng: -74.0060,
    color: ["grey", "orange"]
  }
];

const arcs2021MexicoTrip = [
  {
    startLat: 40.7608, // Salt Lake City
    startLng: -111.8910,
    endLat: 20.8689,  // Sayulita
    endLng: -105.4408,
    color: ["red", "white", "green"]
  },
  {
    startLat: 20.8689, // Sayulita
    startLng: -105.4408,
    endLat: 40.7608,  // Salt Lake City
    endLng: -111.8910,
    color: ["green", "white", "red"]
  }
];

const arcs2022EuroTrip = [
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 40.4168,  // Madrid
    endLng: -3.7038,
    color: ["orange", "red"]
  },
  {
    startLat: 40.4168, // Madrid
    startLng: -3.7038,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["red", "orange"]
  },
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 55.6761,  // Copenhagen
    endLng: 12.5683,
    color: ["orange", "red"]
  },
  {
    startLat: 55.6761, // Copenhagen
    startLng: 12.5683,
    endLat: 52.3676,  // Amsterdam
    endLng: 4.9041,
    color: ["red", "white", "orange"]
  },
  {
    startLat: 52.3676, // Amsterdam
    startLng: 4.9041,
    endLat: 39.6953,  // Mallorca
    endLng: 3.0176,
    color: ["orange", "red"]
  },
  {
    startLat: 39.6953,  // Mallorca
    startLng: 3.0176,
    endLat: 43.2965,  // Marseille
    endLng: 5.3698,
    color: ["red", "white"]
  },
  {
    startLat: 43.2965,  // Marseille
    startLng: 5.3698,
    endLat: 48.8566,  // Paris
    endLng: 2.3522,
    color: ["white", "blue"]
  },
  {
    startLat: 48.8566,  // Paris
    startLng: 2.3522,
    endLat: 37.8882,  // Cordoba
    endLng: -4.7794,
    color: ["blue", "white", "yellow"]
  },
  {
    startLat: 37.8882,  // Cordoba
    startLng: -4.7794,
    endLat: 40.4168,    // Madrid
    endLng: -3.7038,
    color: ["yellow", "red"]
  },
  {
    startLat: 40.4168,  // Madrid
    startLng: -3.7038,
    endLat: 48.8566,    // Paris
    endLng: 2.3522,
    color: ["red", "white", "blue"]
  }, 
  {
    startLat: 48.8566,  // Paris
    startLng: 2.3522,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["blue", "orange"]
  }
];

const arcs2008IrelandTrip = [
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 53.3498,  // Dublin
    endLng: -6.2603,
    color: ["orange", "white", "green"]
  },
  {
    startLat: 53.3498,  // Dublin
    startLng: -6.2603,
    endLat: 54.5973,  // Belfast
    endLng: -5.9301,
    color: ["green", "white", "orange"]
  },
  {
    startLat: 54.5973,  // Belfast
    startLng: -5.9301,
    endLat: 53.3498,  // Dublin
    endLng: -6.2603,
    color: ["orange", "white", "green"]
  },
  {
    startLat: 53.3498, // Dublin
    startLng: -6.2603,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["green", "white", "orange"]
  }
];

const arcs2018EuroTrip = [
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 41.9028,  // Rome
    endLng: 12.4964,
    color: ["orange", "green"]
  },
  {
    startLat: 41.9028, // Rome
    startLng: 12.4964,
    endLat: 43.7696,  // Florence
    endLng: 11.2558,
    color: ["green", "white"]
  },
  {
    startLat: 43.7696, // Florence
    startLng: 11.2558,
    endLat: 47.3769,  // Zurich
    endLng: 8.5417,
    color: ["white", "red"]
  },
  {
    startLat: 47.3769, // Zurich
    startLng: 8.5417,
    endLat: 48.8566,  // Paris
    endLng: 2.3522,
    color: ["red", "white", "blue"]
  },
  {
    startLat: 48.8566, // Paris
    startLng: 2.3522,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["blue", "orange"]
  }
];

const arcs2016StudyAbroad = [
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 52.3676,  // Amsterdam
    endLng: 4.9041,
    color: ["orange", "orange"]
  },
  {
    startLat: 52.3676,  // Amsterdam
    startLng: 4.9041,
    endLat: 49.6117,  // Luxembourg
    endLng: 6.1319,
    color: ["orange", "white"]
  },
  {
    startLat: 49.6117,  // Luxembourg
    startLng: 6.1319,
    endLat: 50.8503,  // Brussels
    endLng: 4.3517,
    color: ["white", "yellow"]
  },
  {
    startLat: 50.8503, // Brussels
    startLng: 4.3517,
    endLat: 48.8566,  // Paris
    endLng: 2.3522,
    color: ["red", "white", "blue"]
  },
  {
    startLat: 48.8566, // Paris
    startLng: 2.3522,
    endLat: 50.8503,  // Brussels
    endLng: 4.3517,
    color: ["blue", "white", "red"]
  },
  {
    startLat: 50.8503, // Brussels
    startLng: 4.3517,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["yellow", "orange"]
  }
];

const arcs2025SkiTrips = [
  {
    startLat: 35.682839, // Tokyo
    startLng: 139.759455,
    endLat: 43.0667,  // Sapporo
    endLng: 141.3500,
    color: ["red", "white"]
  },
  {
    startLat: 43.0667, // Sapporo
    startLng: 141.3500,
    endLat: 35.682839,  // Tokyo
    endLng: 139.759455,
    color: ["white", "red"]
  },
  {
    startLat: 35.682839, // Tokyo
    startLng: 139.759455,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["red", "orange"]
  },
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 35.682839,  // Tokyo
    endLng: 139.759455,
    color: ["orange", "red"]
  },
  {
    startLat: 46.8139, // Quebec City
    startLng: -71.2082,
    endLat: 40.7128,  // New York
    endLng: -74.0060,
    color: ["blue", "white", "orange"]
  },
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 46.8139,  // Quebec City
    endLng: -71.2082,
    color: ["orange", "white", "blue"]
  }
];

const allArcs = [...arcs2008IrelandTrip, ...arcs2016StudyAbroad, ...arcs2018EuroTrip, ...arcs2021MexicoTrip, ...arcs2022EuroTrip, ...arcs2025SkiTrips, ...arcsPeaceCorpsTravels, ...arcsUSAMoves, ...arcsAlaskaTrip];


const labelsDefaultCities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 35.6895, lng: 139.6917, name: "Tokyo", size: 1.2 },
  { lat: 48.8566, lng: 2.3522, name: "Paris", size: 1.2 },
  { lat: -1.2864, lng: 36.8172, name: "Nairobi", size: 1.2 },
  { lat: 37.8715, lng: -122.2730, name: "Berkeley/Pinecrest", size: 1.2 },
  { lat: 22.3193, lng: 114.1694, name: "Hong Kong/Macau", size: 1.2 },
  { lat: 40.4168, lng: -3.7038, name: "Madrid", size: 1.2 },
  { lat: 41.9028, lng: 12.4964, name: "Rome", size: 1.2 },
  { lat: 53.3498, lng: -6.2603, name: "Dublin", size: 1.2 },
  { lat: 55.6761, lng: 12.5683, name: "Copenhagen", size: 1.2 },
  { lat: 47.3769, lng: 8.5417, name: "Zurich", size: 1.2 },
  { lat: 49.2827, lng: -123.1207, name: "Vancouver", size: 1.2 },
  { lat: 43.6970, lng: -114.3514, name: "Sun Valley", size: 1.2 },
  { lat: 40.7608, lng: -111.8910, name: "Salt Lake City", size: 1.2 },
  { lat: 13.7563, lng: 100.5018, name: "Bangkok", size: 1.2 },
  { lat: 20.8689, lng: -105.4408, name: "Sayulita", size: 1.2 },
  { lat: 46.8139, lng: -71.2082, name: "Quebec City", size: 1.2 },
  { lat: 9.0192, lng: 38.7524, name: "Addis Ababa", size: 1.2 },
  { lat: -6.1659, lng: 39.2026, name: "Zanzibar", size: 1.2 },
  { lat: 43.0618, lng: 141.3545, name: "Sapporo", size: 1.2 },
  { lat: 34.3853, lng: 132.4553, name: "Hiroshima", size: 1 },
  { lat: 51.5074, lng: -0.1278, name: "London", size: 1.2 },
  { lat: 61.2181, lng: -149.9003, name: "Anchorage", size: 1.2 },
  { lat: 60.1806, lng: -134.7001, name: "Carcross", size: 1 }
];

const labelsUSACities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 43.6970, lng: -114.3514, name: "Sun Valley", size: 1.2 },
  { lat: 40.7608, lng: -111.8910, name: "Salt Lake City", size: 1.2 },
  { lat: 37.8715, lng: -122.2730, name: "Berkeley/Pinecrest", size: 1.2 }
];

const labelsAlaskaCruiseCities = [
  { lat: 49.2827, lng: -123.1207, name: "Vancouver", size: 1.2 },
  { lat: 55.3422, lng: -131.6461, name: "Ketchikan", size: 1.2 },
  { lat: 58.3019, lng: -134.4197, name: "Juneau", size: 1.2 },
  { lat: 59.4583, lng: -135.3139, name: "Skagway", size: 1.2 },
  { lat: 60.1806, lng: -134.7001, name: "Carcross", size: 1 },
  { lat: 61.2126, lng: -147.6530, name: "College Fjord", size: 1.2 },
  { lat: 47.6062, lng: -122.3321, name: "Seattle", size: 1.2 }
];

const labelsPeaceCorpsCities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 35.6895, lng: 139.6917, name: "Tokyo", size: 1.2 },
  { lat: -1.2864, lng: 36.8172, name: "Nairobi", size: 1.2 },
  { lat: 22.3193, lng: 114.1694, name: "Hong Kong/Macau", size: 1.2 },
  { lat: 51.5074, lng: -0.1278, name: "London", size: 1.2 },
  { lat: 47.6062, lng: -122.3321, name: "Seattle", size: 1.2 },
  { lat: 13.7563, lng: 100.5018, name: "Bangkok", size: 1.2 },
  { lat: 9.0192, lng: 38.7524, name: "Addis Ababa", size: 1.2 },
  { lat: -0.2833, lng: 34.7500, name: "Kakamega", size: .8 },
  { lat: -4.0435, lng: 39.6682, name: "Mombasa", size: .8 },
  { lat: -6.1659, lng: 39.2026, name: "Zanzibar", size: 1.2 },
  { lat: 33.5904, lng: 130.4017, name: "Fukuoka", size: .6 },
  { lat: 34.3853, lng: 132.4553, name: "Hiroshima", size: .6}
];

const labelsSkiTrips2025Cities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 46.8139, lng: -71.2082, name: "Quebec City", size: 1.2 },
  { lat: 35.6895, lng: 139.6917, name: "Tokyo", size: 1.2 },
  { lat: 43.0618, lng: 141.3545, name: "Sapporo", size: 1.2 }
];

const labelsEuroTrip2022Cities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 48.8566, lng: 2.3522, name: "Paris", size: 1.2 },
  { lat: 40.4168, lng: -3.7038, name: "Madrid", size: 1.1 },
  { lat: 55.6761, lng: 12.5683, name: "Copenhagen", size: 1.2 },
  { lat: 39.6953, lng: 3.0176, name: "Mallorca", size: 1 },
  { lat: 43.2965, lng: 5.3698, name: "Marseille", size: 1.2 },
  { lat: 37.8882, lng: -4.7794, name: "Cordoba", size: 1 },
  { lat: 52.3676, lng: 4.9041, name: "Amsterdam", size: 1.2 }
];

const labelsMexicoTripCities = [
  { lat: 40.7608, lng: -111.8910, name: "Salt Lake City", size: 1.2 },
  { lat: 20.8689, lng: -105.4408, name: "Sayulita", size: 1.2 }
];

const labelsEuroTrip2018Cities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 48.8566, lng: 2.3522, name: "Paris", size: 1.2 },
  { lat: 41.9028, lng: 12.4964, name: "Rome", size: 1.2 },
  { lat: 47.3769, lng: 8.5417, name: "Zurich", size: 1.2 },
  { lat: 43.7696, lng: 11.2558, name: "Florence", size: 1.2 }
];

const labelsStudyAbroad2016Cities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 52.3676, lng: 4.9041, name: "Amsterdam", size: 1 },
  { lat: 49.6117, lng: 6.1319, name: "Luxembourg", size: .7 },
  { lat: 50.8503, lng: 4.3517, name: "Brussels", size: .8 },
  { lat: 48.8566, lng: 2.3522, name: "Paris", size: .9 }
];

const labelsIrelandTrip2006Cities = [
  { lat: 40.7128, lng: -74.0060, name: "New York City", size: 1.2 },
  { lat: 53.3498, lng: -6.2603, name: "Dublin", size: .9 },
  { lat: 54.5973, lng: -5.9301, name: "Belfast", size: .9 }
];

const datasets = {
  "All Travels & Moves": {
    arcs: allArcs,
    labels: labelsDefaultCities,
    view: { lat: 40.7128, lng: -74.0060, altitude: 2 } // New York Coords
  },
  "USA Moves": {
    arcs: arcsUSAMoves,
    labels: labelsUSACities,
    view: { lat: 39.8283, lng: -98.5795, altitude: 1.5 } // Central USA
  },
  "2025 Alaska Cruise": {
    arcs: arcsAlaskaTrip,
    labels: labelsAlaskaCruiseCities,
    view: { lat: 55.3422, lng: -131.6461, altitude: 1.2 }
  },
  "2025 Ski Trips": {
    arcs: arcs2025SkiTrips,
    labels: labelsSkiTrips2025Cities,
    view: { lat: 40.7128, lng: -74.0060, altitude: 2.5 } // New York Coords
  },
  "2022-2024 Peace Corps Travels": {
    arcs: arcsPeaceCorpsTravels,
    labels: labelsPeaceCorpsCities,
    view: { lat: -1.2864, lng: 36.8172, altitude: 1.5 } // Nairobi
  },
  "2021 & 2022 Euro Trips": {
    arcs: arcs2022EuroTrip,
    labels: labelsEuroTrip2022Cities,
    view: { lat: 48.8566, lng: 2.3522, altitude: .75 } // Paris
  },
  "2021 Mexico Trip": {
    arcs: arcs2021MexicoTrip,
    labels: labelsMexicoTripCities,
    view: { lat: 23.6345, lng: -102.5528, altitude: 1.5 } // Mexico
  },
  "2018 Euro Trip": {
    arcs: arcs2018EuroTrip,
    labels: labelsEuroTrip2018Cities,
    view: { lat: 47.3769, lng: 8.5417, altitude: .75 } // Zurich
  },
  "2016 Study Abroad": {
    arcs: arcs2016StudyAbroad,
    labels: labelsStudyAbroad2016Cities,
    view: { lat: 50.8503, lng: 4.3517, altitude: .5 } // Brussels
  },
  "2008 Ireland Trip": {
    arcs: arcs2008IrelandTrip,
    labels: labelsIrelandTrip2006Cities,
    view: { lat: 50, lng: -20, altitude: 1 } // Between Ireland and New York
  }
};