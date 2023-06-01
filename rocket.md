<html>
<head>
    <title>Rocket Launch Simulator</title>
    <style>
        /* Add CSS styles for the game interface */
    </style>
</head>
<body>
    <h1>Rocket Launch Simulator</h1>
    <div id="game-container">
        <form id="game-form">
            <label for="thrust">Thrust:</label>
            <input type="number" id="thrust" name="thrust" required><br>

            <label for="drag">Drag:</label>
            <input type="number" id="drag" name="drag" required><br>

            <label for="time">Time:</label>
            <input type="number" id="time" name="time" required><br>

            <button type="submit">Launch Rocket</button>
        </form>

        <div id="result-container" style="display: none;">
            <h2>Result:</h2>
            <p id="velocity"></p>
            <p id="altitude"></p>
        </div>
    </div>
    <script>
        // Add JavaScript code for interacting with the Flask API
        const form = document.getElementById('game-form');
        const resultContainer = document.getElementById('result-container');
        const velocityElement = document.getElementById('velocity');
        const altitudeElement = document.getElementById('altitude');

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
            fetch('/game', {
                method: 'POST',
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
            })
            .catch(error => console.error('Error:', error));
        });
    </script>
</body>
</html>
