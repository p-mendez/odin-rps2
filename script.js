/* TODO */
// change css pseudo-class with js add class "hovered"
// create new css class for "hovered"
// add event listener for mouseover and have it add hovered class
// when game ends remove class hovered from it

// CONSTANTS
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const MAX_VICTORIES = 5;

// VARIABLES
let playerVictoryCount = 0;
let computerVictoryCount = 0;

// DOM Elements
const gameConsoleDOM = document.querySelector(".game-console");
const resultDOM = document.querySelector("#result");
const victoriesDOM = document.querySelector("#victories");
const optionsContainer = document.querySelector(".options-container");
victoriesDOM.textContent = showVictories();

// EVENT LISTENERS
optionsContainer.addEventListener("click", delegateClickEvent);
optionsContainer.addEventListener("mouseover", addHoveredClass);
optionsContainer.addEventListener("mouseout", removeHoveredClass);


function addHoveredClass(e) {
        if (e.target.id == ROCK ||
            e.target.id == PAPER ||
            e.target.id == SCISSORS)
                e.target.classList.add("hovered");
}

function removeHoveredClass(e) {
    if (e.target.id == ROCK ||
        e.target.id == PAPER ||
        e.target.id == SCISSORS)
            e.target.classList.remove("hovered");
}


// FUNCTIONS
/* Handles the click event and delegates it to the appropriate action 
 * based on the ID of the clicked target. */
function delegateClickEvent(e) {
    let target = e.target;
    let result;

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
    
    if (gameMeetsEndCondition()) {
        endTheGame();
    }
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
                return getResultString("win", playerSelection, computerSelection);
    }
    // computer win scenarios
    else {
        computerVictoryCount++;
        return getResultString("lose", computerSelection, playerSelection);
    }
} 

/* Returns string showing Win or Lose and what choices were played */
function getResultString(result, winner, loser) {
    let winnerProperCase = winner.substring(0,1).toUpperCase() + winner.substring(1).toLowerCase();
    let loserProperCase = loser.substring(0,1).toUpperCase() + loser.substring(1).toLowerCase();
    let resultProperCase = result.toLowerCase();

    return `You ${resultProperCase}! ${winnerProperCase} beats ${loserProperCase}.`;
}

/* Returns string of current player and computer victories */
function showVictories() {
    return "Player victories :\t"+ playerVictoryCount + "\nComputer victories:\t" + computerVictoryCount;
}

/* Helper function that returns true if either victoryCount reaches 5 or over */
function gameMeetsEndCondition() {
    return (playerVictoryCount >= MAX_VICTORIES || computerVictoryCount >= MAX_VICTORIES);
}

/* Helper function that returns a string with who won the game */
function getGameEndString(playerVictoryCount, computerVictoryCount) {
    if (playerVictoryCount >=5 ) {
        return "YOU'VE WON THE GAME!";
    } else {
        return "THE COMPUTER HAS WON THE GAME.";
    }
}

/* Helper function that removes the event listener and adds the gameEnd string to the game-console */
function endTheGame() {
    // Remove Event Listeners
    optionsContainer.removeEventListener("click", delegateClickEvent);
    optionsContainer.removeEventListener("mouseover", addHoveredClass);
    optionsContainer.removeEventListener("mouseout", removeHoveredClass);

    // Remove hovered formatting from all children in options-container
    for (const child of optionsContainer.children) {
        child.classList.remove("hovered");
    }
    // Add gameEndString to DOM
    
    let gameEndString = document.createElement("p");
    gameEndString.textContent = getGameEndString(playerVictoryCount, computerVictoryCount);
    gameConsoleDOM.insertBefore(gameEndString, victoriesDOM);
}