// Get all the flag elements and tooltip element
const flags = document.querySelectorAll('.flag');
const tooltip = document.getElementById('tooltip');

// Add event listeners to each flag
flags.forEach(flag => {
   flag.addEventListener('mouseenter', function(event) {
      // Get the country name from the data attribute
      const country = flag.getAttribute('data-country');

      // Set the tooltip text and make it visible
      tooltip.textContent = country;
      tooltip.classList.add('visible');

      // Position the tooltip next to the mouse pointer
      document.addEventListener('mousemove', moveTooltip);
   });

   flag.addEventListener('mouseleave', function() {
      // Hide the tooltip when the mouse leaves the flag
      tooltip.classList.remove('visible');
      document.removeEventListener('mousemove', moveTooltip);
   });
});

// Function to move the tooltip along with the mouse
function moveTooltip(event) {
   tooltip.style.left = event.pageX + 10 + 'px'; // Slight offset to the right of the cursor
   tooltip.style.top = event.pageY + 10 + 'px';  // Slight offset below the cursor
}
