// VARIABLES AND CONSTANTS
let playerVictoryCount = 0;
let computerVictoryCount = 0;
let result = "";

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const rockDOM = document.querySelector("#rock");
const paperDOM = document.querySelector("#paper");
const scissorsDOM = document.querySelector("#scissors"); 
const resultDOM = document.querySelector("#result");
const victoriesDOM = document.querySelector("#victories");
const imgDOM = document.querySelector("img");
const optionsContainer = document.querySelector(".options-container");

// CODE TO RUN
victoriesDOM.textContent = showVictories();


optionsContainer.addEventListener("click", delegateClickEvent);



// FUNCTIONS

/* Handles the click event and delegates it to the appropriate action 
 * based on the ID of the clicked target. */
function delegateClickEvent(e) {
    let target = e.target;

    if (target.id == "rock") {
        result = playRound(ROCK, getComputerChoice());
    } else if (target.id == "paper") {
        result = playRound(PAPER, getComputerChoice());
    } else if (target.id == "scissors") {
        result = playRound(SCISSORS, getComputerChoice());
    } else {
        console.log("incorrect id");
    }

    resultDOM.textContent = result;
    victoriesDOM.textContent = showVictories();
}

/* Returns string of computer's Choice.*/
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber == 1) {
        return ROCK;
    } else if (randomNumber == 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

/* Returns a string that declares the winner of the round 
 * like so: "You Lose! Paper beats Rock".*/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // tied
    if (playerSelection == computerSelection) {
        let selection = playerSelection.substring(0,1).toUpperCase() + 
                        playerSelection.substring(1);
        return `You tied! You both chose ${selection}`;
    } 
    // player win scenarios
    else if ((playerSelection == ROCK && computerSelection == SCISSORS) ||
            (playerSelection == PAPER && computerSelection == ROCK) ||
            (playerSelection == SCISSORS && computerSelection == PAPER)) {
                playerVictoryCount++;
                return resultString("win", playerSelection, computerSelection);
    }
    // computer win scenarios
    else {
        computerVictoryCount++;
        return resultString("lose", computerSelection, playerSelection);
    }
} 

/* Returns string showing Win or Lose and what choices were played */
function resultString(result, winner, loser) {
    winnerProperCase = winner.substring(0,1).toUpperCase() + winner.substring(1).toLowerCase();
    loserProperCase = loser.substring(0,1).toUpperCase() + loser.substring(1).toLowerCase();
    resultProperCase = result.toLowerCase();

    return `You ${resultProperCase}! ${winnerProperCase} beats ${loserProperCase}.`;
}

/* Returns string of current player and computer victories */
function showVictories() {
    return "Player victories :\t"+ playerVictoryCount + "\nComputer victories:\t" + computerVictoryCount;
}