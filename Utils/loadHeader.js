// Load header.html into the page
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        highlightCurrentPage();
        addScrollEffect();  // Call function to add scroll effect
    })
    .catch(error => console.error('Error loading the header:', error));

// Function to highlight the current page and add emojis.
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.h a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.id = 'current'; // Add the 'current' id to the link
        }
        if (currentPage === 'peacecorps.html' && link.getAttribute('href') === 'peacecorps.html') {
            link.innerHTML = '🕊️Peace Corps🕊️'; // Change the text content
        }
        if ((currentPage === 'colleges.html' || currentPage === 'courses.html' || 
            currentPage === 'mastersCourses.html') && link.getAttribute('href') === 'colleges.html') {
            link.innerHTML = '📚Education📚'; // Change the text content
        }
        if (currentPage === 'locations.html' && link.getAttribute('href') === 'locations.html') {
            link.innerHTML = '📍Locations📍'; // Change the text content
        }
        if (currentPage === 'skiing.html' && link.getAttribute('href') === 'skiing.html') {
            link.innerHTML = '⛷️Skiing⛷️'; // Change the text content
        }
        if (currentPage === 'books.html' && link.getAttribute('href') === 'books.html') {
            link.innerHTML = '📖Books📖'; // Change the text content
        }
        if (currentPage === 'presidentialTravel.html' && link.getAttribute('href') === 'presidentialTravel.html') {
            link.innerHTML = '🌎Presidential Travel🌎'; // Change the text content
        }
    });
}

// Scroll effect for header
function addScrollEffect() {
    const header = document.querySelector('header'); // Get the header element

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}