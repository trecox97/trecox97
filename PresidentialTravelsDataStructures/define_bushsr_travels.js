const arcs1989 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 45.4208777,  // Ottawa, Canada
    endLng: -75.6901106
  },
  {
    startLat: 45.4208777, // Ottawa, Canada
    startLng: -75.6901106,
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
    endLat: 40.190632,  // Beijing, China
    endLng: 116.412144
  },
  {
    startLat: 40.190632, // Beijing, China
    startLng: 116.412144,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
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
    endLat: 41.4575382,  // Nettuno, Italy
    endLng: 12.661425
  },
  {
    startLat: 41.4575382, // Nettuno, Italy
    startLng: 12.661425,
    endLat: 41.90236,  // Apostolic Palalce, Vatican City
    endLng: 12.45332
  },
  {
    startLat: 41.90236, // Apostolic Palalce, Vatican City
    startLng: 12.45332,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 50.7842863,  // Bonn, West Germany
    endLng: 7.2605602
  },
  {
    startLat: 50.7842863, // Bonn, West Germany
    startLng: 7.2605602,
    endLat: 50.090568,  // Mainz, West Germany
    endLng: 8.5210722
  },
  {
    startLat: 50.090568, // Mainz, West Germany
    startLng: 8.5210722,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
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
    endLat: 54.3482907,  // Gdańsk, Poland
    endLng: 18.6540233
  },
  {
    startLat: 54.3482907, // Gdańsk, Poland
    startLng: 18.6540233,
    endLat: 47.4978789,  // Budapest, Hungary
    endLng: 19.0402383
  },
  {
    startLat: 47.4978789, // Budapest, Hungary
    startLng: 19.0402383,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 52.0799838,  // The Hague, Netherlands
    endLng: 4.3113461
  },
  {
    startLat: 52.0799838, // The Hague, Netherlands
    startLng: 4.3113461,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 9.9325427,  // San José, Costa Rica
    endLng: -84.0795782
  },
  {
    startLat: 9.9325427, // San José, Costa Rica
    startLng: -84.0795782,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 35.8989979,  // Valletta, Malta
    endLng: 14.5136607
  },
  {
    startLat: 35.8989979, // Valletta, Malta
    startLng: 14.5136607,
    endLat: 35.8417662,  // Marsaxlokk, Malta
    endLng: 14.5448353
  },
  {
    startLat: 35.8417662, // Marsaxlokk, Malta
    startLng: 14.5448353,
    endLat: 50.8465573,  // Brussels, Belgium
    endLng: 4.351697
  },
  {
    startLat: 50.8465573, // Brussels, Belgium
    startLng: 4.351697,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 18.0668544,  // Marigot, France
    endLng: -63.0848869
  },
  {
    startLat: 18.0668544, // Marigot, France
    startLng: -63.0848869,
    endLat: 18.0814066,  // Saint Martin, France
    endLng: -63.0467131
  },
  {
    startLat: 18.0814066, // Saint Martin, France
    startLng: -63.0467131,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1989 = [
  { lat: 45.4208777, lng: -75.6901106, name: "Ottawa" },
  { lat: 35.8989979, lng: 14.5136607, name: "Valletta" },
  { lat: 50.7842863, lng: 7.2605602, name: "Bonn" },
  { lat: 52.2319581, lng: 21.0067249, name: "Warsaw" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 35.8417662, lng: 14.5448353, name: "Marsaxlokk" },
  { lat: 41.90236, lng: 12.45332, name: "Apostolic Palalce" },
  { lat: 40.190632, lng: 116.412144, name: "Beijing" },
  { lat: 50.090568, lng: 8.5210722, name: "Mainz" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 50.8465573, lng: 4.351697, name: "Brussels" },
  { lat: 18.0814066, lng: -63.0467131, name: "Saint Martin" },
  { lat: 35.6768601, lng: 139.7638947, name: "Tokyo" },
  { lat: 37.5666791, lng: 126.9782914, name: "Seoul" },
  { lat: 18.0668544, lng: -63.0848869, name: "Marigot" },
  { lat: 41.4575382, lng: 12.661425, name: "Nettuno" },
  { lat: 9.9325427, lng: -84.0795782, name: "San José" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 47.4978789, lng: 19.0402383, name: "Budapest" },
  { lat: 52.0799838, lng: 4.3113461, name: "The Hague" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 54.3482907, lng: 18.6540233, name: "Gdańsk" },
];

const arcs1990 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
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
    endLat: 43.6534817,  // Toronto, Canada
    endLng: -79.3839347
  },
  {
    startLat: 43.6534817, // Toronto, Canada
    startLng: -79.3839347,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 32.2942679,  // Hamilton, Bermuda
    endLng: -64.7853167
  },
  {
    startLat: 32.2942679, // Hamilton, Bermuda
    startLng: -64.7853167,
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
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
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
    endLat: 49.3165553,  // Speyer, Germany
    endLng: 8.433615
  },
  {
    startLat: 49.3165553, // Speyer, Germany
    startLng: 8.433615,
    endLat: 49.4704113,  // Ludwigshafen, Germany
    endLng: 8.4381568
  },
  {
    startLat: 49.4704113, // Ludwigshafen, Germany
    startLng: 8.4381568,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 21.5504432,  // Jeddah, Saudi Arabia
    endLng: 39.1742363
  },
  {
    startLat: 21.5504432, // Jeddah, Saudi Arabia
    startLng: 39.1742363,
    endLat: 26.2966528,  // Dhahran, Saudi Arabia
    endLng: 50.1202146
  },
  {
    startLat: 26.2966528, // Dhahran, Saudi Arabia
    startLng: 50.1202146,
    endLat: 30.0443879,  // Cairo, Egypt
    endLng: 31.2357257
  },
  {
    startLat: 30.0443879, // Cairo, Egypt
    startLng: 31.2357257,
    endLat: 46.2017559,  // Geneva, Switzerland
    endLng: 6.1466014
  },
  {
    startLat: 46.2017559, // Geneva, Switzerland
    startLng: 6.1466014,
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
    endLat: 26.2953465,  // Agualeguas, Mexico
    endLng: -99.7013315
  },
  {
    startLat: 26.2953465, // Agualeguas, Mexico
    startLng: -99.7013315,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -15.7801,  // Brasília, Brazil
    endLng: -47.9292
  },
  {
    startLat: -15.7801, // Brasília, Brazil
    startLng: -47.9292,
    endLat: -34.9058916,  // Montevideo, Uruguay
    endLng: -56.1913095
  },
  {
    startLat: -34.9058916, // Montevideo, Uruguay
    startLng: -56.1913095,
    endLat: -34.6083696,  // Buenos Aires, Argentina
    endLng: -58.4440583
  },
  {
    startLat: -34.6083696, // Buenos Aires, Argentina
    startLng: -58.4440583,
    endLat: -33.4377756,  // Santiago, Chile
    endLng: -70.6504502
  },
  {
    startLat: -33.4377756, // Santiago, Chile
    startLng: -70.6504502,
    endLat: 10.5060934,  // Caracas, Venezuela
    endLng: -66.9146008
  },
  {
    startLat: 10.5060934, // Caracas, Venezuela
    startLng: -66.9146008,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1990 = [
  { lat: 43.6534817, lng: -79.3839347, name: "Toronto" },
  { lat: 49.3165553, lng: 8.433615, name: "Speyer" },
  { lat: -15.7801, lng: -47.9292, name: "Brasília" },
  { lat: 30.0443879, lng: 31.2357257, name: "Cairo" },
  { lat: 21.5504432, lng: 39.1742363, name: "Jeddah" },
  { lat: 10.4265566, lng: -75.5441671, name: "Cartagena" },
  { lat: 10.5060934, lng: -66.9146008, name: "Caracas" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 25.6802019, lng: -100.315258, name: "Monterrey" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 32.2942679, lng: -64.7853167, name: "Hamilton" },
  { lat: 49.4704113, lng: 8.4381568, name: "Ludwigshafen" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 60.1674881, lng: 24.9427473, name: "Helsinki" },
  { lat: -34.6083696, lng: -58.4440583, name: "Buenos Aires" },
  { lat: -33.4377756, lng: -70.6504502, name: "Santiago" },
  { lat: 46.2017559, lng: 6.1466014, name: "Geneva" },
  { lat: 26.2966528, lng: 50.1202146, name: "Dhahran" },
  { lat: -34.9058916, lng: -56.1913095, name: "Montevideo" },
  { lat: 26.2953465, lng: -99.7013315, name: "Agualeguas" },
];

const arcs1991 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 45.4208777,  // Ottawa, Canada
    endLng: -75.6901106
  },
  {
    startLat: 45.4208777, // Ottawa, Canada
    startLng: -75.6901106,
    endLat: 14.6027962,  // Fort-de-France, France
    endLng: -61.0676724
  },
  {
    startLat: 14.6027962, // Fort-de-France, France
    startLng: -61.0676724,
    endLat: 14.6113732,  // Martinique, France
    endLng: -60.9620777
  },
  {
    startLat: 14.6113732, // Martinique, France
    startLng: -60.9620777,
    endLat: 32.2942679,  // Hamilton, Bermuda
    endLng: -64.7853167
  },
  {
    startLat: 32.2942679, // Hamilton, Bermuda
    startLng: -64.7853167,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 43.6534817,  // Toronto, Canada
    endLng: -79.3839347
  },
  {
    startLat: 43.6534817, // Toronto, Canada
    startLng: -79.3839347,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: 48.6452851,  // Rambouillet, France
    endLng: 1.819207
  },
  {
    startLat: 48.6452851, // Rambouillet, France
    startLng: 1.819207,
    endLat: 51.5074456,  // London, United Kingdom
    endLng: -0.1277653
  },
  {
    startLat: 51.5074456, // London, United Kingdom
    startLng: -0.1277653,
    endLat: 37.9755648,  // Athens, Greece
    endLng: 23.7348324
  },
  {
    startLat: 37.9755648, // Athens, Greece
    startLng: 23.7348324,
    endLat: 35.4892065,  // Souda Bay, Greece
    endLng: 24.1136941
  },
  {
    startLat: 35.4892065, // Souda Bay, Greece
    startLng: 24.1136941,
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
    endLat: 55.7558,  // Moscow, Russia
    endLng: 37.6173
},
{
    startLat: 55.7558, // Moscow, Russia
    startLng: 37.6173,
    endLat: 50.4501,  // Kiev, Ukraine
    endLng: 30.5247
},
{
    startLat: 50.4501, // Kiev, Ukraine
    startLng: 30.5247,
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
    endLat: 52.0799838,  // The Hague, Netherlands
    endLng: 4.3113461
  },
  {
    startLat: 52.0799838, // The Hague, Netherlands
    startLng: 4.3113461,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1991 = [
  { lat: 41.9032459, lng: 12.4551867, name: "Apostolic Palace" },
  { lat: 43.6534817, lng: -79.3839347, name: "Toronto" },
  { lat: 55.7558, lng: 37.6173, name: "Moscow" },
  { lat: 45.4208777, lng: -75.6901106, name: "Ottawa" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 51.5074456, lng: -0.1277653, name: "London" },
  { lat: 50.4501, lng: 30.5247, name: "Kiev" },
  { lat: 14.6027962, lng: -61.0676724, name: "Fort-de-France" },
  { lat: 41.8933203, lng: 12.4829321, name: "Rome" },
  { lat: 40.4167047, lng: -3.7035825, name: "Madrid" },
  { lat: 32.2942679, lng: -64.7853167, name: "Hamilton" },
  { lat: 37.9755648, lng: 23.7348324, name: "Athens" },
  { lat: 48.6452851, lng: 1.819207, name: "Rambouillet" },
  { lat: 14.6113732, lng: -60.9620777, name: "Martinique" },
  { lat: 35.4892065, lng: 24.1136941, name: "Souda Bay" },
  { lat: 41.006381, lng: 28.9758715, name: "Istanbul" },
  { lat: 52.0799838, lng: 4.3113461, name: "The Hague" },
  { lat: 39.9207759, lng: 32.8540497, name: "Ankara" },
];

const arcs1993 = [
  {
    startLat: 38.9072, // Washington, DC, USA
    startLng: -77.0369,
    endLat: -33.8698439,  // Sydney, Australia
    endLng: 151.2082848
  },
  {
    startLat: -33.8698439, // Sydney, Australia
    startLng: 151.2082848,
    endLat: -35.2975906,  // Canberra, Australia
    endLng: 149.1012676
  },
  {
    startLat: -35.2975906, // Canberra, Australia
    startLng: 149.1012676,
    endLat: -37.8142454,  // Melbourne, Australia
    endLng: 144.9631732
  },
  {
    startLat: -37.8142454, // Melbourne, Australia
    startLng: 144.9631732,
    endLat: 1.2899175,  // Singapore, Singapore
    endLng: 103.8519072
  },
  {
    startLat: 1.2899175, // Singapore, Singapore
    startLng: 103.8519072,
    endLat: 37.5666791,  // Seoul, South Korea
    endLng: 126.9782914
  },
  {
    startLat: 37.5666791, // Seoul, South Korea
    startLng: 126.9782914,
    endLat: 35.0115754,  // Kyoto, Japan
    endLng: 135.7681441
  },
  {
    startLat: 35.0115754, // Kyoto, Japan
    startLng: 135.7681441,
    endLat: 34.5094067,  // Kashihara, Japan
    endLng: 135.792955
  },
  {
    startLat: 34.5094067, // Kashihara, Japan
    startLng: 135.792955,
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
    endLat: 8.9714493,  // Panama City, Panama
    endLng: -79.5341802
  },
  {
    startLat: 8.9714493, // Panama City, Panama
    startLng: -79.5341802,
    endLat: -22.9110137,  // Rio de Janeiro, Brazil
    endLng: -43.2093727
  },
  {
    startLat: -22.9110137, // Rio de Janeiro, Brazil
    startLng: -43.2093727,
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
    endLat: 48.1371079,  // Munich, Germany
    endLng: 11.5753822
  },
  {
    startLat: 48.1371079, // Munich, Germany
    startLng: 11.5753822,
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
    endLat: 24.638916,  // Riyadh, Saudi Arabia
    endLng: 46.7160104
  },
  {
    startLat: 24.638916, // Riyadh, Saudi Arabia
    startLng: 46.7160104,
    endLat: 2.0349312,  // Mogadishu, Somalia
    endLng: 45.3419183
  },
  {
    startLat: 2.0349312, // Mogadishu, Somalia
    startLng: 45.3419183,
    endLat: 3.119951,  // Baidoa, Somalia
    endLng: 43.644462
  },
  {
    startLat: 3.119951, // Baidoa, Somalia
    startLng: 43.644462,
    endLat: 55.625578,  // Moscow, Russia
    endLng: 37.6063916
  },
  {
    startLat: 55.625578, // Moscow, Russia
    startLng: 37.6063916,
    endLat: 48.8588897,  // Paris, France
    endLng: 2.320041
  },
  {
    startLat: 48.8588897, // Paris, France
    startLng: 2.320041,
    endLat: 38.9072,  // Washington, DC, USA
    endLng: -77.0369
  },
];

const cities1993 = [
  { lat: 2.0349312, lng: 45.3419183, name: "Mogadishu" },
  { lat: 3.119951, lng: 43.644462, name: "Baidoa" },
  { lat: -22.9110137, lng: -43.2093727, name: "Rio de Janeiro" },
  { lat: 52.2319581, lng: 21.0067249, name: "Warsaw" },
  { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
  { lat: 24.638916, lng: 46.7160104, name: "Riyadh" },
  { lat: 1.2899175, lng: 103.8519072, name: "Singapore" },
  { lat: -35.2975906, lng: 149.1012676, name: "Canberra" },
  { lat: 8.9714493, lng: -79.5341802, name: "Panama City" },
  { lat: 35.6768601, lng: 139.7638947, name: "Tokyo" },
  { lat: 37.5666791, lng: 126.9782914, name: "Seoul" },
  { lat: 60.1674881, lng: 24.9427473, name: "Helsinki" },
  { lat: 35.0115754, lng: 135.7681441, name: "Kyoto" },
  { lat: -33.8698439, lng: 151.2082848, name: "Sydney" },
  { lat: 55.625578, lng: 37.6063916, name: "Moscow" },
  { lat: -37.8142454, lng: 144.9631732, name: "Melbourne" },
  { lat: 48.8588897, lng: 2.320041, name: "Paris" },
  { lat: 48.1371079, lng: 11.5753822, name: "Munich" },
  { lat: 34.5094067, lng: 135.792955, name: "Kashihara" },
];

export const labelsDefaultCities = [...cities1989, ...cities1990, ...cities1991, ...cities1993];

export const allArcs = [];

export const datasets = {
  "All Cities": {
    labels: labelsDefaultCities
  },
  "1989 Trips": {
    arcs: arcs1989,
    labels: cities1989
  },
  "1990 Trips": {
    arcs: arcs1990,
    labels: cities1990
  },
  "1991 Trips": {
    arcs: arcs1991,
    labels: cities1991
  },
  "1993 Trips": {
    arcs: arcs1993,
    labels: cities1993
  },
};
