const flags = document.querySelectorAll('.flag');
const tooltip = document.getElementById('tooltip');

// Function to update tooltip position
function updateTooltipPosition(event) {
    const mouseX = event.pageX + 10;  // Offset the tooltip slightly to the right of the mouse
    const mouseY = event.pageY + 10;  // Offset the tooltip slightly below the mouse

    // Get the window's width and height to avoid overflow
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the tooltip's dimensions
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    // Calculate the maximum X and Y positions to ensure the tooltip stays within the window bounds
    let newX = mouseX;
    let newY = mouseY;

    // Ensure the tooltip does not go outside the right edge of the window
    if (mouseX + tooltipWidth > windowWidth) {
        newX = windowWidth - tooltipWidth - 10;  // Adjust to fit within window
    }

    // Ensure the tooltip does not go outside the bottom edge of the window
    //if (mouseY + tooltipHeight > windowHeight) {
    //    newY = windowHeight - tooltipHeight - 10;  // Adjust to fit within window
    //}

    // Set the new position of the tooltip
    tooltip.style.left = `${newX}px`;
    tooltip.style.top = `${newY}px`;
}

// Show tooltip on hover
function showTooltip(event, flag) {
    const country = flag.getAttribute('data-country');
    tooltip.textContent = country;  // Set tooltip content

    tooltip.classList.add('visible');  // Make the tooltip visible

    // Update tooltip position based on mouse movement
    updateTooltipPosition(event);
}

// Hide tooltip on mouse leave
function hideTooltip() {
    tooltip.classList.remove('visible');  // Hide the tooltip
}

// Add event listeners to all flag elements
flags.forEach(flag => {
    flag.addEventListener('mouseenter', function(event) {
        showTooltip(event, flag);  // Show and move the tooltip
        document.addEventListener('mousemove', updateTooltipPosition);  // Update position on mouse move
    });

    flag.addEventListener('mouseleave', function() {
        hideTooltip();  // Hide tooltip when mouse leaves
        document.removeEventListener('mousemove', updateTooltipPosition);  // Stop updating position
    });
});
