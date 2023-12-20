let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";

console.log(getComputerChoice());



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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == ROCK && computerSelection == SCISSORS) {
        
    }
}