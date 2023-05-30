<html>
    <head>
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/projectilemotion.css">
    </head>
    <body>
        <h2>Projectile Motion Problems!</h2>
        <h3>Directions: Try to get the ball to collide or overlap the bar</h3>
        <label for="velocity">Velocity</label>
        <br>
        <input type="range" id="velocity" min="0" max="100" value="10"><p id="velocityLabel">Velocity: 10</p>
        <label for="angle">Angle (90° is straight up)</label>
        <br>
        <input type="range" id="angle" min="0" max="90" value="45"><p id="angleLabel">Angle: 45</p>
        <button onclick="getUserGuess()">Predict The Motion</button>
        <br><br>
        <canvas width="650px" height="250px" id="canvas1"></canvas>
        <p id="finishLine"></p>
    </body>
    <script src="assets/js/projectilemotion.js"></script>
</html>