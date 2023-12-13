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

//Function playRound (playerSelection, computerSelection)
//Change case of playerSelection
//Compare player and comp selections
//If tied, replay round
//Return "You win/lose! ____ beats ____"

//Function game
//Run playRound 5 times
//Keep track of wins/losses
//Output overall winner