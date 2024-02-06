const buttons = document.querySelector('.btn-container');
const output = document.querySelector('.output');
const opponent = document.querySelector('div.weapon');
let wins = 0;
let losses = 0;
let gameRecord = '';
buttons.addEventListener('click', playRound);


function getComputerChoice () {
    //Choose a random number (1, 2, or 3) and store it
    const randomNumber = Math.random();
    const oneTwoThree = Math.floor(randomNumber*3 + 1);
    let choice;
    let emoji;

    //Return 1 = Rock, 2 = Paper, 3 = Scissors
    switch (oneTwoThree) {
        case 1: 
            choice = "Rock";
            emoji = "🪨";
            break;
        case 2:
            choice = "Paper";
            emoji = "📜";
            break;
        case 3:
            choice = "Scissors";
            emoji = "✂️";
            break;
    }

    opponent.textContent = emoji;
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
    switch (outcome) {
        case 'win':
            wins++;
            verb = playerSelection === "Scissors" ? "beat" : "beats";
            explanation = `Your ${playerSelection} ${verb} my ${computerSelection}`;
            break;
        case 'lose':
            losses++;
            verb = computerSelection === "Scissors" ? "beat" : "beats";
            explanation = `My ${computerSelection} ${verb} your ${playerSelection}`;
            break;
        case 'tied':
            explanation = "Choose again";
            break;
    }

    gameRecord += outcome.slice(0,1).toUpperCase() + ' ';
    
    //Output an explanation for the game outcome
    output.innerHTML = `<p>Rounds so far: ${gameRecord}</p>
        <p>You ${outcome} this round! ${explanation}.</p>`;
    if (wins + losses == 5 && wins > losses) {
        output.innerHTML += `
        <p>You won the game, ${wins} to ${losses}. You are the champion!</p>
        <p>Click a weapon to start a new game!</p>`;
        wins = 0;
        losses = 0;
        gameRecord = '';
    } else if (wins + losses == 5 && wins < losses) {
        output.innerHTML += `
        <p>You lost the game, ${wins} to ${losses}. Better luck next game.</p>
        <p>Click a weapon to start a new game!</p>`
        wins = 0;
        losses = 0;
        gameRecord = '';
    }
}