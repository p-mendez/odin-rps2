let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";
let playerVictoryCount = 0;
let computerVictoryCount = 0;
let result = "";

const rockDOM = document.querySelector("#rock");
const paperDOM = document.querySelector("#paper");
const scissorsDOM = document.querySelector("#scissors"); 
const resultDOM = document.querySelector("#result");
const victoriesDOM = document.querySelector("#victories");
const imgDOM = document.querySelector("img");


rockDOM.addEventListener("click", () => {
    result = playRound(ROCK, getComputerChoice());
    resultDOM.textContent = result;
    victoriesDOM.textContent = showVictories();
});

paperDOM.addEventListener("click", () => {
    result = playRound(PAPER, getComputerChoice());
    resultDOM.textContent = result;
    victoriesDOM.textContent = showVictories();
});

scissorsDOM.addEventListener("click", () => {
    result = playRound(SCISSORS, getComputerChoice());
    resultDOM.textContent = result;
    victoriesDOM.textContent = showVictories();
});

/* Returns string of computer's Choice. Decision */
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

/* Return a string that declares the winner of the round 
 * like so: "You Lose! Paper beats Rock".
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // tied
    if (playerSelection == computerSelection) {
        let selection = playerSelection.substring(0,1).toUpperCase() + 
                        playerSelection.substring(1);
        return `You tied! You both chose ${selection}`;
    } 
    // player chooses rock
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors" ) {
            playerVictoryCount++;
            return resultString("win", playerSelection, computerSelection);
        } else {
            computerVictoryCount++;
            return resultString("lose", computerSelection, playerSelection);
        }
    } 
    // player chooses paper
    else if (playerSelection == "paper") {
        if (computerSelection == "rock" ) {
            playerVictoryCount++;
            return resultString("win", playerSelection, computerSelection);
        } else {
            computerVictoryCount++;
            return resultString("lose", computerSelection, playerSelection);
        }
    } 
    // player chooses scissors
    else {
        if (computerSelection == "paper" ) {
            playerVictoryCount++;
            return resultString("win", playerSelection, computerSelection);
        } else {
            computerVictoryCount++;
            return resultString("lose", computerSelection, playerSelection);
        }
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




