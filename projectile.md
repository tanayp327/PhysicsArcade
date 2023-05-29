<!DOCTYPE html>
<html>
<head>
  <title>Projectile Game</title>
  <style>
    canvas {
      border: 1px solid black;
      position: relative;
    }
    #projectile {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      bottom: 0;
    }
    #target {
      width: 20px;
      height: 20px;
      background-color: green;
      position: absolute;
      bottom: 0;
    }
  </style>
</head>
<body>
  <h1>Projectile Game</h1>
  <div id="game">
    <div id="projectile"></div>
    <div id="target"></div>
  </div>
  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const gravity = 9.8;  // Acceleration due to gravity in meters per second squared

    const targetHeight = 50;  // Height of the target above the ground in pixels
    const targetDistance = 400;  // Horizontal distance to the target in pixels

    let projectile = null;

    function Projectile(initialVelocity, angle) {
      this.initialVelocity = initialVelocity;
      this.angle = angle;
      this.launchAngleRadians = (angle * Math.PI) / 180;
      this.initialHorizontalVelocity = initialVelocity * Math.cos(this.launchAngleRadians);
      this.initialVerticalVelocity = initialVelocity * Math.sin(this.launchAngleRadians);
      this.x = 0;
      this.y = canvas.height;
      this.isLaunched = false;
    }

    Projectile.prototype.launch = function() {
      this.isLaunched = true;
    };

    Projectile.prototype.update = function() {
      if (!this.isLaunched) return;

      const time = (this.x * 2) / this.initialHorizontalVelocity;
      const horizontalDistance = this.initialHorizontalVelocity * time;
      const verticalDistance = (this.initialVerticalVelocity * time) - (0.5 * gravity * time * time);
      this.x = horizontalDistance;
      this.y = canvas.height - verticalDistance;

      if (this.x <= targetDistance && this.y >= canvas.height - targetHeight) {
        // Projectile hits the target
        this.isLaunched = false;
      }
    };

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (projectile) {
        ctx.beginPath();
        ctx.arc(projectile.x, projectile.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
      }

      ctx.fillStyle = "green";
      ctx.fillRect(targetDistance, canvas.height - targetHeight, 20, 20);

      requestAnimationFrame(draw);
    }
    // Game settings
    const initialVelocity = 50;  // Initial velocity in meters per second
    const angle = 45;  // Launch angle in degrees
    const targetHeight = 10;  // Height of the target above the ground in meters
    const targetDistance = 150;  // Horizontal distance to the target in meters
    // Calculate the outcome
    const outcome = calculateProjectile(initialVelocity, angle, targetHeight, targetDistance);
    // Move the projectile and target based on the outcome
    const projectileElement = document.getElementById('projectile');
    const targetElement = document.getElementById('target');
    const gameElement = document.getElementById('game');
    const gameWidth = gameElement.offsetWidth;
    const projectileFinalPosition = (outcome === 1) ? targetDistance : gameWidth;
    const targetPosition = (outcome === 1) ? targetDistance : gameWidth - targetElement.offsetWidth;
    projectileElement.style.transform = `translateX(${projectileFinalPosition}px)`;
    targetElement.style.transform = `translateX(${targetPosition}px)`;
  </script>
</body>
</html>
