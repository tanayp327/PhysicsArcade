<!DOCTYPE html>
<html>
<head>
  <title>Projectile Game</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <h1>Projectile Game</h1>
  <canvas id="gameCanvas" width="500" height="300"></canvas>

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

    canvas.addEventListener("click", function(event) {
      if (!projectile || !projectile.isLaunched) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const angle = Math.atan2(canvas.height - mouseY, mouseX) * (180 / Math.PI);
        const initialVelocity = Math.sqrt((mouseX * mouseX) + ((canvas.height - mouseY) * (canvas.height - mouseY)));

        projectile = new Projectile(initialVelocity, angle);
        projectile.launch();
      }
    });

    draw();
  </script>
</body>
</html>
