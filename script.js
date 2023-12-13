function getComputerChoice() {
    //Choose a random number (1, 2, or 3) and store it
    let randomNumber = Math.floor(Math.random()*3 + 1);
    let choice;

    //Return 1 = Rock, 2 = Paper, 3 = Scissors
    switch (randomNumber) {
        case 1: 
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }

    return choice;
}

function playRound (playerSelection, computerSelection) {
    //Change case of playerSelection:
    //Change whole string to lower case
    playerSelection = playerSelection.toLowerCase();
    //Remove first letter, store, and capitalize
    let firstLetter = playerSelection.slice(0,1).toUpperCase();
    //Add first letter back to string
    playerSelection = firstLetter + playerSelection.slice(1);

    //Compare player and comp selections and determine outcome
    let outcome;
    switch (playerSelection + computerSelection) {
        case "RockPaper":
            outcome = "lose";
            break;
        case "RockScissors":
            outcome = "win";
            break;
        case "PaperScissors":
            outcome = "lose";
            break;
        case "PaperRock":
            outcome = "win";
            break;
        case "ScissorsPaper":
            outcome = "win";
            break;
        case "ScissorsRock":
            outcome = "lose";
            break;
        default:
            outcome = "tied";
    }
    
    //Compose an explanation for the outcome
    let explanation;
    if (outcome === "win") {
        explanation = playerSelection + " beats " + computerSelection;
    } else if (outcome === "lose") {
        explanation = computerSelection + " beats " + playerSelection;
    } else {
        explanation = "Choose again";
    }
    
    //Return "You win||lose||tied! ____ beats ____||Choose again."
    return `You ${outcome}! ${explanation}.`;
}

console.log(playRound("Paper", getComputerChoice()));

//Function game
//Run playRound 5 times
//If tied, replay round
//Keep track of wins/losses
//Output overall winner