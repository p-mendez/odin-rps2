let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";

console.log(getComputerChoice());


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
 *  
 * Algorithm: 
 * If both selections are the same, it's a tie. 
 * Otherwise, go through every remaining combination,
 * assigning either "You Lose" or "You win"
 */
function playRound(playerSelection, computerSelection) {
    // tied
    if (playerSelection == computerSelection) {
        return `You tied. You both chose ${playerSelection}`;
    } 
    // player chooses rock
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors" ) {
            return resultString("win", playerSelection, computerSelection);
        } else {
            return resultString("lose", computerSelection, playerSelection);
        }
    } 
    // player chooses paper
    else if (playerSelection == "paper") {
        if (computerSelection == "rock" ) {
            return resultString("win", playerSelection, computerSelection);
        } else {
            return resultString("lose", computerSelection, playerSelection);
        }
    } 
    // player chooses scissors
    else {
        if (computerSelection == "paper" ) {
            return resultString("win", playerSelection, computerSelection);
        } else {
            return resultString("lose", computerSelection, playerSelection);
        }
    } 
    
}

function resultString(result, winner, loser) {
    winnerProperCase = winner.substring(0,1).toUpperCase() + winner.substring(1).toLowerCase();
    loserProperCase = loser.substring(0,1).toUpperCase() + loser.substring(1).toLowerCase();
    resultProperCase = result.substring(0,1).toUpperCase() + result.substring(1).toLowerCase();

    return `You ${resultProperCase}! ${winnerProperCase} beats ${loserProperCase}`;
}





