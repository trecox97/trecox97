var map = L.map('map').setView([30, -90], 13).setZoom(3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([39.1969821, -120.2446837]).addTo(map)
    .bindPopup('Palisades Tahoe');

L.marker([47.2786466, -70.6135726]).addTo(map)
    .bindPopup('Le Massif de Charlevoix');

L.marker([45.2830545, -72.6433552]).addTo(map)
    .bindPopup('Bromont');

L.marker([43.6694166, -114.3928046]).addTo(map)
    .bindPopup('Sun Valley');

L.marker([37.6307683, -119.0429339]).addTo(map)
    .bindPopup('Mammoth');

L.marker([44.9352705, -72.5271802]).addTo(map)
    .bindPopup('Jay Peak');

L.marker([44.572638, -72.77799172]).addTo(map)
    .bindPopup("Smugglers' Notch");

L.marker([42.9602434, -72.9307011]).addTo(map)
    .bindPopup('Mt Snow');

L.marker([43.4005605, -72.7543691]).addTo(map)
    .bindPopup('Okemo');

L.marker([43.3100685, -72.1043308]).addTo(map)
    .bindPopup('Sunapee');

L.marker([42.9984141, -71.8839892]).addTo(map)
    .bindPopup('Crotched');

L.marker([42.1699359, -73.48216]).addTo(map)
    .bindPopup('Catamount');

L.marker([41.050001, -75.3599886]).addTo(map)
    .bindPopup('Camelback');

L.marker([42.183659, -73.3227074]).addTo(map)
    .bindPopup('Butternut');

L.marker([42.5458387, -73.2965169]).addTo(map)
    .bindPopup('Jiminy Peak');

L.marker([41.0396693, -75.090167]).addTo(map)
    .bindPopup('Shawnee Mountain');

L.marker([39.1646275, -120.2415317]).addTo(map)
    .bindPopup('Alpine Meadows');

L.marker([39.2526477, -119.9293628]).addTo(map)
    .bindPopup('Diamond Peak');

L.marker([39.303773, -120.3410773]).addTo(map)
    .bindPopup('Sugar Bowl');

L.marker([43.6019145, -110.8577209]).addTo(map)
    .bindPopup('Jackson Hole');

L.marker([40.6091043, -111.4911257]).addTo(map)
    .bindPopup('Deer Valley');

L.marker([40.6579653, -111.552046]).addTo(map)
    .bindPopup('Park City');

L.marker([40.5983972, -111.584032]).addTo(map)
    .bindPopup('Brighton');

L.marker([40.6203267, -111.5929965]).addTo(map)
    .bindPopup('Solitude');

L.marker([40.5889114, -111.6382857]).addTo(map)
    .bindPopup('Alta');

L.marker([40.5810312, -111.6569523]).addTo(map)
    .bindPopup('Snowbird');
