<html>
<head>
<title>Rocket Launch Simulator</title>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
            text-align: center;
        }

        h1 {
            color: #333;
            margin-top: 40px;
        }

        #game-container {
            max-width: 400px; 
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        form {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input[type="number"] {
            width: 100%;
            padding: 5px;
            border-radius: 3px;
            border: 1px solid #ccc;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        #result-container {
            margin-top: 20px;
            display: none;
        }

        #canvas {
            margin-top: 20px;
            border: 1px solid #ccc;
        }

        #success-animation,
        #failure-animation {
            display: none;
            margin-top: 20px;
            opacity: 0;
        }

        .success {
            color: #008000;
            font-weight: bold;
        }

        .failure {
            color: #ff0000;
            font-weight: bold;
        }

        canvas {
            background-color: gray;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
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
                animateRocket(380);
            })
            .catch(error => console.error('Error:', error));
        });

    function drawRocket(yPos) {
      ctx.drawImage(rocketImage, 180, yPos, 40, 80);
    }

    function animateRocket(yPos) {
      let frame = 0;
      rocketImage.onload = function() {
        function animateOneFrame() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(rocketImage, 180, yPos, 40, 80);

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
    }

    drawRocket(380);
</script>
</body>
</html>