const arcsData = [
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 36.7783,  // California
      endLng: -119.4179,
      color: ["red", "blue"]
    },
    {
      startLat: 36.7783, // California
      startLng: -119.4179,
      endLat: 44.0682,  // Idaho
      endLng: -114.7420,
      color: ["green", "white"]
    },
    {
      startLat: 44.0682, // Idaho
      startLng: -114.7420,
      endLat: 36.7783,  // California
      endLng: -119.4179,
      color: ["blue", "white"]
    },
    {
      startLat: 36.7783, // California
      startLng: -119.4179,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["white", "red"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: -1.286389,  // Nairobi
      endLng: 36.817223,
      color: ["red", "green"]
    },
    {
      startLat: -1.286389, // Nairobi
      startLng: 36.817223,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["red", "green"]
    },
    {
      startLat: 40.7608, // Salt Lake City
      startLng: -111.8910,
      endLat: 20.6534,  // Puerto Vallarta
      endLng: -105.2253,
      color: ["blue", "yellow"]
    },
    {
      startLat: 20.6534, // Puerto Vallarta
      startLng: -105.2253,
      endLat: 40.7608,  // Salt Lake City
      endLng: -111.8910,
      color: ["yellow", "blue"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 40.4168,  // Madrid
      endLng: -3.7038,
      color: ["red", "yellow"]
    },
    {
      startLat: 46.8139, // Quebec City
      startLng: -71.2082,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["blue", "white"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 46.8139,  // Quebec City
      endLng: -71.2082,
      color: ["blue", "white"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 55.6761,  // Copenhagen
      endLng: 12.5683,
      color: ["white", "blue"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 51.5074,  // London
      endLng: -0.1278,
      color: ["red", "white"]
    },
    {
      startLat: 55.6761, // Copenhagen
      startLng: 12.5683,
      endLat: 52.3676,  // Amsterdam
      endLng: 4.9041,
      color: ["blue", "white"]
    },
    {
      startLat: 52.3676, // Amsterdam
      startLng: 4.9041,
      endLat: 39.6953,  // Mallorca
      endLng: 3.0176,
      color: ["red", "yellow"]
    },
    {
      startLat: 39.6953, // Mallorca
      startLng: 3.0176,
      endLat: 43.2965,  // Marseille
      endLng: 5.3698,
      color: ["white", "blue"]
    },
    {
      startLat: 43.2965, // Marseille
      startLng: 5.3698,
      endLat: 40.4168,  // Madrid
      endLng: -3.7038,
      color: ["red", "yellow"]
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
      color: ["blue", "white"]
    },
    {
      startLat: -6.1659, // Zanzibar
      startLng: 39.2026,
      endLat: -1.286389,  // Nairobi
      endLng: 36.817223,
      color: ["white", "blue"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 53.3498,  // Dublin
      endLng: -6.2603,
      color: ["green", "white"]
    },
    {
      startLat: 53.3498, // Dublin
      startLng: -6.2603,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["white", "green"]
    },
    {
      startLat: 40.4168, // Madrid
      startLng: -3.7038,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["red", "yellow"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 41.9028,  // Rome
      endLng: 12.4964,
      color: ["white", "red"]
    },
    {
      startLat: 41.9028, // Rome
      startLng: 12.4964,
      endLat: 43.7696,  // Florence
      endLng: 11.2558,
      color: ["red", "blue"]
    },
    {
      startLat: 43.7696, // Florence
      startLng: 11.2558,
      endLat: 47.3769,  // Zurich
      endLng: 8.5417,
      color: ["blue", "white"]
    },
    {
      startLat: 47.3769, // Zurich
      startLng: 8.5417,
      endLat: 48.8566,  // Paris
      endLng: 2.3522,
      color: ["white", "blue"]
    },
    {
      startLat: 48.8566, // Paris
      startLng: 2.3522,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["red", "blue"]
    },
    {
      startLat: 52.3676, // Amsterdam
      startLng: 4.9041,
      endLat: 50.8503,  // Brussels
      endLng: 4.3517,
      color: ["blue", "yellow"]
    },
    {
      startLat: 50.8503, // Brussels
      startLng: 4.3517,
      endLat: 48.8566,  // Paris
      endLng: 2.3522,
      color: ["yellow", "red"]
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
      color: ["yellow", "red"]
    },
    {
      startLat: -1.286389, // Nairobi
      startLng: 36.817223,
      endLat: 9.03,  // Addis Ababa
      endLng: 38.74,
      color: ["green", "red"]
    },
    {
      startLat: 9.03, // Addis Ababa
      startLng: 38.74,
      endLat: 13.7563,  // Bangkok
      endLng: 100.5018,
      color: ["red", "white"]
    },
    {
      startLat: 13.7563, // Bangkok
      startLng: 100.5018,
      endLat: 22.3193,  // Hong Kong
      endLng: 114.1694,
      color: ["white", "blue"]
    },
    {
      startLat: 22.3193, // Hong Kong
      startLng: 114.1694,
      endLat: 35.682839,  // Tokyo
      endLng: 139.759455,
      color: ["blue", "red"]
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
      color: ["white", "blue"]
    },
    {
      startLat: 33.5892, // Fukuoka
      startLng: 130.4017,
      endLat: 35.682839,  // Tokyo
      endLng: 139.759455,
      color: ["blue", "red"]
    },
    {
      startLat: 35.682839, // Tokyo
      startLng: 139.759455,
      endLat: 40.7128,  // New York
      endLng: -74.0060,
      color: ["red", "blue"]
    },
    {
      startLat: 40.7128, // New York
      startLng: -74.0060,
      endLat: 35.682839,  // Tokyo
      endLng: 139.759455,
      color: ["red", "blue"]
    },
    {
      startLat: 35.682839, // Tokyo
      startLng: 139.759455,
      endLat: 43.0667,  // Sapporo
      endLng: 141.3500,
      color: ["blue", "white"]
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
      color: ["blue", "red"]
    }
  ];
  
  const globeContainer = document.getElementById('globeViz');

  // Create the Globe instance
  const globe = new Globe(globeContainer)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(() => Math.random())
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 4000 + 500);
  
  // Function to update the globe size on window resize
  function resizeGlobe() {
      globeContainer.style.width = window.innerWidth - 80 + "px";
      globeContainer.style.height = window.innerHeight + "px";
      globe.width([window.innerWidth - 80]);
      globe.height([window.innerHeight]);
  }
  
  // Resize on window load and resize event
  window.addEventListener('resize', resizeGlobe);
  resizeGlobe(); // Initial resize