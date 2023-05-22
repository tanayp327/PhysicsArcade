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
            <!-- Add game code here -->
        </div>
        <div class="game-controls">
            <button class="button">Start</button>
            <button class="button">Reset</button>
        </div>
    </div>
</body>
</html>
