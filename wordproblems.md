<html>
    <head>
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/projectilemotion.css">
    </head>
    <body>
        <h2>Projectile Motion Problems!</h2>
        <h3>by Paaras Purohit</h3>
        <h4>Directions: Try to get the ball to collide or overlap the bar</h4>
        <br>
        <p id="velocityLabel">Velocity: 10</p>
        <input type="range" id="velocity" min="0" max="100" value="10">
        <br><br>
        <button onclick="getUserGuess()">Predict The Motion</button>
        <br><br>
        <canvas width="650px" height="250px" id="canvas1"></canvas>
        <p id="finishLine"></p>
        <br>
    </body>
    <script src="assets/js/projectilemotion.js"></script>
</html>
