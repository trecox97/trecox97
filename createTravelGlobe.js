// Default dataset
let arcsData = allArcs;

const globeContainer = document.getElementById('globeViz');

// Create the Globe instance
const minDashLength = 0.4;
const maxDashLength = 1;
const minDashGap = 0.1;
const maxDashGap = 0.5;

const globe = new Globe(globeContainer)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .arcsData(arcsData)
  .arcColor('color')
  .arcDashLength(() => Math.random() * (maxDashLength - minDashLength) + minDashLength)
  .arcDashGap(() => Math.random() * (maxDashGap - minDashGap) + minDashGap)
  .arcDashAnimateTime([2500])
  .arcStroke([".5px"]);
//  .arcDashLength(() => Math.random() * (maxDashLength - minDashLength) + minDashLength)


// Function to update the globe size on window resize
function resizeGlobe() {
  globeContainer.style.width = window.innerWidth - 120 + "px";
  globeContainer.style.height = window.innerHeight + "px";
  globe.width([window.innerWidth - 120]);
  globe.height([window.innerHeight]);
}

// Auto-rotate
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = .5;

//Starting point of view
globe.pointOfView({ lat: 22, lng: 25, altitude: 2.5 });

// Resize on window load and resize event
window.addEventListener('resize', resizeGlobe);
resizeGlobe(); // Initial resize