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
optionsContainer.addEventListener("click", handleButtonClick);
optionsContainer.addEventListener("mouseover", addHoveredClass);
optionsContainer.addEventListener("mouseout", removeHoveredClass);

// FUNCTIONS
// Main game functions


/* MAIN FUNCTION: Handles the click event by getting a result of the RPS match,
 * updating the DOM, and (if necessary) ending the game. */ 
function handleButtonClick(e) {
    let result = getResult(e.target);

    updateDOM(result);
    
    if (gameMeetsEndCondition()) {
        endTheGame();
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

/* Updates the resultDOM with the new result and shows the current victories of the 
 * user and computer */
function updateDOM(result) {
    resultDOM.textContent = result;
    victoriesDOM.textContent = showVictories();
}

// FUNCTIONS
// Helper functions

/* Adds 'hovered' to element's class if it is a clickable elemement */
function addHoveredClass(e) {
    if (e.target.classList.contains("clickable"))
        e.target.classList.add("hovered");
}

/* Removes event listeners, resets the styling, and adds the game end message.*/
function endTheGame() {
    // Remove Event Listeners
    optionsContainer.removeEventListener("click", handleButtonClick);
    optionsContainer.removeEventListener("mouseover", addHoveredClass);
    optionsContainer.removeEventListener("mouseout", removeHoveredClass);

    // Remove hovered styling from all children in options-container
    for (const child of optionsContainer.children) {
        child.classList.remove("hovered");
    }

    // Add gameEndString to DOM
    let gameEndString = document.createElement("strong");
    gameEndString.style.marginTop = "16px";
    gameEndString.textContent = getGameEndString(playerVictoryCount, computerVictoryCount);
    gameConsoleDOM.insertBefore(gameEndString, victoriesDOM);
}

/* Returns true if either victoryCount reaches 5 or over */
function gameMeetsEndCondition() {
    return (playerVictoryCount >= MAX_VICTORIES || computerVictoryCount >= MAX_VICTORIES);
}

/* Returns string of computer's choice.*/
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

/* Returns a string with who won the game */
function getGameEndString(playerVictoryCount, computerVictoryCount) {
    if (playerVictoryCount >=5 ) {
        return "YOU'VE WON THE GAME!";
    } else {
        return "THE COMPUTER HAS WON THE GAME.";
    }
}

/* Determines the winner of a match based on the player and computer's choice */
function getResult(playerChoice) {
    if (playerChoice.id == "rock") {
        return playRound(ROCK, getComputerChoice());
    } else if (playerChoice.id == "paper") {
        return playRound(PAPER, getComputerChoice());
    } else if (playerChoice.id == "scissors") {
        return playRound(SCISSORS, getComputerChoice());
    } else {
        console.log("incorrect id");
    }
}

/* Returns string showing Win or Lose and what choices were played */
function getResultString(result, winner, loser) {
    let winnerProperCase = winner.substring(0,1).toUpperCase() + winner.substring(1).toLowerCase();
    let loserProperCase = loser.substring(0,1).toUpperCase() + loser.substring(1).toLowerCase();
    let resultProperCase = result.toLowerCase();

    return `You ${resultProperCase}! ${winnerProperCase} beats ${loserProperCase}.`;
}

/* Removes 'hovered' from element's class if it is a clickable elemement */
function removeHoveredClass(e) {
    if (e.target.classList.contains("clickable"))
        e.target.classList.remove("hovered");
}

/* Returns string of current player and computer victories */
function showVictories() {
    return "Player victories :\t"+ playerVictoryCount + "\nComputer victories:\t" + computerVictoryCount;
}