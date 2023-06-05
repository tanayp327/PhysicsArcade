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
  <title>Leaderboard</title>
  <link rel="stylesheet" href="leaderboard.css">
</head>
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
    <button type="submit">Add to Leaderboard</button>
  </form>
    <script language = "JavaScript">
    var myFilms = [];
    const url = "https://ctrpe.duckdns.org/api/leaderboard/";//getting url for API
    const post_url = url+"create"//different urls for create, read, and delete functionality
    const delete_url = url+"delete/";
    const update_url = url+"update";
    const get_options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: { 
         'Content-Type': 'application/json'                
      },
    };
    function convertToEmbedUrl(url) {
      let regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      let match = url.match(regex);
    
      if (match && match[2].length == 11) {
        return `https://www.youtube.com/embed/${match[2]}`;
      } else {
        return "https://www.youtube.com/embed/dQw4w9WgXcQ";
      }
    }
    
    function deleteHelper(){
      deleteFilms(document.getElementById('Delname').value);
    }
    function postFilms(){//function to add a new country to the API, excecuted when a user types a country into the text box and hits the check button
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: document.getElementById("Name").value,
              year: document.getElementById("Year").value,
              epcount: document.getElementById("Epcount").value,
              language: document.getElementById("Language").value,
              trailer: document.getElementById("Trailer").value,
              eplist: document.getElementById("Eplist").value,
          })
      }
      fetch(post_url, options)
        .then(response => {
            if(response.status !== 200){
                return;
            }
            response.json().then(data=>{
                
                fetchFilms()
            })
        })
      }
 
    function deleteFilms(name){//method to delete countries from the API when program is all finished
          const options = {
              method: 'DELETE'
          }
          const full_url = delete_url+name
    
          fetch(full_url, options)
              .then(response => {
                  if(response.status !== 200){
                      return;
                  }
                  response.json().then(data=>{
                      fetchFilms()
                  })
              })
    }
    
    function updateFilms(){//method to delete countries from the API when program is all finished
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("Newname").value,
            epcount: document.getElementById("Newepcount").value,
            eps: document.getElementById("Neweplist").value,
        })
      }
      const full_url = update_url
​
      fetch(full_url, options)
          .then(response => {
              if(response.status !== 200){
                  return;
              }
              response.json().then(data=>{
                  fetchFilms()
              })
          })
}
 
    function fetchFilms(){//Fetch list of countries from API to print at the end and compare when a new country to add to see if it's already been guessed
          //console.log("test")
          for(let i = document.getElementById("Films").rows.length-1; i > 0; i--){
            document.getElementById("Films").deleterow(i);
          }
          fetch(url, get_options)
              .then(response => {
                  if(response.status !== 200){
                      return;
                  }
                  response.json().then(data=>{
                      //myFilms = []
                      for(const row of data){
                        let newarray = [row.name,row.year,row.language,row.epcount,row.eplist,row.trailer];
                        let myrow = document.getElementById("Films").insertRow(-1);
                        let mytrailer = document.createElement("iframe");
                        //<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_HERE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        //document.write("ghbsrhbvhugshoh");
                        mytrailer.setAttribute("height","300");
                        mytrailer.setAttribute("width","400");
                        mytrailer.setAttribute("src",convertToEmbedUrl(row.trailer));
                        mytrailer.setAttribute("frameborder","0");
                        mytrailer.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                        mytrailer.setAttribute("allowfullscreen",true);
                        myrow.insertCell(0).innerHTML = row.name;
                        myrow.insertCell(1).innerHTML = row.year;
                        myrow.insertCell(2).innerHTML = row.language;
                        myrow.insertCell(3).innerHTML = row.epcount;
                        myrow.insertCell(4).innerHTML = row.eplist;
                        myrow.insertCell(5).appendChild(mytrailer);
                        //myFilms.push(newarray);
                        //document.write(myFilms.length)
                      }
                  })
              })     
    }
    fetchFilms();
    //document.write(myFilms.length)
    //for(let i = 0; i < myFilms.length; i++){
​
    //}
    //document.write(myFilms.length);
​
  </script>
<!--
  <script>
    // Function to fetch leaderboard data from the server
    function fetchLeaderboardData() {
      fetch('http://ctrpe.duckdns.org/leaderboard')
        .then(response => response.json())
        .then(data => {
          leaderboardData = data;
          generateLeaderboard();
        })
        .catch(error => console.error('Error:', error));
    }
    // Function to update the server with the modified leaderboard data
    function updateLeaderboardData() {
      fetch('http://ctrpe.duckdns.org/api/leaderboard/update', {
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
  </script> -->
  
</body>
</html>


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








