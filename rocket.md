<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Retro Arcade Game</title>
    <style>
        body {
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: 'Press Start 2P', cursive;
        }
        .arcade-cabinet {
            background-color: #222;
            border: 8px solid #f00;
            padding: 20px;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
            text-align: center;
        }
        .game-screen {
            background-color: #000;
            width: 400px;
            height: 400px;
            border: 4px solid #0f0;
            margin-bottom: 20px;
        }
        .game-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .button {
            background-color: #0f0;
            color: #000;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        .button:hover {
            background-color: #00f;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="arcade-cabinet">
        <div class="game-screen">
            <!-- Game code will be added dynamically -->
        </div>
        <div class="game-controls">
            <button class="button start-button">Start</button>
            <button class="button reset-button">Reset</button>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var gameScreen = document.querySelector('.game-screen');
            var startButton = document.querySelector('.start-button');
            var resetButton = document.querySelector('.reset-button');
            startButton.addEventListener('click', function() {
                var velocity = Math.floor(Math.random() * 100) + 1;
                // Make a POST request to the API
                fetch('/api/rocket/rocket', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ velocity: velocity })
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    // Handle the API response
                    var result = data.result;
                    var resultMessage = document.createElement('p');
                    resultMessage.textContent = result;
                    resultMessage.style.color = '#0f0';
                    resultMessage.style.fontWeight = 'bold';
                    gameScreen.appendChild(resultMessage);
                })
                .catch(function(error) {
                    console.error(error);
                });
            });
            resetButton.addEventListener('click', function() {
                // Reset the game screen
                gameScreen.innerHTML = '';
            });
        });
    </script>
</body>
</html>
