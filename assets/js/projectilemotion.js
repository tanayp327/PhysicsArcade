// Define the variables.

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let velocity = 10;
let angle = 45;
let inertia = 0;
let accelerationY = 0.2;

let projectileRadius = 10;
let projectileX = projectileRadius + 5;
let projectileY = projectileRadius + 50;

let speedScale = 0.5;
let angleScale = 0.1;

let randomHeight = Math.random() * (200 - 50) + 50;
let barHeight = 0;

const tolerance = 5;

let points = 0;

let won = false;

// console.log(projectileY);

window.onload = function() {
  ctx.beginPath();
  ctx.arc(projectileX, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width - 100, randomHeight, 100, 25);
  barHeight = randomHeight;
};

function resetAllVariables() {
  updateVelocityLabel();
  inertia = 0;
  accelerationY = 0.2;

  projectileRadius = 10;
  projectileX = projectileRadius + 5;
  projectileY = projectileRadius + 50;

  speedScale = 0.5;
  angleScale = 0.1;
  barHeight = randomHeight;
}

// Function calling is necessary for the event listeners to update input labels in real time.
function updateVelocityLabel() {
  velocity = document.getElementById('velocity').value;
  document.getElementById('velocityLabel').innerHTML = "Velocity: " + velocity;
}

// The event listeners mentioned.
document.getElementById('velocity').addEventListener('input', updateVelocityLabel);

// Check if user's inputs were collected. All the cool devs use inspect element.
function getUserGuess() {
  console.log(velocity);
  console.log(angle);
  projectileX = projectileRadius + 5;
  resetAllVariables();
  drawProjectile(projectileX);
}

function drawProjectile(x) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  inertia += accelerationY;
  projectileY += inertia;

  ctx.beginPath();
  ctx.arc(x, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  barHeight = randomHeight; // Update barHeight with the changing projectileY value

  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width - 100, barHeight, 100, 25);

  x += velocity * speedScale;

  if (projectileY + projectileRadius > canvas.height) {
    projectileY = canvas.height - projectileRadius;
    inertia *= -1;
  }
  
  if (x + projectileRadius <= canvas.width) {
    requestAnimationFrame(() => drawProjectile(x));
  }
}

let score = 0; // Initial score value

function updatePoints() {
  fetch('api/users')
    .then(response => response.json())
    .then(data => {
      // Assuming the response data is in JSON format and contains a "score" field
      if (data.score !== undefined) {
        score = data.score; // Update the score variable with the fetched value
        console.log('Score updated:', score);
      } else {
        console.log('Invalid response format');
      }
    })
    .catch(error => {
      console.log('Error occurred while fetching data:', error);
    });
}