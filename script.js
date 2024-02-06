const buttons = document.querySelector('.btn-container');
const output = document.querySelector('.output');
let wins = 0;
let losses = 0;
buttons.addEventListener('click', playRound);


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

function playRound (clickTarget) {
    let playerSelection = clickTarget.target.id;
    if (!playerSelection) {
        return;
    }
    //Change case of playerSelection:
    //Change whole string to lower case
    playerSelection = playerSelection.toLowerCase();
    //Remove first letter, store, and capitalize
    const firstLetter = playerSelection.slice(0,1).toUpperCase();
    //Add first letter back to string
    playerSelection = firstLetter + playerSelection.slice(1);

    const computerSelection = getComputerChoice();

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

    writeOutput(outcome, playerSelection, computerSelection);
}

function writeOutput (outcome, playerSelection, computerSelection) {
    //Output an explanation for the round outcome
    let explanation;
    let verb;
    if (outcome === "win") {
        wins++;
        verb = playerSelection === "Scissors" ? "beat" : "beats";
        explanation = `Your ${playerSelection} ${verb} my ${computerSelection}`;
    } else if (outcome === "lose") {
        losses++;
        verb = computerSelection === "Scissors" ? "beat" : "beats";
        explanation = `My ${computerSelection} ${verb} your ${playerSelection}`;
    } else {
        explanation = "Choose again";
    }
    
    //Output an explanation for the game outcome
    output.textContent = `You ${outcome} this round! ${explanation}.`;
    if (wins + losses == 5 && wins > losses) {
        output.innerHTML += `
        <br>You won the game, ${wins} to ${losses}. You are the champion!
        <br>Click a weapon to start a new game!`;
        wins = 0;
        losses = 0;
    } else if (wins + losses == 5 && wins < losses) {
        output.innerHTML += `
        <br>You lost the game, ${wins} to ${losses}. Better luck next game.
        <br>Click a weapon to start a new game!`
        wins = 0;
        losses = 0;
    }
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