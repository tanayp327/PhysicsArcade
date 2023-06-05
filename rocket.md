<html>
<head>
  <meta charset="UTF-8">
  <title>Rocket Launch Simulator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 36px;
      text-align: center;
    }
    #game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
    }
        #game-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    label {
      font-size: 20px;
      margin-right: 10px;
    }
    input {
      font-size: 20px;
      margin-bottom: 10px;
      padding: 5px;
    }
    button {
      font-size: 20px;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      margin-top: 10px;
    }
        button:hover {
      background-color: #3e8e41;
    }
    #result-container {
      display: none;
      text-align: center;
    }
    #canvas-container {
      margin-top: 20px;
    }
    #success-animation,
    #failure-animation {
      display: none;
      text-align: center;
    }
    .success,
    .failure {
      font-size: 24px;
    }
        @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes slideUp {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
</style>
</head>
<body>
  <h1>Rocket Launch Simulator</h1>
  <div id="game-container">
    <form id="game-form">
      <label for="thrust">Thrust:</label>
      <input type="number" id="thrust" name="thrust" required>
      <label for="drag">Drag:</label>
      <input type="number" id="drag" name="drag" required>
      <label for="time">Time:</label>
      <input type="number" id="time" name="time" required>
      <button type="submit">Launch Rocket</button>
    </form>
    <div id="result-container">
      <h2>Result:</h2>
      <p id="velocity"></p>
      <p id="altitude"></p>
      <div id="canvas-container">
        <canvas id="canvas" width="400" height="400"></canvas>
      </div>
      <div id="success-animation">
        <p class="success">Success! The rocket reached outer space.</p>
      </div>
      <div id="failure-animation">
        <p class="failure">Failure! The rocket did not reach outer space.</p>
        </div>
    </div>
  </div>

  <script>
    const form = document.getElementById('game-form');
    const resultContainer = document.getElementById('result-container');
    const velocityElement = document.getElementById('velocity');
    const altitudeElement = document.getElementById('altitude');
    const successAnimation = document.getElementById('success-animation');
    const failureAnimation = document.getElementById('failure-animation');
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const rocketImage = new Image();

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const thrust = parseFloat(document.getElementById('thrust').value);
      const drag = parseFloat(document.getElementById('drag').value);
      const time = parseFloat(document.getElementById('time').value);

        const data = {
        thrust: thrust,
        drag: drag,
        time: time
        };

      // Send a POST request to the Flask API
      fetch('https://ctrpe.duckdns.org/api/rocket/game', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
          // Update the game interface with the result
          velocityElement.textContent = `Velocity: ${result.velocity} m/s`;
          altitudeElement.textContent = `Altitude: ${result.altitude} m`;
          resultContainer.style.display = 'block';
        
        // Show success or failure animation based on the altitude
        if (result.altitude >= 100000) {
            successAnimation.style.display = 'block';
            successAnimation.style.animationName = 'fadeIn';
            successAnimation.style.opacity = 1;
            successAnimation.style.animationDuration = '2s';
            successAnimation.style.animationFillMode = 'forwards';
            successAnimation.style.animationTimingFunction = 'ease-in-out';
        } else {
            failureAnimation.style.display = 'block';
            failureAnimation.style.animationName = 'slideUp';
            failureAnimation.style.transform = 'translateY(0)';
            failureAnimation.style.opacity = 1;
            failureAnimation.style.animationDuration = '1.5s';
            failureAnimation.style.animationFillMode = 'forwards';
            failureAnimation.style.animationTimingFunction = 'ease-in-out';
        }

        // Animate the rocket
        rocketImage.onload = function() {
            animateRocket(380);
        };
        rocketImage.onerror = function() {
            console.error('Error loading image');
        };
          rocketImage.src = 'rocket.png';
        })
        .catch(error => console.error('Error:', error));
    });

    const rocketImage = new Image();
    rocketImage.src = 'rocket.png';

    document.addEventListener('DOMContentLoaded', function() {
      rocketImage.onload = function() {
        drawRocket(380);
      };
    });
    
    function drawRocket(yPos) {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(rocketImage, 180, yPos, 40, 80);
    }

    function animateRocket(yPos) {
      let frame = 0;

      function animateOneFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRocket(yPos);

        frame++;
        yPos -= 2;

        if (frame < 120) {
          window.requestAnimationFrame(animateOneFrame);
        } else {
          console.log("Animation completed");
        }
      }
      animateOneFrame();
    }
</script>
</body>
</html>