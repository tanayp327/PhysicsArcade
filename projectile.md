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
      transition: transform 1s linear;
    }
    .target {
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
  <div>
    <label for="angle">Angle (degrees):</label>
    <input type="number" id="angle" min="0" max="90" value="45">
  </div>
  <div>
    <label for="velocity">Initial Velocity (m/s):</label>
    <input type="number" id="velocity" min="0" value="50">
  </div>
  <div id="game">
    <div id="projectile"></div>
    <div id="target" class="target"></div>
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

    function generateRandomTarget(gameWidth) {
      const targetElement = document.getElementById('target');
      const targetPosition = Math.floor(Math.random() * (gameWidth - targetElement.offsetWidth));
      targetElement.style.transform = `translateX(${targetPosition}px)`;
    }
    
    function updateGame() {
      const initialVelocity = parseFloat(document.getElementById('velocity').value);
      const angle = parseFloat(document.getElementById('angle').value);
      const targetHeight = 10;  // Height of the target above the ground in meters
      const gameElement = document.getElementById('game');
      const gameWidth = gameElement.offsetWidth;
      
      generateRandomTarget(gameWidth);
      
      const projectileElement = document.getElementById('projectile');
      const targetElement = document.getElementById('target');
      const targetDistance = targetElement.getBoundingClientRect().left - gameElement.getBoundingClientRect().left;
      
      const outcome = calculateProjectile(initialVelocity, angle, targetHeight, targetDistance);
      
      const projectileFinalPosition = (outcome === 1) ? targetDistance : gameWidth;
      const targetPosition = (outcome === 1) ? targetDistance : gameWidth - targetElement.offsetWidth;
      
      projectileElement.style.transform = `translateX(${projectileFinalPosition}px) translateY(-${targetHeight}px)`;
      targetElement.style.transform = `translateX(${targetPosition}px)`;
    }
    
    // Attach event listeners to input elements
    const angleInput = document.getElementById('angle');
    const velocityInput = document.getElementById('velocity');
    angleInput.addEventListener('input', updateGame);
    velocityInput.addEventListener('input', updateGame);
    
    // Game settings
    updateGame();
    
    // Animation - Generate a new random target every 3 seconds
    setInterval(() => {
      generateRandomTarget(gameElement.offsetWidth);
    }, 3000);
  </script>
</body>
</html>