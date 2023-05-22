<html>
<head>
  <title>Leaderboard</title>
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
 var leaderboardData = [
  { rank: 1, name: "Chinmay", score: 100 },
  { rank: 2, name: "Raunak", score: 90 },
  { rank: 3, name: "Paaras", score: 80 },
  { rank: 4, name: "Ederick", score: 70 },
  { rank: 5, name: "Tannay", score: 60 },
  { rank: 6, name: "Qais", score: 50 }
];

function generateLeaderboard() {
  // Get the reference to the leaderboard table
  var leaderboardTable = document.getElementById("leaderboard");

  // Clear the existing table (except the header row)
  while (leaderboardTable.rows.length > 1) {
    leaderboardTable.deleteRow(1);
  }

  // Iterate over the leaderboardData array
  leaderboardData.forEach(function(entry) {
    // Create a new row for each entry
    var row = leaderboardTable.insertRow();

    // Insert cells for rank, name, score, and action
    var rankCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var scoreCell = row.insertCell(2);
    var actionCell = row.insertCell(3);

    // Set the content of the cells using entry properties
    rankCell.textContent = entry.rank;
    nameCell.textContent = entry.name;
    scoreCell.textContent = entry.score;

    // Add delete button to each row
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Amongus";
    deleteButton.addEventListener("click", function() {
      // Call deleteEntry function with the rank of the entry to be deleted
      deleteEntry(entry.rank);
    });
    actionCell.appendChild(deleteButton);
  });
}

function deleteEntry(rank) {
  // Find the index of the entry with the specified rank
  var index = leaderboardData.findIndex(function(entry) {
    return entry.rank === rank;
  });

  // If the entry is found
  if (index !== -1) {
    // Remove the entry from the leaderboardData array
    leaderboardData.splice(index, 1);

    // Update the ranks of the remaining entries
    leaderboardData.forEach(function(entry, index) {
      entry.rank = index + 1;
    });

    // Regenerate the leaderboard table
    generateLeaderboard();
  }
}

function addToLeaderboard() {
  // Get the input values from the form
  var nameInput = document.getElementById("nameInput").value;
  var scoreInput = document.getElementById("scoreInput").value;

  // Create a new entry object with the input values
  var newEntry = {
    rank: 0, // The rank will be updated later
    name: nameInput,
    score: parseInt(scoreInput) // Convert scoreInput to an integer
  };

  // Add the new entry to the leaderboardData array
  leaderboardData.push(newEntry);

  // Sort the leaderboardData array based on the scores in descending order
  leaderboardData.sort(function(a, b) {
    return b.score - a.score;
  });

  // Update the ranks of all entries
  leaderboardData.forEach(function(entry, index) {
    entry.rank = index + 1;
  });

  // Regenerate the leaderboard table
  generateLeaderboard();

  // Clear the form inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("scoreInput").value = "";
}

// Get the reference to the addForm element
var addForm = document.getElementById("addForm");

// Add a submit event listener to the addForm element
addForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addToLeaderboard();
});

// Generate the leaderboard initially
generateLeaderboard();

  </script>
</body>
</html>
