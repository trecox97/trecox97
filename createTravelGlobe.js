// Default dataset
let arcsData = allArcs;

const globeContainer = document.getElementById('globeViz');

// Create the Globe instance
const minDashLength = 0.4;
const maxDashLength = 1;
const minDashGap = 0.1;
const maxDashGap = 0.5;

const cityLabels = [
  { lat: 40.7128, lng: -74.0060, name: "New York" },
  { lat: 35.6895, lng: 139.6917, name: "Tokyo" },
  { lat: 48.8566, lng: 2.3522, name: "Paris" },
  { lat: -1.2864, lng: 36.8172, name: "Nairobi" },
  { lat: 37.8715, lng: -122.2730, name: "Berkeley" },
  { lat: 22.3193, lng: 114.1694, name: "Hong Kong" },
  { lat: 40.4168, lng: -3.7038, name: "Madrid" },
  { lat: 41.9028, lng: 12.4964, name: "Rome" },
  //{ lat: 51.5074, lng: -0.1278, name: "London" },
  { lat: 53.3498, lng: -6.2603, name: "Dublin" },
  { lat: 55.6761, lng: 12.5683, name: "Copenhagen" },
  { lat: 47.3769, lng: 8.5417, name: "Zurich" },
  { lat: 47.6062, lng: -122.3321, name: "Seattle" },
  { lat: 43.6970, lng: -114.3514, name: "Sun Valley" },
  { lat: 40.7608, lng: -111.8910, name: "Salt Lake City" },
  { lat: 13.7563, lng: 100.5018, name: "Bangkok" },
  { lat: 20.6534, lng: -105.2253, name: "Puerto Vallarta" },
  //{ lat: 38.1904, lng: -119.9827, name: "Pinecrest" },
  { lat: 46.8139, lng: -71.2082, name: "Quebec City" },
  //{ lat: 39.6953, lng: 3.0176, name: "Mallorca" },
  //{ lat: 43.2965, lng: 5.3698, name: "Marseille" },
  //{ lat: 37.8882, lng: -4.7794, name: "Cordoba" },
  { lat: 52.3676, lng: 4.9041, name: "Amsterdam" },
  //{ lat: 49.6117, lng: 6.1319, name: "Luxembourg" },
  //{ lat: 54.5973, lng: -5.9301, name: "Belfast" },
  //{ lat: 43.7696, lng: 11.2558, name: "Florence" },
  { lat: 9.1450, lng: 40.4897, name: "Addis Ababa" },
  //{ lat: -0.1022, lng: 34.7617, name: "Kisumu" },
  //{ lat: -4.0435, lng: 39.6682, name: "Mombasa" },
  { lat: -6.1659, lng: 39.2026, name: "Zanzibar" },
  { lat: 43.0618, lng: 141.3545, name: "Sapporo" },
  //{ lat: 33.5904, lng: 130.4017, name: "Fukuoka" },
  { lat: 34.3853, lng: 132.4553, name: "Hiroshima" }
];

const globe = new Globe(globeContainer)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .arcsData(arcsData)
  .arcColor('color')
  .arcDashLength(() => Math.random() * (maxDashLength - minDashLength) + minDashLength)
  .arcDashGap(() => Math.random() * (maxDashGap - minDashGap) + minDashGap)
  .arcDashAnimateTime([2500])
  .arcStroke([".5px"])
  .labelsData(cityLabels)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.name)
  .labelSize(1.2)
  .labelColor(() => 'white') // You can customize this
  .labelResolution(2); // Improves text rendering quality

// Function to update the globe size on window resize
function resizeGlobe() {
  // Get the size of the globe container
  const containerRect = globeContainer.getBoundingClientRect();
  
  // Set the globe container's width and height from the actual container size
  globeContainer.style.width = containerRect.width + "px";
  globeContainer.style.height = containerRect.height + "px";

  // Update the globe's width and height based on the container's dimensions
  globe.width(containerRect.width); // Remove array brackets to use a single value
  globe.height(containerRect.height); // Remove array brackets to use a single value
}

// Function to change the size of the globe container itself on window resize
function resizeGlobeContainer() {
  // Get the new window size
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Optionally, apply some rules to adjust the container size
  globeContainer.style.width = (windowWidth) + 'px';
  globeContainer.style.height = (windowHeight * 0.85) + 'px'; 

  // Call resizeGlobe to adjust the globe size after the container has resized
  resizeGlobe();
}

// Auto-rotate
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.35;

// Starting point of view
globe.pointOfView({ lat: 22, lng: 25, altitude: 2.5 });

// Resize on window load and resize event
window.addEventListener('resize', () => {
  resizeGlobeContainer();
  resizeGlobe();
});
resizeGlobeContainer(); // Initial resize and update of the container size
resizeGlobe(); // Initial resize of the globe
