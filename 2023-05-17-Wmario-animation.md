---
title: Better Python 2D Iteration and Animations
toc: true
categories: [week34, tri3]
image: /images/javascript.png
badges: true
comments: true
author: Raunak Mondal
description: Working with 2D elements and working with animations
---
<head>
    <title>Projectile Motion Simulation</title>
    <style>
      #canvas {
            border: 1px solid black;
            background-image: url('https://pymunk-tutorial.readthedocs.io/en/latest/_images/background.png');
            background-size: cover;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="800" height="400"></canvas>
    <div id="leaderboard" style="display: none;">
        <h2>Leaderboard</h2>
        <ol id="scores"></ol>
    </div>

    <script>
        // Get the canvas element and its context
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // Set the initial position and velocity of the projectile
        let x = 50;
        let y = canvas.height / 2;
        let velocityX = 5;
        let velocityY = 0;
        const gravity = 0.2;

        // Leaderboard variables
        let leaderboardVisible = false;
        const scores = [];

        // Keyboard event listeners
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 32) { // Space key
                velocityY = -7; // Adjust the vertical velocity to simulate a jump
            }
        });

        // Animation loop
        function draw() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update the position and velocity
            x += velocityX;
            y += velocityY;
            velocityY += gravity;

            // Draw the projectile
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();

            // Check for collision with the right edge of the canvas
            if (x > canvas.width - 10) {
                showLeaderboard();
            }

            // Check for collision with the ground
            if (y > canvas.height - 10) {
                y = canvas.height - 10;
                velocityY = 0;
            }

            // Request the next animation frame
            requestAnimationFrame(draw);
        }

        // Show the leaderboard
        function showLeaderboard() {
            if (!leaderboardVisible) {
                leaderboardVisible = true;
                document.getElementById('leaderboard').style.display = 'block';
                updateLeaderboard();
            }
        }

        // Update the leaderboard scores
        function updateLeaderboard() {
            const scoresList = document.getElementById('scores');
            scoresList.innerHTML = '';

            scores.push(Math.floor(Math.random() * 100)); // Add a random score for demonstration

            scores.sort((a, b) => b - a); // Sort scores in descending order

            for (let i = 0; i < scores.length; i++) {
                const scoreItem = document.createElement('li');
                scoreItem.innerText = scores[i];
                scoresList.appendChild(scoreItem);
            }
        }

        // Start the animation loop
        draw();
    </script>
</body>


