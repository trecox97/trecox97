document.addEventListener("DOMContentLoaded", function () {
    const trailMaps = document.getElementById("header-change");
    const originalHeader = document.querySelector("header");
    const secondaryHeader = document.createElement("header");

    // Define the new header
    secondaryHeader.id = "SecondaryNav";
    secondaryHeader.innerHTML = `
        <ul class="h">
            <li class="h"><a href="#Northeast">Northeast</a></li>
            <li class="h"><a href="#California-Tahoe">California/Tahoe</a></li>
            <li class="h"><a href="#Utah">Utah</a></li>
            <li class="h"><a href="#Idaho-Wyoming">Idaho + Wyoming</a></li>
            <li class="h"><a href="#Canada">Canada</a></li>
            <li class="h"><a href="#Japan">Japan</a></li>
        </ul>`;

    let isSecondaryActive = false;

    function swapHeader() {
        const trailMapsPosition = trailMaps.getBoundingClientRect().top;
        if (trailMapsPosition <= 0 && !isSecondaryActive) {
            originalHeader.replaceWith(secondaryHeader);
            secondaryHeader.classList.add("scrolled"); // Add the class for styling
            isSecondaryActive = true;
        } else if (trailMapsPosition > 0 && isSecondaryActive) {
            secondaryHeader.replaceWith(originalHeader);
            isSecondaryActive = false;
        }
    }

    window.addEventListener("scroll", swapHeader);
});
