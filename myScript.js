function validateUpperCase(text) {
    let validatedText = 0;
    let firstLetter = 0;
    let word = 0;

    word = text.toLowerCase();
    firstLetter = word.charAt(0).toUpperCase();
    validatedText = firstLetter + word.slice(1);
    
    return validatedText;
}

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * (3 + 0));
    let choice = "ERROR";

    if (random == 0){
        choice = options[0];
    } else if (random == 1){
        choice = options[1];
    }else{
        choice = options[2];
    }

    return choice
}

function getPlayerChoice() {
    let choice = "ERROR";

    choice = validateUpperCase(prompt("Rock... Paper... Scissor... :"));

    return choice;
}

function startRound(playerSelection, computerSelection) {

    let message = "ERROR";

    if (playerSelection === computerSelection) {
        message = 0//"Draw. Try again.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        message = 2//"You Lose!, Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        message = 1//"You Win!, Rock beats Scissor";
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        message = 2//"You Lose!, Scissor beats Paper";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        message = 1//"You Win!, Paper beats Rock";
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        message = 2//"You Lose!, Rock beats Scissor";
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        message = 1//"You Win!, Scissor beats Paper";
    }

    return message;
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let message = 0;
    let computerChoice = 0;
    let playerChoice = 0;

    for (let i = 0; i <= 4; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        message = startRound(playerChoice, computerChoice);
        console.log("Computer's choice: ",computerChoice + " " + "Your choice:", playerChoice);
        if( 1/*"You Win!, Scissor beats Paper"*/ === message) {
            alert("Round Won\n" + "Computer's choice: " + computerChoice + "\nYours: " + playerChoice);
            playerScore++;
        } else if( 2 /*"You Lose!, Rock beats Scissor"*/ === message){
            alert("Round Lost\n" + "Computer's choice: " + computerChoice + "\nYours: " + playerChoice);
            computerScore++;
        } else {
            alert("DRAW!\n" + "Computer's choice: " + computerChoice + "\nYours: " + playerChoice)
        }
        console.log(message);
    }

    if (playerScore > computerScore) {
        alert("YOU WIN!");
    } else if (playerScore < computerScore) {
        alert("YOU LOSE!");
    } else {
        alert("DRAW!");
    }
    alert("SCORES: \n" + "Player: " + playerScore + "\nComputer: " + computerScore);
    
}

game();
