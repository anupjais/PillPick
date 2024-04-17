// Generate random colors for bubbles
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate random sizes for bubbles
function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create bubbles dynamically
const container = document.querySelector('.container');
const numBubbles = 20; // Adjust the number of bubbles as needed
for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('circle');
    bubble.style.backgroundColor = getRandomColor();
    bubble.style.width = bubble.style.height = getRandomSize(10, 50) + 'px';
    bubble.style.top = getRandomSize(10, 90) + '%';
    bubble.style.left = getRandomSize(10, 90) + '%';
    container.appendChild(bubble);
}
