// Default dataset
//let arcsData = allArcs;
//let labelData = labelsDefaultCities;

const globeContainer = document.getElementById('globeViz');

const minDashLength = 0.4;
const maxDashLength = 1;
const minDashGap = 0.1;
const maxDashGap = 0.5;

// Create the Globe instance
const globe = new Globe(globeContainer)
  .globeImageUrl('Images/earth-night.jpg')
  .backgroundImageUrl('Images/night-sky.png')
  //.arcsData(arcsData)
  .arcColor(["white", "white"])
  .arcDashLength(() => Math.random() * (maxDashLength - minDashLength) + minDashLength)
  .arcDashGap(() => Math.random() * (maxDashGap - minDashGap) + minDashGap)
  .arcDashAnimateTime([2500])
  .arcStroke([".5px"])
  //.labelsData(labelData)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.name)
  .labelSize(0.7)
  .labelColor(() => 'white')
  .labelResolution(3); // Improves text rendering quality

// Auto-rotate
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.2;

// Starting point of view
globe.pointOfView({ lat: 22, lng: 25, altitude: 2.5 });

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
function resizeGlobeContainerAndGlobe() {
  // Get the new window size
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Optionally, apply some rules to adjust the container size
  globeContainer.style.width = (windowWidth) + 'px';
  globeContainer.style.height = (windowHeight * 0.85) + 'px'; 

  // Call resizeGlobe to adjust the globe size after the container has resized
  resizeGlobe();
}

// Resize on window load and resize event
window.addEventListener('resize', () => {
  resizeGlobeContainerAndGlobe();
});

resizeGlobeContainerAndGlobe(); // Initial resize and update of the container size
