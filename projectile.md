<html>
<head>
  <title>Projectile Game</title>
  <style>
    #game {
      width: 500px;
      height: 300px;
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
    function calculateProjectile(initialVelocity, angle, targetHeight, targetDistance) {
      // Convert angle to radians
      const angleRadians = (angle * Math.PI) / 180;
      // Calculate time of flight
      const timeOfFlight = (2 * initialVelocity * Math.sin(angleRadians)) / 9.8;
      // Calculate horizontal distance
      const horizontalDistance = initialVelocity * Math.cos(angleRadians) * timeOfFlight;
      if (horizontalDistance === targetDistance) {
        // Projectile hits the target
        return 1;
      } else if (horizontalDistance < targetDistance) {
        // Projectile doesn't go far enough
        return 0;
      } else {
        // Projectile goes too far
        if (targetHeight > 0) {
          // Calculate vertical distance
          const verticalDistance =
            initialVelocity * Math.sin(angleRadians) * timeOfFlight -
            0.5 * 9.8 * Math.pow(timeOfFlight, 2);
          if (Math.abs(verticalDistance) <= targetHeight) {
            return 1;
          } else if (verticalDistance < targetHeight) {
            return 0;
          } else {
            return 2;
          }
        } else {
          return 2;
        }
      }
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
