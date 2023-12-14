function getComputerChoice () {
    //Choose a random number (1, 2, or 3) and store it
    const randomNumber = Math.random();
    const oneTwoThree = Math.floor(randomNumber*3 + 1);
    let choice;

    //Return 1 = Rock, 2 = Paper, 3 = Scissors
    switch (oneTwoThree) {
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
    const firstLetter = playerSelection.slice(0,1).toUpperCase();
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
    let verb;
    if (outcome === "win") {
        verb = playerSelection === "Scissors" ? "beat" : "beats";
        explanation = `Your ${playerSelection} ${verb} my ${computerSelection}`;
    } else if (outcome === "lose") {
        verb = computerSelection === "Scissors" ? "beat" : "beats";
        explanation = `My ${computerSelection} ${verb} your ${playerSelection}`;
    } else {
        explanation = "Choose again";
    }
    
    //Return "You win||lose||tied! ____ beats ____||Choose again."
    return `You ${outcome} this round! ${explanation}.`;
}

function game () {
    let playerSelection;
    let roundOutcome;
    let wins = 0;
    let losses = 0;
    //Run playRound 5 times
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt(`Round ${i}! Choose your weapon:`);
        roundOutcome = playRound(playerSelection, getComputerChoice());
        //If tied, replay the round
        if (roundOutcome.includes("tied")) {
            i--;
        //Otherwise, record the win or loss
        } else if (roundOutcome.includes("win")) {
            wins++;
        } else {
            losses++;
        }
        console.log(roundOutcome);
    }
    
    //Output overall winner
    if (wins > losses) {
        console.log(`You won the game, ${wins} to ${losses}. You are the champion!`);
    } else {
        console.log(`You lost the game, ${wins} to ${losses}. Better luck next game.`);
    }
}