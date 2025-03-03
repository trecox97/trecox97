const arcs2017 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 24.638916,  // Riyadh, Saudi Arabia
    endLng: 46.7160104
  },
  {
    startLat: 24.638916, // Riyadh, Saudi Arabia
    startLng: 46.7160104,
    endLat: 31.7788242,  // Jerusalem, Israel
    endLng: 35.2257626
  },
  {
    startLat: 31.7788242, // Jerusalem, Israel
    startLng: 35.2257626,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 41.9034912,  // Vatican City, Vatican City
    endLng: 12.4528349
  },
  {
    startLat: 41.9034912, // Vatican City, Vatican City
    startLng: 12.4528349,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 37.8512218,  // Taormina, Italy
    endLng: 15.2830191
  },
  {
    startLat: 37.8512218, // Taormina, Italy
    startLng: 15.2830191,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 52.2319581,  // Warsaw, Poland
    endLng: 21.0067249
  },
  {
    startLat: 52.2319581, // Warsaw, Poland
    startLng: 21.0067249,
    endLat: 53.550341,  // Hamburg, Germany
    endLng: 10.000654
  },
  {
    startLat: 53.550341, // Hamburg, Germany
    startLng: 10.000654,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 35.9251145,  // Kawagoe, Japan
    endLng: 139.4856927
  },
  {
    startLat: 35.9251145, // Kawagoe, Japan
    startLng: 139.4856927,
    endLat: 35.6768601,  // Tokyo, Japan
    endLng: 139.7638947
  },
  {
    startLat: 35.6768601, // Tokyo, Japan
    startLng: 139.7638947,
    endLat: 37.1499376,  // Osan, South Korea
    endLng: 127.0774625
  },
  {
    startLat: 37.1499376, // Osan, South Korea
    startLng: 127.0774625,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
    endLat: 40.190632,  // Beijing, China
    endLng: 116.412144
  },
  {
    startLat: 40.190632, // Beijing, China
    startLng: 116.412144,
    endLat: 16.068,  // Da Nang, Vietnam
    endLng: 108.212
  },
  {
    startLat: 16.068, // Da Nang, Vietnam
    startLng: 108.212,
    endLat: 21.0283334,  // Hanoi, Vietnam
    endLng: 105.854041
  },
  {
    startLat: 21.0283334, // Hanoi, Vietnam
    startLng: 105.854041,
    endLat: 14.5904492,  // Manila, Philippines
    endLng: 120.9803621
  },
  {
    startLat: 14.5904492, // Manila, Philippines
    startLng: 120.9803621,
    endLat: 14.5436995,  // Pasay, Philippines
    endLng: 120.9946503
  },
  {
    startLat: 14.5436995, // Pasay, Philippines
    startLng: 120.9946503,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2017 = [
  { lat: 53.550341, lng: 10.000654, name: "Hamburg" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 31.7788242, lng: 35.2257626, name: "Jerusalem" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
  { lat: 24.638916, lng: 46.7160104, name: "Riyadh" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 16.068, lng: 108.212, name: "Da Nang" },
  { lat: 35.6768601, lng: 139.7638947, name: "Tokyo" },
  { lat: 40.190632, lng: 116.412144, name: "Beijing" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 52.2319581, lng: 21.0067249, name: "Warsaw" },
  { lat: 14.5436995, lng: 120.9946503, name: "Pasay" },
  { lat: 35.9251145, lng: 139.4856927, name: "Kawagoe" },
  { lat: 21.0283334, lng: 105.854041, name: "Hanoi" },
  { lat: 37.1499376, lng: 127.0774625, name: "Osan" },
  { lat: 14.5904492, lng: 120.9803621, name: "Manila" },
  { lat: 37.8512218, lng: 15.2830191, name: "Taormina" },
  { lat: 41.9034912, lng: 12.4528349, name: "Vatican City" },
  { lat: 37.5666791, lng: 126.9782914, name: "Seoul" },
];

const arcs2018 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 46.796198,  // Davos, Switzerland
    endLng: 9.8236892
  },
  {
    startLat: 46.796198, // Davos, Switzerland
    startLng: 9.8236892,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 47.657525,  // La Malbaie, Canada
    endLng: -70.153885
  },
  {
    startLat: 47.657525, // La Malbaie, Canada
    startLng: -70.153885,
    endLat: 52.4760892,  // Quebec, Canada
    endLng: -71.8258668
  },
  {
    startLat: 52.4760892, // Quebec, Canada
    startLng: -71.8258668,
    endLat: 35.49625,  // Crete Naval Base, Greece
    endLng: 24.147639
  },
  {
    startLat: 35.49625, // Crete Naval Base, Greece
    startLng: 24.147639,
    endLat: 1.28967,  // Central Area, Singapore
    endLng: 103.85007
  },
  {
    startLat: 1.28967, // Central Area, Singapore
    startLng: 103.85007,
    endLat: 1.25,  // Sentosa Island, Singapore
    endLng: 103.82667
  },
  {
    startLat: 1.25, // Sentosa Island, Singapore
    startLng: 103.82667,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
    endLat: 51.8419448,  // Blenheim Palace, United Kingdom
    endLng: -1.3626293
  },
  {
    startLat: 51.8419448, // Blenheim Palace, United Kingdom
    startLng: -1.3626293,
    endLat: 51.8533018,  // Chequers, United Kingdom
    endLng: -2.2275661
  },
  {
    startLat: 51.8533018, // Chequers, United Kingdom
    startLng: -2.2275661,
    endLat: 51.4837886,  // Windsor Castle, United Kingdom
    endLng: -0.6040419
  },
  {
    startLat: 51.4837886, // Windsor Castle, United Kingdom
    startLng: -0.6040419,
    endLat: 55.3167617,  // Turnberry (golf course), United Kingdom
    endLng: -4.8313213
  },
  {
    startLat: 55.3167617, // Turnberry (golf course), United Kingdom
    startLng: -4.8313213,
    endLat: 55.299818,  // South Ayrshire, United Kingdom
    endLng: -4.6459884
  },
  {
    startLat: 55.299818, // South Ayrshire, United Kingdom
    startLng: -4.6459884,
    endLat: 60.1674881,  // Helsinki, Finland
    endLng: 24.9427473
  },
  {
    startLat: 60.1674881, // Helsinki, Finland
    startLng: 24.9427473,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -34.6083696,  // Buenos Aires, Argentina
    endLng: -58.4440583
  },
  {
    startLat: -34.6083696, // Buenos Aires, Argentina
    startLng: -58.4440583,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 33.8,  // Al Asad Air Base, Iraq
    endLng: 42.433333
  },
  {
    startLat: 33.8, // Al Asad Air Base, Iraq
    startLng: 42.433333,
    endLat: 49.441426,  // Ramstein Air Base, Germany
    endLng: 7.6012401
  },
  {
    startLat: 49.441426, // Ramstein Air Base, Germany
    startLng: 7.6012401,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2018 = [
  { lat: 51.8533018, lng: -2.2275661, name: "Chequers" },
  { lat: 33.8, lng: 42.433333, name: "Al Asad Air Base" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
  { lat: 55.3167617, lng: -4.8313213, name: "Turnberry" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: -34.6083696, lng: -58.4440583, name: "Buenos Aires" },
  { lat: 52.4760892, lng: -71.8258668, name: "Quebec" },
  { lat: 1.25, lng: 103.82667, name: "Sentosa Island" },
  { lat: 49.441426, lng: 7.6012401, name: "Ramstein Air Base" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 1.28967, lng: 103.85007, name: "Central Area" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 47.657525, lng: -70.153885, name: "La Malbaie" },
  { lat: 55.299818, lng: -4.6459884, name: "South Ayrshire" },
  { lat: 46.796198, lng: 9.8236892, name: "Davos" },
  { lat: 60.1674881, lng: 24.9427473, name: "Helsinki" },
  { lat: 35.49625, lng: 24.147639, name: "Crete Naval Base" },
  { lat: 51.8419448, lng: -1.3626293, name: "Blenheim Palace" },
  { lat: 51.4837886, lng: -0.6040419, name: "Windsor Castle" },
];

const arcs2019 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 21.0283334,  // Hanoi, Vietnam
    endLng: 105.854041
  },
  {
    startLat: 21.0283334, // Hanoi, Vietnam
    startLng: 105.854041,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 35.6768601,  // Tokyo, Japan
    endLng: 139.7638947
  },
  {
    startLat: 35.6768601, // Tokyo, Japan
    startLng: 139.7638947,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
    endLat: 50.800031,  // Portsmouth, United Kingdom
    endLng: -1.0906023
  },
  {
    startLat: 50.800031, // Portsmouth, United Kingdom
    startLng: -1.0906023,
    endLat: 53.1349614,  // Shannon, Ireland
    endLng: -8.1611027
  },
  {
    startLat: 53.1349614, // Shannon, Ireland
    startLng: -8.1611027,
    endLat: 52.8572575,  // County Clare, Ireland
    endLng: -8.9374359
  },
  {
    startLat: 52.8572575, // County Clare, Ireland
    startLng: -8.9374359,
    endLat: 49.7492373,  // Colleville, France
    endLng: 0.452349
  },
  {
    startLat: 49.7492373, // Colleville, France
    startLng: 0.452349,
    endLat: 49.1813403,  // Caen, France
    endLng: -0.3635615
  },
  {
    startLat: 49.1813403, // Caen, France
    startLng: -0.3635615,
    endLat: 53.1349614,  // Shannon, Ireland
    endLng: -8.1611027
  },
  {
    startLat: 53.1349614, // Shannon, Ireland
    startLng: -8.1611027,
    endLat: 52.8572575,  // County Clare, Ireland
    endLng: -8.9374359
  },
  {
    startLat: 52.8572575, // County Clare, Ireland
    startLng: -8.9374359,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 34.6937569,  // Osaka, Japan
    endLng: 135.5014539
  },
  {
    startLat: 34.6937569, // Osaka, Japan
    startLng: 135.5014539,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
    endLat: 38.2336866,  // Korean Demilitarized Zone, South Korea
    endLng: 127.0087307
  },
  {
    startLat: 38.2336866, // Korean Demilitarized Zone, South Korea
    startLng: 127.0087307,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
    endLat: 38.2336866,  // Korean Demilitarized Zone, South Korea
    endLng: 127.0087307
  },
  {
    startLat: 38.2336866, // Korean Demilitarized Zone, South Korea
    startLng: 127.0087307,
    endLat: 37.9556392,  // Joint Security Area, North Korea
    endLng: 126.6763028
  },
  {
    startLat: 37.9556392, // Joint Security Area, North Korea
    startLng: 126.6763028,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 43.4832523,  // Biarritz, France
    endLng: -1.5592776
  },
  {
    startLat: 43.4832523, // Biarritz, France
    startLng: -1.5592776,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 34.9390767,  // Bagram Airfield, Afghanistan
    endLng: 69.2764727
  },
  {
    startLat: 34.9390767, // Bagram Airfield, Afghanistan
    startLng: 69.2764727,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
    endLat: 51.6553875,  // Watford, United Kingdom
    endLng: -0.3957425
  },
  {
    startLat: 51.6553875, // Watford, United Kingdom
    startLng: -0.3957425,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2019 = [
  { lat: 49.7492373, lng: 0.452349, name: "Colleville" },
  { lat: 43.4832523, lng: -1.5592776, name: "Biarritz" },
  { lat: 34.6937569, lng: 135.5014539, name: "Osaka" },
  { lat: 37.9556392, lng: 126.6763028, name: "Joint Security Area, DPRK" },
  { lat: 50.800031, lng: -1.0906023, name: "Portsmouth" },
  { lat: 35.6768601, lng: 139.7638947, name: "Tokyo" },
  { lat: 34.9390767, lng: 69.2764727, name: "Bagram Airfield" },
  { lat: 38.2336866, lng: 127.0087307, name: "Korean Demilitarized Zone" },
  { lat: 51.6553875, lng: -0.3957425, name: "Watford" },
  { lat: 21.0283334, lng: 105.854041, name: "Hanoi" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 52.8572575, lng: -8.9374359, name: "County Clare" },
  { lat: 37.5666791, lng: 126.9782914, name: "Seoul" },
  { lat: 53.1349614, lng: -8.1611027, name: "Shannon" },
  { lat: 49.1813403, lng: -0.3635615, name: "Caen" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
];

const arcs2020 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 46.796198,  // Davos, Switzerland
    endLng: 9.8236892
  },
  {
    startLat: 46.796198, // Davos, Switzerland
    startLng: 9.8236892,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 23.0215374,  // Ahmedabad, India
    endLng: 72.5800568
  },
  {
    startLat: 23.0215374, // Ahmedabad, India
    startLng: 72.5800568,
    endLat: 27.1752554,  // Agra, India
    endLng: 78.0098161
  },
  {
    startLat: 27.1752554, // Agra, India
    startLng: 78.0098161,
    endLat: 28.6430858,  // New Delhi, India
    endLng: 77.2192671
  },
  {
    startLat: 28.6430858, // New Delhi, India
    startLng: 77.2192671,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2020 = [
  { lat: 46.796198, lng: 9.8236892, name: "Davos" },
  { lat: 23.0215374, lng: 72.5800568, name: "Ahmedabad" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 27.1752554, lng: 78.0098161, name: "Agra" },
  { lat: 28.6430858, lng: 77.2192671, name: "New Delhi" },
];

export const labelsDefaultCities = [...cities2017, ...cities2018, ...cities2019, ...cities2020];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "2017 Trips": {
    arcs: arcs2017,
    labels: cities2017
  },
  "2018 Trips": {
    arcs: arcs2018,
    labels: cities2018
  },
  "2019 Trips": {
    arcs: arcs2019,
    labels: cities2019
  },
  "2020 Trips": {
    arcs: arcs2020,
    labels: cities2020
  },
};
