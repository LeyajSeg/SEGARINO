const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const characters = '0123456789ABCDEF';
const fontSize = 27; 
const columns = Math.floor(canvas.width / fontSize); 

const drops = new Array(columns).fill(1); 

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#FF073A'; 
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; 
        }

        drops[i]++;
    }
}


setInterval(draw, 40); 