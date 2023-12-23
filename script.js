let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";
let playerVictoryCount = 0;
let computerVictoryCount = 0;

game();


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
        return `You tied. You both chose ${selection}`;
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

/* Plays a best-of-five game that keeps score and reports a winner or loser at the end. 
*/
function game() {
    // alert("ROCK, PAPER, SCISSORS GAME");
    // let keepGoing = true;
    // while (keepGoing) {
    //     let playerChoice = prompt("Choose: Rock, Paper, or Scissors");
    //     let computerSelection = getComputerChoice();
    //     alert(playRound(playerChoice, computerSelection) +
    //     "\n\n" + showVictories());
    //     keepGoing = playerVictoryCount < 3 && computerVictoryCount < 3;
    // }

    // if (playerVictoryCount > computerVictoryCount) {
    //     alert("YOU WON!🏆\n\n" + showVictories());
    // } else {
    //     alert("YOU LOST!😭\n\n" + showVictories());
    // }

}

/* Returns string showing Win or Lose and what choices were played */
function resultString(result, winner, loser) {
    winnerProperCase = winner.substring(0,1).toUpperCase() + winner.substring(1).toLowerCase();
    loserProperCase = loser.substring(0,1).toUpperCase() + loser.substring(1).toLowerCase();
    resultProperCase = result.substring(0,1).toUpperCase() + result.substring(1).toLowerCase();

    return `You ${resultProperCase}! ${winnerProperCase} beats ${loserProperCase}`;
}

/* Returns string of current player and computer victories */
function showVictories() {
    return "Player victories : "+ playerVictoryCount + "\nComputer victories: " + computerVictoryCount;
}




