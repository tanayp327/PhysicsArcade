<!DOCTYPE html>
<html>
  <head>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="400" height="400"></canvas>
    <script>
      window.onload = function() {
        // Get the canvas element and its context
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        // Set the initial position of the ball
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        // Set the initial velocity and acceleration
        var velocityY = 0;
        var accelerationY = 0.2; // Adjust this value to change gravity strength
        var velocityX = 0;
        var accelerationX = 0.2; // Adjust this value to change horizontal movement speed
        var radius = 20;
        // Add event listeners for keydown and keyup events
        var keys = {};
        document.addEventListener("keydown", function(event) {
          keys[event.key] = true;
        });
        document.addEventListener("keyup", function(event) {
          keys[event.key] = false;
        });
        function drawBall() {
          // Clear the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Update the ball's position and velocity
          velocityY += accelerationY;
          y += velocityY;
          // Check if the ball reaches or crosses the bottom of the canvas
          if (y + radius > canvas.height) {
            y = canvas.height - radius; // Set the position to the bottom of the canvas
            velocityY *= -1; // Reverse the vertical velocity (bounce)
          }
          // Move the ball left or right based on the key pressed
          if (keys['a']) {
            velocityX = -3; // Adjust this value to change the leftward movement speed
          } else if (keys['d']) {
            velocityX = 3; // Adjust this value to change the rightward movement speed
          } else {
            velocityX = 0;
          }
          x += velocityX;
          // Check if the ball collides with the left wall
          if (x - radius < 0) {
            x = radius; // Set the position to the left wall
            velocityX *= -1; // Reverse the horizontal velocity (bounce)
          }
          // Check if the ball collides with the right wall
          if (x + radius > canvas.width) {
            x = canvas.width - radius; // Set the position to the right wall
            velocityX *= -1; // Reverse the horizontal velocity (bounce)
          }
          // Draw the ball
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.closePath();
          // Call the drawBall function repeatedly
          requestAnimationFrame(drawBall);
        }
        // Start the animation
        drawBall();
      };
    </script>
  </body>
</html>
