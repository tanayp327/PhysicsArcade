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

        #success-animation,
        #failure-animation {
            display: none;
        }

        #success-animation img,
        #failure-animation img {
            width: 100%;
            max-width: 200px;
            margin-top: 20px;
        }

        .success {
            color: #008000;
            font-weight: bold;
        }

        .failure {
            color: #ff0000;
            font-weight: bold;
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
            <div id="success-animation">
                <p class="success">Success! The rocket reached outer space.</p>
                <img src="success.gif" alt="Success Animation">
            </div>
            <div id="failure-animation">
                <p class="failure">Failure! The rocket did not reach outer space.</p>
                <img src="failure.gif" alt="Failure Animation">
            </div>
        </div>
    </div>

    <script>
        // Add JavaScript code for interacting with the Flask API
        const form = document.getElementById('game-form');
        const resultContainer = document.getElementById('result-container');
        const velocityElement = document.getElementById('velocity');
        const altitudeElement = document.getElementById('altitude');
        const successAnimation = document.getElementById('success-animation');
        const failureAnimation = document.getElementById('failure-animation');

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
            fetch('https://127.0.0.1:8086/api/rocket/game/', {
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
                } else {
                    failureAnimation.style.display = 'block';
                }
            })
            .catch(error => console.error('Error:', error));
        });
    </script>
</body>
</html>