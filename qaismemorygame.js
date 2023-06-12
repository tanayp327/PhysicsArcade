var cards = [
    { color: 'blue', flipped: false },
    { color: 'red', flipped: false },
    { color: 'green', flipped: false }
    // Add more cards here as needed
  ];
  
  var flippedCards = [];
  var patterns = [
    [0, 1, 2],             // First pattern
    [1, 0, 2],             // Second pattern
    [2, 0, 1, 1, 0, 2]     // Third pattern
  ];
  var currentPatternIndex = 0;
  var patternIndex = 0;
  
  function flipCard(index) {
    var card = cards[index];
  
    if (!card.flipped && flippedCards.length < 2) {
      card.flipped = true;
      flippedCards.push(card);
      updateCardStyles();
  
      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      } else {
        setTimeout(resetFlippedCards, 1000);
      }
    }
  }
  
  function updateCardStyles() {
    var cardElements = document.getElementsByClassName('card');
  
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var cardElement = cardElements[i];
  
      if (card.flipped) {
        cardElement.style.backgroundColor = card.color;
      } else {
        cardElement.style.backgroundColor = 'gray';
      }
    }
  }
  
  function checkMatch() {
    if (flippedCards[0].color === flippedCards[1].color) {
      alert('Match!');
      resetFlippedCards();
      patternIndex++;
  
      if (patternIndex === patterns[currentPatternIndex].length) {
        patternIndex = 0;
        currentPatternIndex++;
        if (currentPatternIndex === patterns.length) {
          alert('You Win!');
          resetGame();
        } else {
          setTimeout(showPattern, 1000);
        }
      }
    } else {
      alert('You Lose');
      resetGame();
    }
  }
  
  function resetFlippedCards() {
    flippedCards.forEach(function (card) {
      card.flipped = false;
    });
  
    flippedCards = [];
    updateCardStyles();
  }
  
  function showPattern() {
    var delay = 1000;
  
    patterns[currentPatternIndex].forEach(function (index, i) {
      setTimeout(function () {
        flipCard(index);
      }, delay * (i + 1));
    });
  
    setTimeout(resetFlippedCards, delay * patterns[currentPatternIndex].length + 500);
  }
  
  function resetGame() {
    flippedCards = [];
    currentPatternIndex = 0;
    patternIndex = 0;
    clearPattern();
  }
  
  function clearPattern() {
    patternIndex = 0;
  }
  
  // Call the initial functions to start the game
  showPattern();
  