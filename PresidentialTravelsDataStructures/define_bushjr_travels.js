const arcs2001 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 16.735377,  // San Cristóbal, Mexico
    endLng: -92.63873
  },
  {
    startLat: 16.735377, // San Cristóbal, Mexico
    startLng: -92.63873,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 46.8137431,  // Quebec City, Canada
    endLng: -71.2084061
  },
  {
    startLat: 46.8137431, // Quebec City, Canada
    startLng: -71.2084061,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 40.4167047,  // Madrid, Spain
    endLng: -3.7035825
  },
  {
    startLat: 40.4167047, // Madrid, Spain
    startLng: -3.7035825,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 57.7072326,  // Gothenburg, Sweden
    endLng: 11.9670171
  },
  {
    startLat: 57.7072326, // Gothenburg, Sweden
    startLng: 11.9670171,
    endLat: 52.2319581,  // Warsaw, Poland
    endLng: 21.0067249
  },
  {
    startLat: 52.2319581, // Warsaw, Poland
    startLng: 21.0067249,
    endLat: 46.2432913,  // Kranj, Slovenia
    endLng: 14.3549353
  },
  {
    startLat: 46.2432913, // Kranj, Slovenia
    startLng: 14.3549353,
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
    endLat: 51.8533018,  // Chequers, United Kingdom
    endLng: -2.2275661
  },
  {
    startLat: 51.8533018, // Chequers, United Kingdom
    startLng: -2.2275661,
    endLat: 53.3538525,  // Halton, United Kingdom
    endLng: -2.7427829
  },
  {
    startLat: 53.3538525, // Halton, United Kingdom
    startLng: -2.7427829,
    endLat: 51.7664356,  // Brize Norton, United Kingdom
    endLng: -1.5664074
  },
  {
    startLat: 51.7664356, // Brize Norton, United Kingdom
    startLng: -1.5664074,
    endLat: 44.40726,  // Genoa, Italy
    endLng: 8.9338624
  },
  {
    startLat: 44.40726, // Genoa, Italy
    startLng: 8.9338624,
    endLat: 41.7425222,  // Castel Gandolfo, Italy
    endLng: 12.6488774
  },
  {
    startLat: 41.7425222, // Castel Gandolfo, Italy
    startLng: 12.6488774,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 42.3644092,  // Camp Bondsteel, Kosovo
    endLng: 21.2457842
  },
  {
    startLat: 42.3644092, // Camp Bondsteel, Kosovo
    startLng: 21.2457842,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 31.2312707,  // Shanghai, China
    endLng: 121.4700152
  },
  {
    startLat: 31.2312707, // Shanghai, China
    startLng: 121.4700152,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2001 = [
  { lat: 41.7425222, lng: 12.6488774, name: "Castel Gandolfo" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 57.7072326, lng: 11.9670171, name: "Gothenburg" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 42.3644092, lng: 21.2457842, name: "Camp Bondsteel" },
  { lat: 31.2312707, lng: 121.4700152, name: "Shanghai" },
  { lat: 46.8137431, lng: -71.2084061, name: "Quebec City" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 44.40726, lng: 8.9338624, name: "Genoa" },
  { lat: 53.3538525, lng: -2.7427829, name: "Halton" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
  { lat: 16.735377, lng: -92.63873, name: "San Cristóbal" },
  { lat: 51.7664356, lng: -1.5664074, name: "Brize Norton" },
  { lat: 40.4167047, lng: -3.7035825, name: "Madrid" },
  { lat: 52.2319581, lng: 21.0067249, name: "Warsaw" },
  { lat: 51.8533018, lng: -2.2275661, name: "Chequers" },
  { lat: 46.2432913, lng: 14.3549353, name: "Kranj" },
];

const arcs2002 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 35.6768601,  // Tokyo, Japan
    endLng: 139.7638947
  },
  {
    startLat: 35.6768601, // Tokyo, Japan
    startLng: 139.7638947,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
    endLat: 37.8983887,  // Dorasan, South Korea
    endLng: 126.7091637
  },
  {
    startLat: 37.8983887, // Dorasan, South Korea
    startLng: 126.7091637,
    endLat: 37.1499376,  // Osan, South Korea
    endLng: 127.0774625
  },
  {
    startLat: 37.1499376, // Osan, South Korea
    startLng: 127.0774625,
    endLat: 40.190632,  // Beijing, China
    endLng: 116.412144
  },
  {
    startLat: 40.190632, // Beijing, China
    startLng: 116.412144,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 25.6802019,  // Monterrey, Mexico
    endLng: -100.315258
  },
  {
    startLat: 25.6802019, // Monterrey, Mexico
    startLng: -100.315258,
    endLat: -12.0621065,  // Lima, Peru
    endLng: -77.0365256
  },
  {
    startLat: -12.0621065, // Lima, Peru
    startLng: -77.0365256,
    endLat: 13.6989939,  // San Salvador, El Salvador
    endLng: -89.1914249
  },
  {
    startLat: 13.6989939, // San Salvador, El Salvador
    startLng: -89.1914249,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 52.510885,  // Berlin, Germany
    endLng: 13.3989367
  },
  {
    startLat: 52.510885, // Berlin, Germany
    startLng: 13.3989367,
    endLat: 55.625578,  // Moscow, Russia
    endLng: 37.6063916
  },
  {
    startLat: 55.625578, // Moscow, Russia
    startLng: 37.6063916,
    endLat: 59.938732,  // St. Petersburg, Russia
    endLng: 30.316229
  },
  {
    startLat: 59.938732, // St. Petersburg, Russia
    startLng: 30.316229,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 49.4117704,  // Sainte-Mère-Église, France
    endLng: -1.3268248
  },
  {
    startLat: 49.4117704, // Sainte-Mère-Église, France
    startLng: -1.3268248,
    endLat: 49.7492373,  // Colleville, France
    endLng: 0.452349
  },
  {
    startLat: 49.7492373, // Colleville, France
    startLng: 0.452349,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 41.9032459,  // Apostolic Palace, Vatican City
    endLng: 12.4551867
  },
  {
    startLat: 41.9032459, // Apostolic Palace, Vatican City
    startLng: 12.4551867,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.7010061,  // Kananaskis, Canada
    endLng: -114.8537453
  },
  {
    startLat: 50.7010061, // Kananaskis, Canada
    startLng: -114.8537453,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 21.166121,  // Los Cabos, Mexico
    endLng: -100.936442
  },
  {
    startLat: 21.166121, // Los Cabos, Mexico
    startLng: -100.936442,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.0596288,  // Prague, Czech Republic
    endLng: 14.4464593
  },
  {
    startLat: 50.0596288, // Prague, Czech Republic
    startLng: 14.4464593,
    endLat: 59.938732,  // St. Petersburg, Russia
    endLng: 30.316229
  },
  {
    startLat: 59.938732, // St. Petersburg, Russia
    startLng: 30.316229,
    endLat: 54.6870458,  // Vilnius, Lithuania
    endLng: 25.2829111
  },
  {
    startLat: 54.6870458, // Vilnius, Lithuania
    startLng: 25.2829111,
    endLat: 44.4361414,  // Bucharest, Romania
    endLng: 26.1027202
  },
  {
    startLat: 44.4361414, // Bucharest, Romania
    startLng: 26.1027202,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2002 = [
  { lat: 49.4117704, lng: -1.3268248, name: "Sainte-Mère-Église" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 59.938732, lng: 30.316229, name: "St. Petersburg" },
  { lat: 55.625578, lng: 37.6063916, name: "Moscow" },
  { lat: 37.1499376, lng: 127.0774625, name: "Osan" },
  { lat: 37.8983887, lng: 126.7091637, name: "Dorasan" },
  { lat: 49.7492373, lng: 0.452349, name: "Colleville" },
  { lat: 52.510885, lng: 13.3989367, name: "Berlin" },
  { lat: 25.6802019, lng: -100.315258, name: "Monterrey" },
  { lat: 41.9032459, lng: 12.4551867, name: "Apostolic Palace" },
  { lat: 54.6870458, lng: 25.2829111, name: "Vilnius" },
  { lat: 35.6768601, lng: 139.7638947, name: "Tokyo" },
  { lat: 40.190632, lng: 116.412144, name: "Beijing" },
  { lat: -12.0621065, lng: -77.0365256, name: "Lima" },
  { lat: 21.166121, lng: -100.936442, name: "Los Cabos" },
  { lat: 50.0596288, lng: 14.4464593, name: "Prague" },
  { lat: 13.6989939, lng: -89.1914249, name: "San Salvador" },
  { lat: 37.5666791, lng: 126.9782914, name: "Seoul" },
  { lat: 50.7010061, lng: -114.8537453, name: "Kananaskis" },
  { lat: 44.4361414, lng: 26.1027202, name: "Bucharest" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

const arcs2003 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 38.71667,  // Terceira Island, Portugal
    endLng: -27.21667
  },
  {
    startLat: 38.71667, // Terceira Island, Portugal
    startLng: -27.21667,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 54.596391,  // Belfast, United Kingdom
    endLng: -5.9301829
  },
  {
    startLat: 54.596391, // Belfast, United Kingdom
    startLng: -5.9301829,
    endLat: 53.4113789,  // Hillsborough, United Kingdom
    endLng: -1.5006311
  },
  {
    startLat: 53.4113789, // Hillsborough, United Kingdom
    startLng: -1.5006311,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.0619474,  // Kraków, Poland
    endLng: 19.9368564
  },
  {
    startLat: 50.0619474, // Kraków, Poland
    startLng: 19.9368564,
    endLat: 50.0382443,  // Oświęcim, Poland
    endLng: 19.2214053
  },
  {
    startLat: 50.0382443, // Oświęcim, Poland
    startLng: 19.2214053,
    endLat: 59.938732,  // St. Petersburg, Russia
    endLng: 30.316229
  },
  {
    startLat: 59.938732, // St. Petersburg, Russia
    startLng: 30.316229,
    endLat: 46.400979,  // Evian-les-Bains, France
    endLng: 6.5897931
  },
  {
    startLat: 46.400979, // Evian-les-Bains, France
    startLng: 6.5897931,
    endLat: 27.8644422,  // Sharm el-Sheikh, Egypt
    endLng: 34.295447
  },
  {
    startLat: 27.8644422, // Sharm el-Sheikh, Egypt
    startLng: 34.295447,
    endLat: 29.5266483,  // Aqaba, Jordan
    endLng: 35.0075433
  },
  {
    startLat: 29.5266483, // Aqaba, Jordan
    startLng: 35.0075433,
    endLat: 25.2856329,  // Doha, Qatar
    endLng: 51.5264162
  },
  {
    startLat: 25.2856329, // Doha, Qatar
    startLng: 51.5264162,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 14.693425,  // Dakar, Senegal
    endLng: -17.447938
  },
  {
    startLat: 14.693425, // Dakar, Senegal
    startLng: -17.447938,
    endLat: 14.6672047,  // Gorée Island, Senegal
    endLng: -17.3983563
  },
  {
    startLat: 14.6672047, // Gorée Island, Senegal
    startLng: -17.3983563,
    endLat: -25.7459277,  // Pretoria, South Africa
    endLng: 28.1879101
  },
  {
    startLat: -25.7459277, // Pretoria, South Africa
    startLng: 28.1879101,
    endLat: -24.6581357,  // Gaborone, Botswana
    endLng: 25.9088474
  },
  {
    startLat: -24.6581357, // Gaborone, Botswana
    startLng: 25.9088474,
    endLat: 0.3177137,  // Kampala, Uganda
    endLng: 32.5813539
  },
  {
    startLat: 0.3177137, // Kampala, Uganda
    startLng: 32.5813539,
    endLat: 9.0643305,  // Abuja, Nigeria
    endLng: 7.4892974
  },
  {
    startLat: 9.0643305, // Abuja, Nigeria
    startLng: 7.4892974,
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
    endLat: 14.5904492,  // Manila, Philippines
    endLng: 120.9803621
  },
  {
    startLat: 14.5904492, // Manila, Philippines
    startLng: 120.9803621,
    endLat: 13.7524938,  // Bangkok, Thailand
    endLng: 100.4935089
  },
  {
    startLat: 13.7524938, // Bangkok, Thailand
    startLng: 100.4935089,
    endLat: 1.2899175,  // Singapore, Singapore
    endLng: 103.8519072
  },
  {
    startLat: 1.2899175, // Singapore, Singapore
    startLng: 103.8519072,
    endLat: -8.6524973,  // Denpasar, Indonesia
    endLng: 115.2191175
  },
  {
    startLat: -8.6524973, // Denpasar, Indonesia
    startLng: 115.2191175,
    endLat: -35.2975906,  // Canberra, Australia
    endLng: 149.1012676
  },
  {
    startLat: -35.2975906, // Canberra, Australia
    startLng: 149.1012676,
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
    endLat: 54.6531916,  // Sedgefield, United Kingdom
    endLng: -1.4496577
  },
  {
    startLat: 54.6531916, // Sedgefield, United Kingdom
    startLng: -1.4496577,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 33.3061701,  // Baghdad, Iraq
    endLng: 44.3872213
  },
  {
    startLat: 33.3061701, // Baghdad, Iraq
    startLng: 44.3872213,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2003 = [
  { lat: 59.938732, lng: 30.316229, name: "St. Petersburg" },
  { lat: -24.6581357, lng: 25.9088474, name: "Gaborone" },
  { lat: 33.3061701, lng: 44.3872213, name: "Baghdad" },
  { lat: -35.2975906, lng: 149.1012676, name: "Canberra" },
  { lat: 25.2856329, lng: 51.5264162, name: "Doha" },
  { lat: 1.2899175, lng: 103.8519072, name: "Singapore" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: -25.7459277, lng: 28.1879101, name: "Pretoria" },
  { lat: 54.596391, lng: -5.9301829, name: "Belfast" },
  { lat: 35.6768601, lng: 139.7638947, name: "Tokyo" },
  { lat: 14.5904492, lng: 120.9803621, name: "Manila" },
  { lat: 14.6672047, lng: -17.3983563, name: "Gorée Island" },
  { lat: 13.7524938, lng: 100.4935089, name: "Bangkok" },
  { lat: 14.693425, lng: -17.447938, name: "Dakar" },
  { lat: 46.400979, lng: 6.5897931, name: "Evian-les-Bains" },
  { lat: 53.4113789, lng: -1.5006311, name: "Hillsborough" },
  { lat: 50.0619474, lng: 19.9368564, name: "Kraków" },
  { lat: 38.71667, lng: -27.21667, name: "Terceira Island" },
  { lat: 9.0643305, lng: 7.4892974, name: "Abuja" },
  { lat: 29.5266483, lng: 35.0075433, name: "Aqaba" },
  { lat: 0.3177137, lng: 32.5813539, name: "Kampala" },
  { lat: 50.0382443, lng: 19.2214053, name: "Oświęcim" },
  { lat: 27.8644422, lng: 34.295447, name: "Sharm el-Sheikh" },
  { lat: -8.6524973, lng: 115.2191175, name: "Denpasar" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 54.6531916, lng: -1.4496577, name: "Sedgefield" },
];

const arcs2004 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 25.6802019,  // Monterrey, Mexico
    endLng: -100.315258
  },
  {
    startLat: 25.6802019, // Monterrey, Mexico
    startLng: -100.315258,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 41.9032459,  // Apostolic Palace, Vatican City
    endLng: 12.4551867
  },
  {
    startLat: 41.9032459, // Apostolic Palace, Vatican City
    startLng: 12.4551867,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
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
    endLat: 49.3369603,  // Arromanches, France
    endLng: -0.6221294
  },
  {
    startLat: 49.3369603, // Arromanches, France
    startLng: -0.6221294,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 53.1349614,  // Shannon, Ireland
    endLng: -8.1611027
  },
  {
    startLat: 53.1349614, // Shannon, Ireland
    startLng: -8.1611027,
    endLat: 52.7835769,  // Dromoland Castle, Ireland
    endLng: -8.9056991
  },
  {
    startLat: 52.7835769, // Dromoland Castle, Ireland
    startLng: -8.9056991,
    endLat: 39.9207759,  // Ankara, Turkey
    endLng: 32.8540497
  },
  {
    startLat: 39.9207759, // Ankara, Turkey
    startLng: 32.8540497,
    endLat: 41.006381,  // Istanbul, Turkey
    endLng: 28.9758715
  },
  {
    startLat: 41.006381, // Istanbul, Turkey
    startLng: 28.9758715,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -33.4377756,  // Santiago, Chile
    endLng: -70.6504502
  },
  {
    startLat: -33.4377756, // Santiago, Chile
    startLng: -70.6504502,
    endLat: 10.4265566,  // Cartagena, Colombia
    endLng: -75.5441671
  },
  {
    startLat: 10.4265566, // Cartagena, Colombia
    startLng: -75.5441671,
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
    endLat: 45.4277659,  // Gatineau, Canada
    endLng: -75.710976
  },
  {
    startLat: 45.4277659, // Gatineau, Canada
    startLng: -75.710976,
    endLat: 44.648618,  // Halifax, Canada
    endLng: -63.5859487
  },
  {
    startLat: 44.648618, // Halifax, Canada
    startLng: -63.5859487,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2004 = [
  { lat: 41.006381, lng: 28.9758715, name: "Istanbul" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 52.7835769, lng: -8.9056991, name: "Dromoland Castle" },
  { lat: 49.3369603, lng: -0.6221294, name: "Arromanches" },
  { lat: 10.4265566, lng: -75.5441671, name: "Cartagena" },
  { lat: 53.1349614, lng: -8.1611027, name: "Shannon" },
  { lat: 49.1813403, lng: -0.3635615, name: "Caen" },
  { lat: 44.648618, lng: -63.5859487, name: "Halifax" },
  { lat: 45.4277659, lng: -75.710976, name: "Gatineau" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: -33.4377756, lng: -70.6504502, name: "Santiago" },
  { lat: 41.9032459, lng: 12.4551867, name: "Apostolic Palace" },
  { lat: 25.6802019, lng: -100.315258, name: "Monterrey" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 45.4208777, lng: -75.6901106, name: "Ottawa" },
  { lat: 39.9207759, lng: 32.8540497, name: "Ankara" },
  { lat: 49.7492373, lng: 0.452349, name: "Colleville" },
];

const arcs2005 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 49.9995205,  // Mainz, Germany
    endLng: 8.2736253
  },
  {
    startLat: 49.9995205, // Mainz, Germany
    startLng: 8.2736253,
    endLat: 50.0820384,  // Wiesbaden, Germany
    endLng: 8.2416556
  },
  {
    startLat: 50.0820384, // Wiesbaden, Germany
    startLng: 8.2416556,
    endLat: 48.1516988,  // Bratislava, Slovakia
    endLng: 17.1093063
  },
  {
    startLat: 48.1516988, // Bratislava, Slovakia
    startLng: 17.1093063,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 41.9021569,  // St. Peter's Basilica, Vatican City
    endLng: 12.4537105
  },
  {
    startLat: 41.9021569, // St. Peter's Basilica, Vatican City
    startLng: 12.4537105,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 56.9493977,  // Riga, Latvia
    endLng: 24.1051846
  },
  {
    startLat: 56.9493977, // Riga, Latvia
    startLng: 24.1051846,
    endLat: 50.8512438,  // Maastricht, Netherlands
    endLng: 5.6909768
  },
  {
    startLat: 50.8512438, // Maastricht, Netherlands
    startLng: 5.6909768,
    endLat: 50.8647531,  // Valkenburg, Netherlands
    endLng: 5.8312518
  },
  {
    startLat: 50.8647531, // Valkenburg, Netherlands
    startLng: 5.8312518,
    endLat: 50.8201564,  // Margraten, Netherlands
    endLng: 5.8216625
  },
  {
    startLat: 50.8201564, // Margraten, Netherlands
    startLng: 5.8216625,
    endLat: 55.625578,  // Moscow, Russia
    endLng: 37.6063916
  },
  {
    startLat: 55.625578, // Moscow, Russia
    startLng: 37.6063916,
    endLat: 41.6934591,  // Tbilisi, Georgia
    endLng: 44.8014495
  },
  {
    startLat: 41.6934591, // Tbilisi, Georgia
    startLng: 44.8014495,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 55.6357222,  // Kastrup, Denmark
    endLng: 12.6469508
  },
  {
    startLat: 55.6357222, // Kastrup, Denmark
    startLng: 12.6469508,
    endLat: 55.9821565,  // Fredensborg, Denmark
    endLng: 12.3950911
  },
  {
    startLat: 55.9821565, // Fredensborg, Denmark
    startLng: 12.3950911,
    endLat: 55.6867243,  // Copenhagen, Denmark
    endLng: 12.5700724
  },
  {
    startLat: 55.6867243, // Copenhagen, Denmark
    startLng: 12.5700724,
    endLat: 56.2749283,  // Gleneagles, United Kingdom
    endLng: -3.7309953
  },
  {
    startLat: 56.2749283, // Gleneagles, United Kingdom
    startLng: -3.7309953,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -37.9976168,  // Mar del Plata, Argentina
    endLng: -57.5482079
  },
  {
    startLat: -37.9976168, // Mar del Plata, Argentina
    startLng: -57.5482079,
    endLat: -10.3333333,  // Brasília, Brazil
    endLng: -53.2
  },
  {
    startLat: -10.3333333, // Brasília, Brazil
    startLng: -53.2,
    endLat: 8.9714493,  // Panama City, Panama
    endLng: -79.5341802
  },
  {
    startLat: 8.9714493, // Panama City, Panama
    startLng: -79.5341802,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 35.0115754,  // Kyoto, Japan
    endLng: 135.7681441
  },
  {
    startLat: 35.0115754, // Kyoto, Japan
    startLng: 135.7681441,
    endLat: 35.1799528,  // Pusan, South Korea
    endLng: 129.0752365
  },
  {
    startLat: 35.1799528, // Pusan, South Korea
    startLng: 129.0752365,
    endLat: 35.8556705,  // Gyeongju, South Korea
    endLng: 129.2248811
  },
  {
    startLat: 35.8556705, // Gyeongju, South Korea
    startLng: 129.2248811,
    endLat: 37.1499376,  // Osan, South Korea
    endLng: 127.0774625
  },
  {
    startLat: 37.1499376, // Osan, South Korea
    startLng: 127.0774625,
    endLat: 40.190632,  // Beijing, China
    endLng: 116.412144
  },
  {
    startLat: 40.190632, // Beijing, China
    startLng: 116.412144,
    endLat: 47.9184676,  // Ulaanbaatar, Mongolia
    endLng: 106.9177016
  },
  {
    startLat: 47.9184676, // Ulaanbaatar, Mongolia
    startLng: 106.9177016,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2005 = [
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 48.1516988, lng: 17.1093063, name: "Bratislava" },
  { lat: 55.625578, lng: 37.6063916, name: "Moscow" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
  { lat: 55.6867243, lng: 12.5700724, name: "Copenhagen" },
  { lat: 37.1499376, lng: 127.0774625, name: "Osan" },
  { lat: 35.0115754, lng: 135.7681441, name: "Kyoto" },
  { lat: 56.2749283, lng: -3.7309953, name: "Gleneagles" },
  { lat: 55.9821565, lng: 12.3950911, name: "Fredensborg" },
  { lat: 35.1799528, lng: 129.0752365, name: "Pusan" },
  { lat: 50.0820384, lng: 8.2416556, name: "Wiesbaden" },
  { lat: 55.6357222, lng: 12.6469508, name: "Kastrup" },
  { lat: 49.9995205, lng: 8.2736253, name: "Mainz" },
  { lat: 50.8512438, lng: 5.6909768, name: "Maastricht" },
  { lat: 40.190632, lng: 116.412144, name: "Beijing" },
  { lat: 56.9493977, lng: 24.1051846, name: "Riga" },
  { lat: 8.9714493, lng: -79.5341802, name: "Panama City" },
  { lat: -10.3333333, lng: -53.2, name: "Brasília" },
  { lat: -37.9976168, lng: -57.5482079, name: "Mar del Plata" },
  { lat: 47.9184676, lng: 106.9177016, name: "Ulaanbaatar" },
  { lat: 41.9021569, lng: 12.4537105, name: "St. Peter's Basilica" },
  { lat: 50.8201564, lng: 5.8216625, name: "Margraten" },
  { lat: 50.8647531, lng: 5.8312518, name: "Valkenburg" },
  { lat: 41.6934591, lng: 44.8014495, name: "Tbilisi" },
  { lat: 35.8556705, lng: 129.2248811, name: "Gyeongju" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

const arcs2006 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 53.1349614,  // Shannon, Ireland
    endLng: -8.1611027
  },
  {
    startLat: 53.1349614, // Shannon, Ireland
    startLng: -8.1611027,
    endLat: 34.9333734,  // Bagram, Afghanistan
    endLng: 69.2341077
  },
  {
    startLat: 34.9333734, // Bagram, Afghanistan
    startLng: 69.2341077,
    endLat: 34.5266431,  // Kabul, Afghanistan
    endLng: 69.1849082
  },
  {
    startLat: 34.5266431, // Kabul, Afghanistan
    startLng: 69.1849082,
    endLat: 28.6430858,  // New Delhi, India
    endLng: 77.2192671
  },
  {
    startLat: 28.6430858, // New Delhi, India
    startLng: 77.2192671,
    endLat: 17.360589,  // Hyderabad, India
    endLng: 78.4740613
  },
  {
    startLat: 17.360589, // Hyderabad, India
    startLng: 78.4740613,
    endLat: 33.6938118,  // Islamabad, Pakistan
    endLng: 73.0651511
  },
  {
    startLat: 33.6938118, // Islamabad, Pakistan
    startLng: 73.0651511,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 21.1527467,  // Cancún, Mexico
    endLng: -86.8425761
  },
  {
    startLat: 21.1527467, // Cancún, Mexico
    startLng: -86.8425761,
    endLat: 20.66667,  // Chichen-Itza, Mexico
    endLng: -88.56667
  },
  {
    startLat: 20.66667, // Chichen-Itza, Mexico
    startLng: -88.56667,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 33.3061701,  // Baghdad, Iraq
    endLng: 44.3872213
  },
  {
    startLat: 33.3061701, // Baghdad, Iraq
    startLng: 44.3872213,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 48.2083537,  // Vienna, Austria
    endLng: 16.3725042
  },
  {
    startLat: 48.2083537, // Vienna, Austria
    startLng: 16.3725042,
    endLat: 47.4978789,  // Budapest, Hungary
    endLng: 19.0402383
  },
  {
    startLat: 47.4978789, // Budapest, Hungary
    startLng: 19.0402383,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 54.3096314,  // Stralsund, Germany
    endLng: 13.0820846
  },
  {
    startLat: 54.3096314, // Stralsund, Germany
    startLng: 13.0820846,
    endLat: 54.2504397,  // Trinwillershagen, Germany
    endLng: 12.6260361
  },
  {
    startLat: 54.2504397, // Trinwillershagen, Germany
    startLng: 12.6260361,
    endLat: 59.938732,  // St. Petersburg, Russia
    endLng: 30.316229
  },
  {
    startLat: 59.938732, // St. Petersburg, Russia
    startLng: 30.316229,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 55.625578,  // Moscow, Russia
    endLng: 37.6063916
  },
  {
    startLat: 55.625578, // Moscow, Russia
    startLng: 37.6063916,
    endLat: 1.2899175,  // Singapore, Singapore
    endLng: 103.8519072
  },
  {
    startLat: 1.2899175, // Singapore, Singapore
    startLng: 103.8519072,
    endLat: 21.0283334,  // Hanoi, Vietnam
    endLng: 105.854041
  },
  {
    startLat: 21.0283334, // Hanoi, Vietnam
    startLng: 105.854041,
    endLat: 10.7763897,  // Ho Chi Minh City, Vietnam
    endLng: 106.7011391
  },
  {
    startLat: 10.7763897, // Ho Chi Minh City, Vietnam
    startLng: 106.7011391,
    endLat: -6.1754049,  // Jakarta, Indonesia
    endLng: 106.827168
  },
  {
    startLat: -6.1754049, // Jakarta, Indonesia
    startLng: 106.827168,
    endLat: -6.5962986,  // Bogor, Indonesia
    endLng: 106.7972421
  },
  {
    startLat: -6.5962986, // Bogor, Indonesia
    startLng: 106.7972421,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 59.4372155,  // Tallinn, Estonia
    endLng: 24.7453688
  },
  {
    startLat: 59.4372155, // Tallinn, Estonia
    startLng: 24.7453688,
    endLat: 56.9493977,  // Riga, Latvia
    endLng: 24.1051846
  },
  {
    startLat: 56.9493977, // Riga, Latvia
    startLng: 24.1051846,
    endLat: 31.9515694,  // Amman, Jordan
    endLng: 35.9239625
  },
  {
    startLat: 31.9515694, // Amman, Jordan
    startLng: 35.9239625,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2006 = [
  { lat: 54.3096314, lng: 13.0820846, name: "Stralsund" },
  { lat: 21.0283334, lng: 105.854041, name: "Hanoi" },
  { lat: 59.938732, lng: 30.316229, name: "St. Petersburg" },
  { lat: 55.625578, lng: 37.6063916, name: "Moscow" },
  { lat: 33.3061701, lng: 44.3872213, name: "Baghdad" },
  { lat: -6.1754049, lng: 106.827168, name: "Jakarta" },
  { lat: 59.4372155, lng: 24.7453688, name: "Tallinn" },
  { lat: 21.1527467, lng: -86.8425761, name: "Cancún" },
  { lat: 1.2899175, lng: 103.8519072, name: "Singapore" },
  { lat: 48.2083537, lng: 16.3725042, name: "Vienna" },
  { lat: 20.66667, lng: -88.56667, name: "Chichen-Itza" },
  { lat: 33.6938118, lng: 73.0651511, name: "Islamabad" },
  { lat: 10.7763897, lng: 106.7011391, name: "Ho Chi Minh City" },
  { lat: 17.360589, lng: 78.4740613, name: "Hyderabad" },
  { lat: -6.5962986, lng: 106.7972421, name: "Bogor" },
  { lat: 56.9493977, lng: 24.1051846, name: "Riga" },
  { lat: 28.6430858, lng: 77.2192671, name: "New Delhi" },
  { lat: 53.1349614, lng: -8.1611027, name: "Shannon" },
  { lat: 34.5266431, lng: 69.1849082, name: "Kabul" },
  { lat: 54.2504397, lng: 12.6260361, name: "Trinwillershagen" },
  { lat: 31.9515694, lng: 35.9239625, name: "Amman" },
  { lat: 47.4978789, lng: 19.0402383, name: "Budapest" },
  { lat: 34.9333734, lng: 69.2341077, name: "Bagram" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

const arcs2007 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -23.5506507,  // São Paulo, Brazil
    endLng: -46.6333824
  },
  {
    startLat: -23.5506507, // São Paulo, Brazil
    startLng: -46.6333824,
    endLat: -34.9058916,  // Montevideo, Uruguay
    endLng: -56.1913095
  },
  {
    startLat: -34.9058916, // Montevideo, Uruguay
    startLng: -56.1913095,
    endLat: 4.711011,  // Bogotá, Colombia
    endLng: -74.0720917
  },
  {
    startLat: 4.711011, // Bogotá, Colombia
    startLng: -74.0720917,
    endLat: 14.6416142,  // Guatemala City, Guatemala
    endLng: -90.5132836
  },
  {
    startLat: 14.6416142, // Guatemala City, Guatemala
    startLng: -90.5132836,
    endLat: 14.6918883,  // Santa Cruz Balanyá, Guatemala
    endLng: -90.9263636
  },
  {
    startLat: 14.6918883, // Santa Cruz Balanyá, Guatemala
    startLng: -90.9263636,
    endLat: 14.7676876,  // Iximche, Guatemala
    endLng: -90.9914686
  },
  {
    startLat: 14.7676876, // Iximche, Guatemala
    startLng: -90.9914686,
    endLat: 20.9670759,  // Mérida, Mexico
    endLng: -89.6237402
  },
  {
    startLat: 20.9670759, // Mérida, Mexico
    startLng: -89.6237402,
    endLat: 20.3602902,  // Uxmal, Mexico
    endLng: -89.7705605
  },
  {
    startLat: 20.3602902, // Uxmal, Mexico
    startLng: -89.7705605,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.0596288,  // Prague, Czech Republic
    endLng: 14.4464593
  },
  {
    startLat: 50.0596288, // Prague, Czech Republic
    startLng: 14.4464593,
    endLat: 54.1423664,  // Heiligendamm, Germany
    endLng: 11.842199
  },
  {
    startLat: 54.1423664, // Heiligendamm, Germany
    startLng: 11.842199,
    endLat: 54.3482907,  // Gdańsk, Poland
    endLng: 18.6540233
  },
  {
    startLat: 54.3482907, // Gdańsk, Poland
    startLng: 18.6540233,
    endLat: 54.6849444,  // Jurata, Poland
    endLng: 18.7134138
  },
  {
    startLat: 54.6849444, // Jurata, Poland
    startLng: 18.7134138,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 41.9032459,  // Apostolic Palace, Vatican City
    endLng: 12.4551867
  },
  {
    startLat: 41.9032459, // Apostolic Palace, Vatican City
    startLng: 12.4551867,
    endLat: 41.3281482,  // Tirana, Albania
    endLng: 19.8184435
  },
  {
    startLat: 41.3281482, // Tirana, Albania
    startLng: 19.8184435,
    endLat: 42.6977028,  // Sofia, Bulgaria
    endLng: 23.3217359
  },
  {
    startLat: 42.6977028, // Sofia, Bulgaria
    startLng: 23.3217359,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 45.6512171,  // Montebello, Canada
    endLng: -74.942673
  },
  {
    startLat: 45.6512171, // Montebello, Canada
    startLng: -74.942673,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 33.7984496,  // Al Asad Airbase, Iraq
    endLng: 42.4372455
  },
  {
    startLat: 33.7984496, // Al Asad Airbase, Iraq
    startLng: 42.4372455,
    endLat: -33.8698439,  // Sydney, Australia
    endLng: 151.2082848
  },
  {
    startLat: -33.8698439, // Sydney, Australia
    startLng: 151.2082848,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2007 = [
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 14.6918883, lng: -90.9263636, name: "Santa Cruz Balanyá" },
  { lat: 4.711011, lng: -74.0720917, name: "Bogotá" },
  { lat: 20.9670759, lng: -89.6237402, name: "Mérida" },
  { lat: 41.3281482, lng: 19.8184435, name: "Tirana" },
  { lat: 42.6977028, lng: 23.3217359, name: "Sofia" },
  { lat: -23.5506507, lng: -46.6333824, name: "São Paulo" },
  { lat: 41.9032459, lng: 12.4551867, name: "Apostolic Palace" },
  { lat: 33.7984496, lng: 42.4372455, name: "Al Asad Airbase" },
  { lat: 54.6849444, lng: 18.7134138, name: "Jurata" },
  { lat: 54.1423664, lng: 11.842199, name: "Heiligendamm" },
  { lat: -33.8698439, lng: 151.2082848, name: "Sydney" },
  { lat: -34.9058916, lng: -56.1913095, name: "Montevideo" },
  { lat: 50.0596288, lng: 14.4464593, name: "Prague" },
  { lat: 45.6512171, lng: -74.942673, name: "Montebello" },
  { lat: 14.7676876, lng: -90.9914686, name: "Iximche" },
  { lat: 20.3602902, lng: -89.7705605, name: "Uxmal" },
  { lat: 54.3482907, lng: 18.6540233, name: "Gdańsk" },
  { lat: 14.6416142, lng: -90.5132836, name: "Guatemala City" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
];

const arcs2008 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 32.0852997,  // Tel Aviv, Israel
    endLng: 34.7818064
  },
  {
    startLat: 32.0852997, // Tel Aviv, Israel
    startLng: 34.7818064,
    endLat: 31.7788242,  // Jerusalem, Israel
    endLng: 35.2257626
  },
  {
    startLat: 31.7788242, // Jerusalem, Israel
    startLng: 35.2257626,
    endLat: 29.3796532,  // Kuwait City, Kuwait
    endLng: 47.9734174
  },
  {
    startLat: 29.3796532, // Kuwait City, Kuwait
    startLng: 47.9734174,
    endLat: 28.898956,  // Camp Arifjan, Kuwait
    endLng: 48.1504607
  },
  {
    startLat: 28.898956, // Camp Arifjan, Kuwait
    startLng: 48.1504607,
    endLat: 26.2235041,  // Manama, Bahrain
    endLng: 50.5822436
  },
  {
    startLat: 26.2235041, // Manama, Bahrain
    startLng: 50.5822436,
    endLat: 24.4538352,  // Abu Dhabi, United Arab Emirates
    endLng: 54.3774014
  },
  {
    startLat: 24.4538352, // Abu Dhabi, United Arab Emirates
    startLng: 54.3774014,
    endLat: 25.0742823,  // Dubai, United Arab Emirates
    endLng: 55.1885387
  },
  {
    startLat: 25.0742823, // Dubai, United Arab Emirates
    startLng: 55.1885387,
    endLat: 24.638916,  // Riyadh, Saudi Arabia
    endLng: 46.7160104
  },
  {
    startLat: 24.638916, // Riyadh, Saudi Arabia
    startLng: 46.7160104,
    endLat: 24.8947047,  // Al-Janadriyah, Saudi Arabia
    endLng: 46.8425606
  },
  {
    startLat: 24.8947047, // Al-Janadriyah, Saudi Arabia
    startLng: 46.8425606,
    endLat: 27.8644422,  // Sharm el-Sheikh, Egypt
    endLng: 34.295447
  },
  {
    startLat: 27.8644422, // Sharm el-Sheikh, Egypt
    startLng: 34.295447,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 6.4990718,  // Porto Novo, Benin
    endLng: 2.6253361
  },
  {
    startLat: 6.4990718, // Porto Novo, Benin
    startLng: 2.6253361,
    endLat: -6.8160837,  // Dar es Salaam, Tanzania
    endLng: 39.2803583
  },
  {
    startLat: -6.8160837, // Dar es Salaam, Tanzania
    startLng: 39.2803583,
    endLat: -3.3696827,  // Arusha, Tanzania
    endLng: 36.6880794
  },
  {
    startLat: -3.3696827, // Arusha, Tanzania
    startLng: 36.6880794,
    endLat: -1.8859597,  // Kigali, Rwanda
    endLng: 30.1296751
  },
  {
    startLat: -1.8859597, // Kigali, Rwanda
    startLng: 30.1296751,
    endLat: 5.5571096,  // Accra, Ghana
    endLng: -0.2012376
  },
  {
    startLat: 5.5571096, // Accra, Ghana
    startLng: -0.2012376,
    endLat: 6.328034,  // Monrovia, Liberia
    endLng: -10.797788
  },
  {
    startLat: 6.328034, // Monrovia, Liberia
    startLng: -10.797788,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 50.4500336,  // Kyiv, Ukraine
    endLng: 30.5241361
  },
  {
    startLat: 50.4500336, // Kyiv, Ukraine
    startLng: 30.5241361,
    endLat: 44.4361414,  // Bucharest, Romania
    endLng: 26.1027202
  },
  {
    startLat: 44.4361414, // Bucharest, Romania
    startLng: 26.1027202,
    endLat: 45.8130967,  // Zagreb, Croatia
    endLng: 15.9772795
  },
  {
    startLat: 45.8130967, // Zagreb, Croatia
    startLng: 15.9772795,
    endLat: 43.5854823,  // Sochi, Russia
    endLng: 39.723109
  },
  {
    startLat: 43.5854823, // Sochi, Russia
    startLng: 39.723109,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 32.0852997,  // Tel Aviv, Israel
    endLng: 34.7818064
  },
  {
    startLat: 32.0852997, // Tel Aviv, Israel
    startLng: 34.7818064,
    endLat: 31.7788242,  // Jerusalem, Israel
    endLng: 35.2257626
  },
  {
    startLat: 31.7788242, // Jerusalem, Israel
    startLng: 35.2257626,
    endLat: 31.3156403,  // Masada, Israel
    endLng: 35.3538943
  },
  {
    startLat: 31.3156403, // Masada, Israel
    startLng: 35.3538943,
    endLat: 24.638916,  // Riyadh, Saudi Arabia
    endLng: 46.7160104
  },
  {
    startLat: 24.638916, // Riyadh, Saudi Arabia
    startLng: 46.7160104,
    endLat: 24.8947047,  // al-Janadriyah, Saudi Arabia
    endLng: 46.8425606
  },
  {
    startLat: 24.8947047, // al-Janadriyah, Saudi Arabia
    startLng: 46.8425606,
    endLat: 27.8644422,  // Sharm el-Sheikh, Egypt
    endLng: 34.295447
  },
  {
    startLat: 27.8644422, // Sharm el-Sheikh, Egypt
    startLng: 34.295447,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 46.0500268,  // Ljubljana, Slovenia
    endLng: 14.5069289
  },
  {
    startLat: 46.0500268, // Ljubljana, Slovenia
    startLng: 14.5069289,
    endLat: 52.8066153,  // Meseberg, Germany
    endLng: 11.8071545
  },
  {
    startLat: 52.8066153, // Meseberg, Germany
    startLng: 11.8071545,
    endLat: 41.8933203,  // Rome, Italy
    endLng: 12.4829321
  },
  {
    startLat: 41.8933203, // Rome, Italy
    startLng: 12.4829321,
    endLat: 41.9032459,  // Apostolic Palace, Vatican City
    endLng: 12.4551867
  },
  {
    startLat: 41.9032459, // Apostolic Palace, Vatican City
    startLng: 12.4551867,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
    endLat: 54.596391,  // Belfast, United Kingdom
    endLng: -5.9301829
  },
  {
    startLat: 54.596391, // Belfast, United Kingdom
    startLng: -5.9301829,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 42.5513253,  // Tōyako, Japan
    endLng: 140.7642723
  },
  {
    startLat: 42.5513253, // Tōyako, Japan
    startLng: 140.7642723,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
    endLat: 13.7524938,  // Bangkok, Thailand
    endLng: 100.4935089
  },
  {
    startLat: 13.7524938, // Bangkok, Thailand
    startLng: 100.4935089,
    endLat: 40.190632,  // Beijing, China
    endLng: 116.412144
  },
  {
    startLat: 40.190632, // Beijing, China
    startLng: 116.412144,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -12.0621065,  // Lima, Peru
    endLng: -77.0365256
  },
  {
    startLat: -12.0621065, // Lima, Peru
    startLng: -77.0365256,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 33.3061701,  // Baghdad, Iraq
    endLng: 44.3872213
  },
  {
    startLat: 33.3061701, // Baghdad, Iraq
    startLng: 44.3872213,
    endLat: 34.5266431,  // Kabul, Afghanistan
    endLng: 69.1849082
  },
  {
    startLat: 34.5266431, // Kabul, Afghanistan
    startLng: 69.1849082,
    endLat: 52.3626963,  // RAF Mildenhall, United Kingdom
    endLng: 0.4854831
  },
  {
    startLat: 52.3626963, // RAF Mildenhall, United Kingdom
    startLng: 0.4854831,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities2008 = [
  { lat: 31.7788242, lng: 35.2257626, name: "Jerusalem" },
  { lat: 29.3796532, lng: 47.9734174, name: "Kuwait City" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: -1.8859597, lng: 30.1296751, name: "Kigali" },
  { lat: 52.8066153, lng: 11.8071545, name: "Meseberg" },
  { lat: 33.3061701, lng: 44.3872213, name: "Baghdad" },
  { lat: 6.4990718, lng: 2.6253361, name: "Porto Novo" },
  { lat: 52.3626963, lng: 0.4854831, name: "RAF Mildenhall" },
  { lat: 24.4538352, lng: 54.3774014, name: "Abu Dhabi" },
  { lat: 24.8947047, lng: 46.8425606, name: "Al-Janadriyah" },
  { lat: 6.328034, lng: -10.797788, name: "Monrovia" },
  { lat: 45.8130967, lng: 15.9772795, name: "Zagreb" },
  { lat: 32.0852997, lng: 34.7818064, name: "Tel Aviv" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 25.0742823, lng: 55.1885387, name: "Dubai" },
  { lat: 5.5571096, lng: -0.2012376, name: "Accra" },
  { lat: 41.9032459, lng: 12.4551867, name: "Apostolic Palace" },
  { lat: 54.596391, lng: -5.9301829, name: "Belfast" },
  { lat: 28.898956, lng: 48.1504607, name: "Camp Arifjan" },
  { lat: 40.190632, lng: 116.412144, name: "Beijing" },
  { lat: -3.3696827, lng: 36.6880794, name: "Arusha" },
  { lat: -12.0621065, lng: -77.0365256, name: "Lima" },
  { lat: 13.7524938, lng: 100.4935089, name: "Bangkok" },
  { lat: -6.8160837, lng: 39.2803583, name: "Dar es Salaam" },
  { lat: 24.8947047, lng: 46.8425606, name: "al-Janadriyah" },
  { lat: 34.5266431, lng: 69.1849082, name: "Kabul" },
  { lat: 50.4500336, lng: 30.5241361, name: "Kyiv" },
  { lat: 37.5666791, lng: 126.9782914, name: "Seoul" },
  { lat: 24.638916, lng: 46.7160104, name: "Riyadh" },
  { lat: 31.3156403, lng: 35.3538943, name: "Masada" },
  { lat: 43.5854823, lng: 39.723109, name: "Sochi" },
  { lat: 26.2235041, lng: 50.5822436, name: "Manama" },
  { lat: 44.4361414, lng: 26.1027202, name: "Bucharest" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 27.8644422, lng: 34.295447, name: "Sharm el-Sheikh" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 46.0500268, lng: 14.5069289, name: "Ljubljana" },
  { lat: 42.5513253, lng: 140.7642723, name: "Tōyako" },
];

export const labelsDefaultCities = [...cities2001, ...cities2002, ...cities2003, ...cities2004, ...cities2005, ...cities2006, ...cities2007, ...cities2008];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "2001 Trips": {
    arcs: arcs2001,
    labels: cities2001
  },
  "2002 Trips": {
    arcs: arcs2002,
    labels: cities2002
  },
  "2003 Trips": {
    arcs: arcs2003,
    labels: cities2003
  },
  "2004 Trips": {
    arcs: arcs2004,
    labels: cities2004
  },
  "2005 Trips": {
    arcs: arcs2005,
    labels: cities2005
  },
  "2006 Trips": {
    arcs: arcs2006,
    labels: cities2006
  },
  "2007 Trips": {
    arcs: arcs2007,
    labels: cities2007
  },
  "2008 Trips": {
    arcs: arcs2008,
    labels: cities2008
  },
};
