/*
// Define the variables.

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let velocity = 10;
let angle = 45;
let inertia = 0;
let accelerationY = 9.8;

let projectileRadius = 10;
let projectileX = 0;
let projectileY = canvas.height - projectileRadius;

let speedScale = 0.5;
let angleScale = 0.1;

let randomHeight = Math.random() * (200 - 50) + 50;
let barHeight = 0;

const tolerance = 5;

let points = 0;

let won = false;

window.onload = function () {
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
  updateAngleLabel();
  inertia = 0;
  accelerationY = 0.2;

  projectileRadius = 10;
  projectileX = projectileRadius + 5;
  projectileY = canvas.height - projectileRadius;

  speedScale = 0.5;
  angleScale = 0.1;
  barHeight = randomHeight;
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
  drawProjectile(projectileX);
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

  barHeight = randomHeight;

  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width - 100, barHeight, 100, 25);

  const velocityX = velocity * speedScale * Math.cos(angleInRadians);
  const velocityY = velocity * speedScale * Math.sin(angleInRadians);

  x += velocityX;
  projectileY -= velocityY;

  if (projectileY + projectileRadius >= canvas.height) {
    projectileY = canvas.height - projectileRadius;
    inertia = 0;
    velocity = 0;

    if (
      Math.abs(x + projectileRadius - (canvas.width - 100)) < tolerance &&
      Math.abs(projectileY + projectileRadius - barHeight) < tolerance
    ) {
      won = true;
      document.getElementById("finishLine").innerHTML = "You Won! :)";
      points += 1;
    } else {
      document.getElementById("finishLine").innerHTML = "You Lost :(";
      won = false; // Set won to false to handle cases when the ball leaves the canvas
    }
  }

  if (x + projectileRadius <= canvas.width) {
    requestAnimationFrame(() => drawProjectile(x));
  } else {
    if (!won) {
      document.getElementById("finishLine").innerHTML = "You Lost :(";
    }
  }
}

*/
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let velocity = 10;
let angle = 45;
let inertia = 0;
let accelerationY = 9.8;

let projectileRadius = 10;
let projectileX = 0;
let projectileY = canvas.height - projectileRadius;

let speedScale = 0.5;
let angleScale = 0.1;

let randomHeight = Math.random() * (200 - 50) + 50;
let barHeight = randomHeight;

const tolerance = 5;

let points = 0;
let won = false;

window.onload = function () {
  ctx.beginPath();
  ctx.arc(projectileX, projectileY, projectileRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width - 100, barHeight, 100, 25);
};

function resetAllVariables() {
  updateVelocityLabel();
  updateAngleLabel();
  inertia = 0;
  accelerationY = 0.2;

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
  drawProjectile(projectileX);
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
  ctx.fillRect(canvas.width - 100, barHeight, 100, 25);

  const velocityX = velocity * speedScale * Math.cos(angleInRadians);
  const velocityY = velocity * speedScale * Math.sin(angleInRadians);

  x += velocityX;
  projectileY -= velocityY;

  if (projectileY + projectileRadius >= canvas.height) {
    projectileY = canvas.height - projectileRadius;
    inertia = 0;
    velocity = 0;

    if (
      x + projectileRadius >= canvas.width - 100 /*&&
      projectileY + projectileRadius >= barHeight &&
      projectileY - projectileRadius <= barHeight + 25*/
    ) {
      won = true;
      document.getElementById("finishLine").innerHTML = "You Won! :)";
      points += 1;
    } else {
      document.getElementById("finishLine").innerHTML = "You Lost :(";
      won = false;
    }
  }

  if (x + projectileRadius <= canvas.width) {
    requestAnimationFrame(() => drawProjectile(x));
  } else {
    if (!won) {
      document.getElementById("finishLine").innerHTML = "You Lost :(";
    }
  }
}