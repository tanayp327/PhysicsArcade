<html>
  <head>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <button onclick="randomGame()">Go to a Random Game</button>
    <script>
      let directories = ["wordproblems", "snake", "leaderboard", "projectile"];
      function randomGame() {
        newURL = "https://tanayp327.github.io/PhysicsArcade/" + directories[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
        window.location.href = newURL;
      }
    </script>
  </body>
</html>