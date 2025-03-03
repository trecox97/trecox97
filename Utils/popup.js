// Select the popup element and its text container
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');

// Function to show the popup and update its position based on the cursor
function showPopup(text, cursorX, cursorY) {
    popupText.textContent = text; // Set the popup text

    // Adjust position so the popup stays below and to the right of the cursor
    const offsetX = 10; // Offset to the right of the cursor
    const offsetY = 10; // Offset below the cursor
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Get the viewport width and height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate new position based on cursor
    let newX = cursorX + offsetX;
    let newY = cursorY + offsetY;

    // Check if the popup overflows on the right side
    if (newX + popupWidth > viewportWidth) {
        newX = viewportWidth - popupWidth - offsetX; // Adjust to stay within bounds
    }

    // Set the popup position
    popup.style.left = `${newX}px`;
    popup.style.top = `${newY}px`;

    // Display the popup
    popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
}

// Track the cursor position
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.pageX;
    cursorY = e.pageY;

    // Update the popup position in real-time as the cursor moves
    if (popup.style.display === 'block') {
        showPopup(popupText.textContent, cursorX, cursorY); // Keep popup position updated
    }
});

// Add event listeners to flags
const flags = document.querySelectorAll('.flag');
flags.forEach(flag => {
    flag.addEventListener('mouseenter', function (event) {
        const countryName = event.target.getAttribute('data-country'); // Get the country name
        showPopup(countryName, cursorX, cursorY); // Show popup near cursor
    });
    flag.addEventListener('mouseleave', hidePopup); // Hide popup when mouse leaves the element
});

// Add event listeners to states (SVG paths)
const states = document.querySelectorAll('.state');
states.forEach(state => {
    state.addEventListener('mouseenter', function (event) {
        const stateName = event.target.getAttribute('title'); // Get the state name
        showPopup(stateName, cursorX, cursorY); // Show popup near cursor
    });
    state.addEventListener('mouseleave', hidePopup); // Hide popup when mouse leaves the element
});
