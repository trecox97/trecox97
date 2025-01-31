document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Scroll effect for header
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("header ul.h li.h a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add("active"); // Add active class to parent <li>
        }
    });
});
