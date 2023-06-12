const canvas = document.getElementById("canvas1"); // Get the canvas element
const ctx = canvas.getContext("2d"); // Get the 2D rendering context
const tolerance = 5; // Tolerance value for collision detection
let gameOver = false; // Flag to indicate if the game is over
let velocity = 10; // Initial velocity of the projectile
let angle = 45; // Initial angle of the projectile
let inertia = 0; // Inertia of the projectile
let accelerationY = 9.8; // Acceleration due to gravity
let justBegan = false; // Flag to indicate if the game just started
let projectileRadius = 10; // Radius of the projectile
let projectileX = 0; // X-coordinate of the projectile
let projectileY = canvas.height - projectileRadius; // Y-coordinate of the projectile
let speedScale = 0.5; // Scale factor for the velocity
let angleScale = 0.1; // Scale factor for the angle
let randomHeight = Math.random() * (200 - 50) + 50; // Generate a random height for the bar
let barHeight = randomHeight; // Height of the bar
let barX = Math.random() * (canvas.width - 100) + 100; // X-coordinate of the bar
let points = 0; // Player's points
let won = false; // Flag to indicate if the player won
let isAnimating = false; // Flag to indicate if the animation is in progress
let isLaunched = false; // Flag to indicate if the projectile is launched
let animationId; // ID of the animation frame
let tries = 0; // Number of tries

window.onload = function () {
  // Draw the initial state of the game
  ctx.beginPath();
  ctx.arc(projectileX, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fillRect(barX - 100, barHeight, 100, 25);
};

function resetAllVariables() {
  // Reset all variables to their initial values
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
  // Update the velocity label with the current value
  velocity = document.getElementById("velocity").value;
  document.getElementById("velocityLabel").innerHTML = "Velocity: " + velocity;
}

function updateAngleLabel() {
  // Update the angle label with the current value
  angle = document.getElementById("angle").value;
  document.getElementById("angleLabel").innerHTML = "Angle: " + angle;
}

document
  .getElementById("velocity")
  .addEventListener("input", updateVelocityLabel); // Listen for velocity input changes
document.getElementById("angle").addEventListener("input", updateAngleLabel); // Listen for angle input changes

function getUserGuess() {
  // Called when the user submits their guess
  console.log(velocity);
  console.log(angle);
  projectileX = projectileRadius + 5;
  resetAllVariables();
  if (!isAnimating && !isLaunched && velocity > 0) {
    // Start the animation if not already in progress and the velocity is greater than 0
    cancelAnimationFrame(animationId);
    isAnimating = true;
    tries++;
    drawProjectile(projectileX);
  }
  justBegan = true;
}

function drawProjectile(x) {
  // Function to animate the projectile
  const angleInRadians = (angle * Math.PI) / 180;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  inertia += accelerationY; // Update the inertia based on acceleration due to gravity
  projectileY += inertia; // Update the Y-coordinate of the projectile
  ctx.beginPath();
  ctx.arc(x, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fillRect(barX - 100, barHeight, 100, 25); // Draw the bar
  const velocityX = velocity * speedScale * Math.cos(angleInRadians); // Calculate the X-component of velocity
  const velocityY = velocity * speedScale * Math.sin(angleInRadians); // Calculate the Y-component of velocity
  x += velocityX; // Update the X-coordinate of the projectile
  projectileY -= velocityY; // Update the Y-coordinate of the projectile based on the Y-component of velocity
  if (projectileY + projectileRadius >= canvas.height) {
    // Check if the projectile hits the ground
    projectileY = canvas.height - projectileRadius;
    inertia = 0;
    velocity = 0;
    isAnimating = false;
  }
  if (
    x + projectileRadius >= barX - 100 &&
    x - projectileRadius <= barX &&
    projectileY >= barHeight &&
    projectileY <= barHeight + 25
  ) {
    // Check if the projectile hits the bar
    won = true;
    document.getElementById("finishLine").innerHTML = "You Won! :)";
    gameOver = true;
    velocityX = 0;
    velocityY = 0;
  } else if (projectileY + projectileRadius == canvas.height) {
    // Check if the projectile hits the ground without hitting the bar
    document.getElementById("finishLine").innerHTML = "You Lost :(";
    gameOver = true;
    won = false;
  }
  justBegan = false;
  if (x + projectileRadius <= canvas.width && !gameOver) {
    // Continue the animation if the projectile is within the canvas and the game is not over
    animationId = requestAnimationFrame(() => drawProjectile(x));
  } else {
    if (!won) {
      document.getElementById("finishLine").innerHTML = "You Lost :(";
    }
    isAnimating = false;
    isLaunched = false;
    document.getElementById("tries").innerHTML = "Tries: " + tries;
  }
}