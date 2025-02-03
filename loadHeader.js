// Load header.html into the page
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        highlightCurrentPage();
        addScrollEffect();  // Call function to add scroll effect
    })
    .catch(error => console.error('Error loading the header:', error));

// Function to highlight the current page link add special function to peacecorps page.
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.h a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.id = 'current'; // Add the 'current' id to the link
        }
        if (currentPage === 'peacecorps.html') {
            
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