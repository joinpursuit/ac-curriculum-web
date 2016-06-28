window.onload = function() {

  const ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors",
    ERROR = "---",
    COMPUTER = "computer",
    PLAYER = "player",
    TIE = "---",
    NONE = "none";

  var submitButton = document.getElementById("submitButton");
  var userChoiceString;

  /*
   *   Function when user clicks the 'submit' button
   */
  submitButton.addEventListener('click', function() {
    var outputText;
    var userChoice = document.getElementById("userChoice");
    userChoiceString = userChoice.selectedOptions[0].value;

    // Generating a random choice for computer
    var computerChoiceString = getRandomChoice();

    // Evaluating who won
    var winner = whoWon(userChoiceString, computerChoiceString);

    document.getElementById("winner").innerText = "You chose " + userChoiceString + "\n" +
                 			"Computer chose " + computerChoiceString + "\n" +
                 			"The winner is: " + winner;

  });

  /*
   *  Get a random string with value "rock", "paper" or "scissors"
   */
  function getRandomChoice() {
    // The computer is cheating
    var notRandomChoice;
    
    // This wouldn't be possible if userChoiceString was a local variable
    switch (userChoiceString) {
      case ROCK:
        notRandomChoice = PAPER
        break;
      case PAPER:
        notRandomChoice = SCISSORS
        break;
      case SCISSORS:
        notRandomChoice = ROCK
        break;
      default:
        notRandomChoice = ERROR;
    }

    return notRandomChoice;
  }

  function whoWon(userChoiceString, computerChoiceString) {
    var winner;

    if (computerChoiceString == ERROR) {
      return ERROR;
    }

    if (userChoiceString == ROCK) {
      if (computerChoiceString == PAPER) {
        winner = COMPUTER;
      } else if (computerChoiceString == SCISSORS) {
        winner = PLAYER;
      }
    } else if (userChoiceString == PAPER) {
      if (computerChoiceString == SCISSORS) {
        winner = COMPUTER;
      } else if (computerChoiceString == ROCK) {
        winner = PLAYER;
      }
    } else if (userChoiceString == SCISSORS) {
      if (computerChoiceString == ROCK) {
        winner = COMPUTER;
      } else if (computerChoiceString == PAPER) {
        winner = PLAYER;
      }
    } else {
      winner = TIE;
    }

    return winner;
  }



}
