<<<<<<< HEAD
Lu_Berry
Lu_Berry#0342
Blubba, Mylk

Blubba
 added 
Mylk
 to the group.
 — Today at 9:03 PM
Blubba
 started a call.
 — Today at 9:03 PM
Mylk — Today at 9:07 PM
601970187
Blubba — Today at 9:38 PM
=======
>>>>>>> e54e015c48d8f3cf2652965399837d6c52a04486
<html>
<head>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    h1 {
      text-align: center;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Leader Board</h1>
</body>
</html>

<head>
  <title>Leaderboard</title>
  <link rel="stylesheet" href="leaderboard.css">
</head>

<body>
  <table id="leaderboard">
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Score</th>
      <th>Action</th>
    </tr>
  </table>
  
  <form id="addForm">
    <label for="nameInput">Name:</label>
    <input type="text" id="nameInput" required>
    <label for="scoreInput">Score:</label>
    <input type="number" id="scoreInput" required>
    <button type="submit">Add to Leaderboard</button>
  </form>
  
  <script>
    // Function to fetch leaderboard data from the server
    function fetchLeaderboardData() {
<<<<<<< HEAD
      fetch('https://ctrpe.duckdns.org/api/leaderboard')
=======
      fetch('https://ctrpe.duckdns.org/leaderboard')
>>>>>>> e54e015c48d8f3cf2652965399837d6c52a04486
        .then(response => response.json())
        .then(data => {
          leaderboardData = data;
          generateLeaderboard();
        })
        .catch(error => console.error('Error:', error));
    }

    // Function to update the server with the modified leaderboard data
    function updateLeaderboardData() {
<<<<<<< HEAD
      fetch('https://ctrpe.duckdns.org/api/leaderboard', {
=======
      fetch('https://ctrpe.duckdns.org/leaderboard', {
>>>>>>> e54e015c48d8f3cf2652965399837d6c52a04486
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leaderboardData)
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    }

    // Define an empty array to hold the leaderboard data
    var leaderboardData = [];

    // Function to generate the leaderboard table based on the data
    function generateLeaderboard() {
      // Get the leaderboard table element from the HTML
      var leaderboardTable = document.getElementById("leaderboard");
      // Remove all rows from the table except the header
      while (leaderboardTable.rows.length > 1) {
        leaderboardTable.deleteRow(1);
      }
      // Iterate over the leaderboard data and create rows for each entry
      leaderboardData.forEach(function(entry) {
        // Create a new row in the table
        var row = leaderboardTable.insertRow();
        // Create cells for rank, name, score, and action
        var rankCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var scoreCell = row.insertCell(2);
        var actionCell = row.insertCell(3);
        // Set the content of each cell to the corresponding data in the entry
        rankCell.textContent = entry.rank;
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
<<<<<<< HEAD
        // Create an update button and attach a click event listener to call the updateEntry function
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", function() {
          // Call updateEntry function with the rank of the entry to be updated
          updateEntry(entry.rank);
... (260 lines left)
Collapse
message.txt
14 KB
﻿
<html>
<head>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    h1 {
      text-align: center;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Leader Board</h1>
</body>
</html>

<head>
  <title>Leaderboard</title>
  <link rel="stylesheet" href="leaderboard.css">
</head>

<body>
  <table id="leaderboard">
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Score</th>
      <th>Action</th>
    </tr>
  </table>
  
  <form id="addForm">
    <label for="nameInput">Name:</label>
    <input type="text" id="nameInput" required>
    <label for="scoreInput">Score:</label>
    <input type="number" id="scoreInput" required>
    <button type="submit">Add to Leaderboard</button>
  </form>
  
  <script>
    // Function to fetch leaderboard data from the server
    function fetchLeaderboardData() {
      fetch('https://ctrpe.duckdns.org/api/leaderboard')
        .then(response => response.json())
        .then(data => {
          leaderboardData = data;
          generateLeaderboard();
        })
        .catch(error => console.error('Error:', error));
    }

    // Function to update the server with the modified leaderboard data
    function updateLeaderboardData() {
      fetch('https://ctrpe.duckdns.org/api/leaderboard', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leaderboardData)
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    }

    // Define an empty array to hold the leaderboard data
    var leaderboardData = [];

    // Function to generate the leaderboard table based on the data
    function generateLeaderboard() {
      // Get the leaderboard table element from the HTML
      var leaderboardTable = document.getElementById("leaderboard");
      // Remove all rows from the table except the header
      while (leaderboardTable.rows.length > 1) {
        leaderboardTable.deleteRow(1);
      }
      // Iterate over the leaderboard data and create rows for each entry
      leaderboardData.forEach(function(entry) {
        // Create a new row in the table
        var row = leaderboardTable.insertRow();
        // Create cells for rank, name, score, and action
        var rankCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var scoreCell = row.insertCell(2);
        var actionCell = row.insertCell(3);
        // Set the content of each cell to the corresponding data in the entry
        rankCell.textContent = entry.rank;
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
=======
>>>>>>> e54e015c48d8f3cf2652965399837d6c52a04486
        // Create an update button and attach a click event listener to call the updateEntry function
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", function() {
          // Call updateEntry function with the rank of the entry to be updated
          updateEntry(entry.rank);
        });
        actionCell.appendChild(updateButton);
        // Create a delete button and attach a click event listener to call the deleteEntry function
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          deleteEntry(entry.rank);
        });
        actionCell.appendChild(deleteButton);
      });
    }

    // Function to delete an entry from the leaderboard based on its rank
    function deleteEntry(rank) {
      // Find the index of the entry with the given rank in the leaderboard data
      var index = leaderboardData.findIndex(function(entry) {
        return entry.rank === rank;
      });
      // If the entry is found, remove it from the leaderboard data, update ranks, regenerate the leaderboard, and update the server
      if (index !== -1) {
        leaderboardData.splice(index, 1);
        updateRanks();
        generateLeaderboard();
        updateLeaderboardData();
      }
    }

    // Function to update an entry in the leaderboard based on its rank
    function updateEntry(rank) {
      // Find the index of the entry with the given rank in the leaderboard data
      var index = leaderboardData.findIndex(function(entry) {
        return entry.rank === rank;
      });
      // If the entry is found, prompt the user for the updated score and update the entry
      if (index !== -1) {
        var updatedScore = prompt("Enter the updated score for " + leaderboardData[index].name + ":");
        if (updatedScore !== null && !isNaN(updatedScore)) {
          leaderboardData[index].score = parseInt(updatedScore);
          leaderboardData.sort(function(a, b) {
            return a.score - b.score;
          });
          updateRanks();
          generateLeaderboard();
          updateLeaderboardData();
        }
      }
    }

    // Function to update the ranks of all entries in the leaderboard
    function updateRanks() {
      leaderboardData.forEach(function(entry, index) {
        entry.rank = index + 1;
      });
    }

    // Function to add a new entry to the leaderboard based on user input
    function addToLeaderboard() {
      // Get the name and score inputs from the HTML
      var nameInput = document.getElementById("nameInput").value;
      var scoreInput = document.getElementById("scoreInput").value;
      // Create a new entry object with rank 0, name from the input, and score from the input
      var newEntry = {
        rank: 0,
        name: nameInput,
        score: parseInt(scoreInput)
      };
      // Add the new entry to the leaderboard data, update ranks, regenerate the leaderboard, and update the server
      leaderboardData.push(newEntry);
      leaderboardData.sort(function(a, b) {
        return a.score - b.score;
      });
      updateRanks();
      generateLeaderboard();
      updateLeaderboardData();
      // Reset the input fields
      document.getElementById("nameInput").value = "";
      document.getElementById("scoreInput").value = "";
    }

    // Get the add form element from the HTML
    var addForm = document.getElementById("addForm");
    // Attach a submit event listener to the form to call the addToLeaderboard function
    addForm.addEventListener("submit", function(event) {
      event.preventDefault();
      addToLeaderboard();
    });

    // Fetch leaderboard data when the page loads
    fetchLeaderboardData();
  </script>
</body>



<!-- <html>
<head>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    h1 {
      text-align: center;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Leader Board</h1>
</body>
</html>
<head>
  <title>Leaderboard</title>
  <link rel="stylesheet" href="leaderboard.css">
</head>
<body>
  <table id="leaderboard">
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Score</th>
      <th>Action</th>
    </tr>
  </table>
  <form id="addForm">
    <label for="nameInput">Name:</label>
    <input type="text" id="nameInput" required>
    <label for="scoreInput">Score:</label>
    <input type="number" id="scoreInput" required>
    <button type="submit">Add to Leaderboard</button>
  </form>
  <script>
    // Define an array of leaderboard data containing objects representing players and their scores
    var leaderboardData = [
      { rank: 1, name: "Chinmay", score: 100 },
      { rank: 2, name: "Raunak", score: 90 },
      { rank: 3, name: "Paaras", score: 80 },
      { rank: 4, name: "Ederick", score: 70 },
      { rank: 5, name: "Tannay", score: 60 },
      { rank: 6, name: "Qais", score: 50 }
    ];
    // Function to generate the leaderboard table based on the data
    function generateLeaderboard() {
      // Get the leaderboard table element from the HTML
      var leaderboardTable = document.getElementById("leaderboard");
      // Remove all rows from the table except the header
      while (leaderboardTable.rows.length > 1) {
        leaderboardTable.deleteRow(1);
      }
      // Iterate over the leaderboard data and create rows for each entry
      leaderboardData.forEach(function(entry) {
        // Create a new row in the table
        var row = leaderboardTable.insertRow();
        // Create cells for rank, name, score, and action
        var rankCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var scoreCell = row.insertCell(2);
        var actionCell = row.insertCell(3);
        // Set the content of each cell to the corresponding data in the entry
        rankCell.textContent = entry.rank;
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
        // Create an update button and attach a click event listener to call the updateEntry function
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", function() {
          // Call updateEntry function with the rank of the entry to be updated
          updateEntry(entry.rank);
        });
        actionCell.appendChild(updateButton);
        // Create a delete button and attach a click event listener to call the deleteEntry function
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          deleteEntry(entry.rank);
        });
        actionCell.appendChild(deleteButton);
      });
    }
    // Function to delete an entry from the leaderboard based on its rank
    function deleteEntry(rank) {
      // Find the index of the entry with the given rank in the leaderboard data
      var index = leaderboardData.findIndex(function(entry) {
        return entry.rank === rank;
      });
      // If the entry is found, remove it from the leaderboard data, update ranks, and regenerate the leaderboard
      if (index !== -1) {
        leaderboardData.splice(index, 1);
        updateRanks();
        generateLeaderboard();
      }
    }
    // Function to update an entry in the leaderboard based on its rank
    function updateEntry(rank) {
      // Find the index of the entry with the given rank in the leaderboard data
      var index = leaderboardData.findIndex(function(entry) {
        return entry.rank === rank;
      });
      // If the entry is found, prompt the user for the updated score and update the entry
      if (index !== -1) {
        var updatedScore = prompt("Enter the updated score for " + leaderboardData[index].name + ":");
        if (updatedScore !== null && !isNaN(updatedScore)) {
          leaderboardData[index].score = parseInt(updatedScore);
          leaderboardData.sort(function(a, b) {
            return a.score - b.score;
          });
          updateRanks();
          generateLeaderboard();
        }
      }
    }
    // Function to update the ranks of all entries in the leaderboard
    function updateRanks() {
      leaderboardData.forEach(function(entry, index) {
        entry.rank = index + 1;
      });
    }
    // Function to add a new entry to the leaderboard based on user input
    function addToLeaderboard() {
      // Get the name and score inputs from the HTML
      var nameInput = document.getElementById("nameInput").value;
      var scoreInput = document.getElementById("scoreInput").value;
      // Create a new entry object with rank 0, name from the input, and score from the input
      var newEntry = {
        rank: 0,
        name: nameInput,
        score: parseInt(scoreInput)
      };
      // Add the new entry to the leaderboard data, update ranks, and regenerate the leaderboard
      leaderboardData.push(newEntry);
      leaderboardData.sort(function(a, b) {
        return a.score - b.score;
      });
      updateRanks();
      generateLeaderboard();
      // Reset the input fields
      document.getElementById("nameInput").value = "";
      document.getElementById("scoreInput").value = "";
    }
    // Get the add form element from the HTML
    var addForm = document.getElementById("addForm");
    // Attach a submit event listener to the form to call the addToLeaderboard function
    addForm.addEventListener("submit", function(event) {
      event.preventDefault();
      addToLeaderboard();
    });
    // Generate the leaderboard when the page loads
    generateLeaderboard();
  </script>
</body>
 -->
<<<<<<< HEAD

<head>
  <title>Leaderboard</title>
  <link rel="stylesheet" href="leaderboard.css">
  <!--Fonts-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<!--Icons-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
<body>
  <h1>Leader Board</h1>
  <table id="leaderboard">
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Score</th>
      <th>Action</th>
    </tr>
  </table>

  <form id="addForm">
    <label for="nameInput">Name:</label>
    <input type="text" id="nameInput" required>
    <label for="scoreInput">Score:</label>
    <input type="number" id="scoreInput" required>
    <button type="submit"><span class="material-symbols-outlined">add</span></button>
  </form>
  <script>
    // Define an array of leaderboard data containing objects representing players and their scores
    var leaderboardData = [
      { rank: 1, name: "Chinmay", score: 100 },
      { rank: 2, name: "Raunak", score: 90 },
      { rank: 3, name: "Paaras", score: 80 },
      { rank: 4, name: "Ederick", score: 70 },
      { rank: 5, name: "Tannay", score: 60 },
      { rank: 6, name: "Qais", score: 50 }
    ];
    // Function to generate the leaderboard table based on the data
    function generateLeaderboard() {
      // Get the leaderboard table element from the HTML
      var leaderboardTable = document.getElementById("leaderboard");
      // Remove all rows from the table except the header
      while (leaderboardTable.rows.length > 1) {
        leaderboardTable.deleteRow(1);
      }
      // Iterate over the leaderboard data and create rows for each entry
      leaderboardData.forEach(function(entry) {
        // Create a new row in the table
        var row = leaderboardTable.insertRow();
        // Create cells for rank, name, score, and action
        var rankCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var scoreCell = row.insertCell(2);
        var actionCell = row.insertCell(3);
        // Set the content of each cell to the corresponding data in the entry
        rankCell.textContent = entry.rank;
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
        // Create an update button and attach a click event listener to call the updateEntry function
        var updateButton = document.createElement("button");
        updateButton.textContent = "+";
        updateButton.addEventListener("click", function() {
          // Call updateEntry function with the rank of the entry to be updated
          updateEntry(entry.rank);
        });
        actionCell.appendChild(updateButton);
        // Create a delete button and attach a click event listener to call the deleteEntry function
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "-";
        deleteButton.addEventListener("click", function() {
          deleteEntry(entry.rank);
        });
        actionCell.appendChild(deleteButton);
      });
    }
    // Function to delete an entry from the leaderboard based on its rank
    function deleteEntry(rank) {
      // Find the index of the entry with the given rank in the leaderboard data
      var index = leaderboardData.findIndex(function(entry) {
        return entry.rank === rank;
      });
      // If the entry is found, remove it from the leaderboard data, update ranks, and regenerate the leaderboard
      if (index !== -1) {
        leaderboardData.splice(index, 1);
        updateRanks();
        generateLeaderboard();
      }
    }
    // Function to update an entry in the leaderboard based on its rank
    function updateEntry(rank) {
      // Find the index of the entry with the given rank in the leaderboard data
      var index = leaderboardData.findIndex(function(entry) {
        return entry.rank === rank;
      });
      // If the entry is found, prompt the user for the updated score and update the entry
      if (index !== -1) {
        var updatedScore = prompt("Enter the updated score for " + leaderboardData[index].name + ":");
        if (updatedScore !== null && !isNaN(updatedScore)) {
          leaderboardData[index].score = parseInt(updatedScore);
          leaderboardData.sort(function(a, b) {
            return a.score - b.score;
          });
          updateRanks();
          generateLeaderboard();
        }
      }
    }
    // Function to update the ranks of all entries in the leaderboard
    function updateRanks() {
      leaderboardData.forEach(function(entry, index) {
        entry.rank = index + 1;
      });
    }
    // Function to add a new entry to the leaderboard based on user input
    function addToLeaderboard() {
      // Get the name and score inputs from the HTML
      var nameInput = document.getElementById("nameInput").value;
      var scoreInput = document.getElementById("scoreInput").value;
      // Create a new entry object with rank 0, name from the input, and score from the input
      var newEntry = {
        rank: 0,
        name: nameInput,
        score: parseInt(scoreInput)
      };
      // Add the new entry to the leaderboard data, update ranks, and regenerate the leaderboard
      leaderboardData.push(newEntry);
      leaderboardData.sort(function(a, b) {
        return a.score - b.score;
      });
      updateRanks();
      generateLeaderboard();
      // Reset the input fields
      document.getElementById("nameInput").value = "";
      document.getElementById("scoreInput").value = "";
    }
    // Get the add form element from the HTML
    var addForm = document.getElementById("addForm");
    // Attach a submit event listener to the form to call the addToLeaderboard function
    addForm.addEventListener("submit", function(event) {
      event.preventDefault();
      addToLeaderboard();
    });
    // Generate the leaderboard when the page loads
    generateLeaderboard();
  </script>
</body>

=======
>>>>>>> e54e015c48d8f3cf2652965399837d6c52a04486





