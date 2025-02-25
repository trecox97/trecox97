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
    color: ["green", "green"]
  },
  {
    startLat: -4.0435,  // Mombasa
    startLng: 39.6682,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["green", "green"]
  },
  {
    startLat: -1.286389,  // Nairobi
    startLng: 36.817223,
    endLat: -0.0917,  // Kisumu
    endLng: 34.7679,
    color: ["green", "green"]
  },
  {
    startLat: -0.0917,  // Kisumu
    startLng: 34.7679,
    endLat: -1.286389,  // Nairobi
    endLng: 36.817223,
    color: ["green", "green"]
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
    endLat: 9.03,  // Addis Ababa
    endLng: 38.74,
    color: ["green", "yellow"]
  },
  {
    startLat: 9.03, // Addis Ababa
    startLng: 38.74,
    endLat: 13.7563,  // Bangkok
    endLng: 100.5018,
    color: ["yellow", "blue"]
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
    endLat: 20.6534,  // Puerto Vallarta
    endLng: -105.2253,
    color: ["red", "white", "green"]
  },
  {
    startLat: 20.6534, // Puerto Vallarta
    startLng: -105.2253,
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
    color: ["red", "orange"]
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
    color: ["blue", "red"]
  },
  {
    startLat: 37.8882,  // Córdoba
    startLng: -4.7794,
    endLat: 40.4168,    // Madrid
    endLng: -3.7038,
    color: ["red", "red"]
  },
  {
    startLat: 40.4168,  // Madrid
    startLng: -3.7038,
    endLat: 48.8566,    // Paris
    endLng: 2.3522,
    color: ["red", "blue"]
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
    color: ["orange", "green"]
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
    color: ["green", "orange"]
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
    color: ["red", "blue"]
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
    color: ["yellow", "blue"]
  },
  {
    startLat: 48.8566, // Paris
    startLng: 2.3522,
    endLat: 50.8503,  // Brussels
    endLng: 4.3517,
    color: ["blue", "yellow"]
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
    color: ["blue", "orange"]
  },
  {
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 46.8139,  // Quebec City
    endLng: -71.2082,
    color: ["orange", "blue"]
  }
];

const allArcs = [...arcs2008IrelandTrip, ...arcs2016StudyAbroad, ...arcs2018EuroTrip, ...arcs2021MexicoTrip, ...arcs2022EuroTrip, ...arcs2025SkiTrips, ...arcsPeaceCorpsTravels, ...arcsUSAMoves];