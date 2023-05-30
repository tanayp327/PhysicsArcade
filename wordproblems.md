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

# A Little About Projectile Motion
# ------------------------------

Projectile motion refers to the motion of an object that is launched into the air and moves along a curved path under the influence of gravity. It is a fundamental concept in physics and is applicable to various real-world scenarios, such as the trajectory of a thrown ball, a bullet fired from a gun, or even the flight path of a rocket. In projectile motion, the object follows a parabolic trajectory, which means its path forms a curved shape resembling a symmetric "U" or an inverted "U." This curved path occurs due to the combined effect of the initial velocity given to the object and the force of gravity acting upon it.

One important characteristic of projectile motion is that the horizontal and vertical motions are independent of each other. The horizontal component of motion remains constant unless influenced by external factors, such as air resistance or wind. On the other hand, the vertical component is influenced by gravity, resulting in an upward and then downward motion. During projectile motion, the object experiences two main forces: the initial launch force (such as throwing or propelling force) and the force of gravity. The launch force determines the initial velocity, while gravity acts vertically downward, influencing the object's vertical motion.

The key parameters in projectile motion include the initial velocity, launch angle, time of flight, maximum height, range, and velocity components in the horizontal and vertical directions. These parameters help describe and analyze the motion of the projectile. The time of flight is the total duration for which the projectile remains in the air. It is determined by the initial velocity and launch angle. The maximum height reached by the projectile depends on these factors as well and occurs at the halfway point of the time of flight.