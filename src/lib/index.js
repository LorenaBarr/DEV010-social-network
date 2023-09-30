export const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = []; // Array that contains the stars
const FPS = 60; // Frames per second
const x = 100; // Number of stars
const mouse = {
  x: 0,
  y: 0, // mouse location
};
// Push stars to array
for (let i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
  });
}

function distance(point1, point2) {
  let xs = 0;
  let ys = 0;

  xs = point2.x - point1.x;
  xs *= xs;

  ys = point2.y - point1.y;
  ys *= ys;

  return Math.sqrt(xs + ys);
}
// Draw the scene
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';

  for (let i = 0; i < x; i++) {
    const s = stars[i];

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
  }

  ctx.beginPath();
  for (let i = 0; i < x; i++) {
    const starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (let j = 0; j < x; j++) {
      const starII = stars[j];
      if (distance(starI, starII) < 150) {
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = 'white';
  ctx.stroke();
}
// Update star locations
function update() {
  for (let i = 0; i < x; i++) {
    const s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();
