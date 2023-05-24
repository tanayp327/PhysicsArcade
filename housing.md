<!DOCTYPE html>
<html>
<head>
  <title>Red Ball on White Background</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas"></canvas>

<script>
  window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 400;

    const ballRadius = 50;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;

    // Arrow keys state
    const arrowKeys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };

    // Event listeners for keydown and keyup events
    document.addEventListener('keydown', (event) => {
      if (event.key in arrowKeys) {
        arrowKeys[event.key] = true;
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key in arrowKeys) {
        arrowKeys[event.key] = false;
      }
    });

    // Function to update ball position
    function updateBallPosition() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate new position based on arrow keys
      if (arrowKeys.ArrowUp) {
        ballY -= 5;
      }
      if (arrowKeys.ArrowDown) {
        ballY += 5;
      }
      if (arrowKeys.ArrowLeft) {
        ballX -= 5;
      }
      if (arrowKeys.ArrowRight) {
        ballX += 5;
      }

      // Draw the ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();

      // Request next animation frame
      requestAnimationFrame(updateBallPosition);
    }

    // Start the animation
    updateBallPosition();
  });
</script>
</body>
</html>