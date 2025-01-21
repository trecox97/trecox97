console.log("popup.js script loaded");

// Function to update popup position
function updatePopupPosition(event, popup) {
    const mouseX = event.pageX + 10;  // Offset the popup to the right of the mouse
    const mouseY = event.pageY + 10;  // Offset the popup below the mouse

    // Get the window's width and height to avoid overflow
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the popup's dimensions
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Calculate the maximum X and Y positions to ensure the popup stays within the window bounds
    let newX = mouseX;
    let newY = mouseY;

    // Ensure the popup does not go outside the right edge of the window
    if (mouseX + popupWidth > windowWidth) {
        newX = windowWidth - popupWidth - 10; // 10px padding from the edge
    }

    // Ensure the popup does not go outside the bottom edge of the window
    if (mouseY + popupHeight > windowHeight) {
        newY = windowHeight - popupHeight - 10; // 10px padding from the edge
    }

    // Set the new position of the popup
    popup.style.left = `${newX}px`;
    popup.style.top = `${newY}px`;
}

// Function to show popup on hover
function showPopup(event, popup) {
    popup.style.display = 'block';  // Show the popup
    updatePopupPosition(event, popup);  // Update its position based on the mouse
}

// Function to hide the popup when mouse leaves the element
function hidePopup(popup) {
    popup.style.display = 'none';  // Hide the popup
}

// Add event listeners to all elements that should trigger popups
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'popup-trigger' (e.g., your SVG elements)
    const svgElements = document.querySelectorAll('.popup-trigger');
    
    // For each SVG element, find the corresponding popup and add event listeners
    svgElements.forEach(function (svgElement) {
        const popupId = svgElement.getAttribute('data-popup'); // Use a data attribute to link each svg to a popup
        const popup = document.getElementById(popupId);  // Get the associated popup

        if (popup) {
            // Event listeners for showing and hiding the popup
            svgElement.addEventListener('mousemove', function(event) {
                showPopup(event, popup); // Show and move the corresponding popup
            });

            svgElement.addEventListener('mouseleave', function() {
                hidePopup(popup); // Hide the corresponding popup when the mouse leaves
            });
        }
    });
});
