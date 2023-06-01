const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let gameOver = false;
let velocity = 10;
let angle = 45;
let inertia = 0;
let accelerationY = 9.8;
let justBegan = false;
let projectileRadius = 10;
let projectileX = 0;
let projectileY = canvas.height - projectileRadius;

let speedScale = 0.5;
let angleScale = 0.1;

let randomHeight = Math.random() * (200 - 50) + 50;
let barHeight = randomHeight;
let barX = (Math.random() * (canvas.width - 100)) + 100;
const tolerance = 5;

let points = 0;
let won = false;
let isAnimating = false; // Flag to track animation state
let isLaunched = false; // Flag to track if the ball has been launched
let animationId;
let tries = 0; // Counter for number of tries

window.onload = function () {
  ctx.beginPath();
  ctx.arc(projectileX, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.fillRect(barX - 100, barHeight, 100, 25);
};

function resetAllVariables() {
  updateVelocityLabel();
  updateAngleLabel();
  inertia = 0;
  accelerationY = 0.2;
  gameOver = false;
  projectileRadius = 10;
  projectileX = projectileRadius + 5;
  projectileY = canvas.height - projectileRadius;

  speedScale = 0.5;
  angleScale = 0.1;
}

function updateVelocityLabel() {
  velocity = document.getElementById("velocity").value;
  document.getElementById("velocityLabel").innerHTML = "Velocity: " + velocity;
}

function updateAngleLabel() {
  angle = document.getElementById("angle").value;
  document.getElementById("angleLabel").innerHTML = "Angle: " + angle;
}

document
  .getElementById("velocity")
  .addEventListener("input", updateVelocityLabel);
document.getElementById("angle").addEventListener("input", updateAngleLabel);

function getUserGuess() {
  console.log(velocity);
  console.log(angle);
  projectileX = projectileRadius + 5;
  resetAllVariables();
  if (!isAnimating && !isLaunched && velocity > 0) {
    cancelAnimationFrame(animationId); // Cancel any ongoing animation
    isAnimating = true; // Set the isAnimating flag
    tries++; // Increment the number of tries
    drawProjectile(projectileX);
  }
  justBegan = true;
}

function drawProjectile(x) {
  const angleInRadians = (angle * Math.PI) / 180;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  inertia += accelerationY;
  projectileY += inertia;

  ctx.beginPath();
  ctx.arc(x, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.fillRect(barX - 100, barHeight, 100, 25);

  const velocityX = velocity * speedScale * Math.cos(angleInRadians);
  const velocityY = velocity * speedScale * Math.sin(angleInRadians);

  x += velocityX;
  projectileY -= velocityY;

  if (projectileY + projectileRadius >= canvas.height) {
    projectileY = canvas.height - projectileRadius;
    inertia = 0;
    velocity = 0;
    isAnimating = false; // Reset the isAnimating flag
  }
  if (
    x + projectileRadius >= barX - 100 &&
    x - projectileRadius <= barX &&
    projectileY >= barHeight &&
    projectileY <= barHeight + 25
  ) {
    won = true;
    document.getElementById("finishLine").innerHTML = "You Won! :)";
    gameOver = true;
    velocityX = 0;
    velocityY = 0;
  } else if (projectileY + projectileRadius == canvas.height) {
    document.getElementById("finishLine").innerHTML = "You Lost :(";
    gameOver = true;
    won = false;
  }
  justBegan = false;
  if (x + projectileRadius <= canvas.width && !gameOver) {
    animationId = requestAnimationFrame(() => drawProjectile(x));
  } else {
    if (!won) {
      document.getElementById("finishLine").innerHTML = "You Lost :(";
    }
    isAnimating = false; // Reset the isAnimating flag
    isLaunched = false; // Reset the isLaunched flag
    document.getElementById("tries").innerHTML = "Tries: " + tries; // Display the number of tries
  }
}
