const matrix = document.querySelector('.matrix');
const canvas = document.createElement('canvas');
matrix.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Resize the canvas to fill the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix symbols
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charArray = chars.split('');

// Matrix Rain Variables
const fontSize = 20;
const columns = canvas.width / fontSize;  // Number of columns to draw
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;  // Set random start point for each drop
}

// Function to draw matrix rain effect
function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  // Transparent black for fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // Clear canvas

    ctx.fillStyle = '#0F0';  // Matrix green color
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;  // Reset the drop to the top
        }

        drops[i]++;
    }
}

// Run the animation
setInterval(drawMatrixRain, 50);
