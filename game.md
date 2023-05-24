<html>
<head>
  <title>Simple Game</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas" width="500" height="500"></canvas>

  <script>
    // Get the canvas element and its context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Set initial position of the square
    let squareX = 50;
    let squareY = 50;

    // Event listener for keyboard input
    document.addEventListener("keydown", moveSquare);

    // Function to handle keyboard input
    function moveSquare(e) {
      const stepSize = 10;

      // Move square based on arrow key pressed
      switch (e.keyCode) {
        case 37: // Left arrow
          squareX -= stepSize;
          break;
        case 38: // Up arrow
          squareY -= stepSize;
          break;
        case 39: // Right arrow
          squareX += stepSize;
          break;
        case 40: // Down arrow
          squareY += stepSize;
          break;
      }

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the square at its new position
      ctx.fillRect(squareX, squareY, 50, 50);
    }

    // Initial draw of the square
    ctx.fillRect(squareX, squareY, 50, 50);
  </script>
</body>
</html>
