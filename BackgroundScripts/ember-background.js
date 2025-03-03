// Get the canvas element directly from the DOM
const canvas = document.getElementById('emberCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Ember Particle Constructor
function Ember(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1; // Ember size
    this.speedX = Math.random() * 2 - 1; // Horizontal speed
    this.speedY = Math.random() * -1.5 - 0.5; // Upward speed
    this.opacity = Math.random() * 0.5 + 0.3; // Opacity for fading effect
    this.color = "rgba(255, 69, 0," + this.opacity + ")"; // Ember color
}

// Update ember position and fade effect
Ember.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y < 0) {
        this.y = canvas.height; // Reset position to bottom when it reaches the top
        this.x = Math.random() * canvas.width; // Random horizontal reset
        this.opacity = Math.random() * 0.5 + 0.3; // Reset opacity
    }

    this.opacity -= 0.01; // Fade the ember gradually
    if (this.opacity <= 0) {
        this.opacity = 0; // Remove fully faded particles
    }
};

// Draw ember on the canvas
Ember.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
};

// Create and manage embers
let embers = [];
function createEmbers() {
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width; // Random x position
        let y = canvas.height; // Start at the bottom of the screen
        embers.push(new Ember(x, y));
    }
}

// Draw all embers and update their positions
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    for (let i = 0; i < embers.length; i++) {
        embers[i].update();
        embers[i].draw();
    }

    createEmbers(); // Continuously generate new embers

    requestAnimationFrame(animate); // Keep the animation going
}

// Start the animation
animate();
