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
    const options = ["Rock", "Paper", "Scissors"];
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

    let value = "ERROR";

    /*
    0 = DRAW ("Draw. Try again.")
    1 = PLAYER LOSE ("You Lose!, Paper beats Rock")
                        "You Lose!, Scissors beats Paper"
                            "You Lose!, Rock beats Scissors"
    2 = COMPUTER LOSE ("You Win!, Rock beats Scissors)
                            "You Win!, Paper beats Rock"
                                "You Win!, Scissors beats Paper"

    */ 

    if (playerSelection === computerSelection) {
        value = 0;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        value = 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        value = 2;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        value = 11;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        value = 22;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        value = 111;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        value = 222;
    }

    return value;
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

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const showPlayerScore = document.getElementById("player");
const newDiv = document.createElement("div");
let playerScore = 0;
let computerScore = 0;
let countPlayer = 0;
let countComputer = 0;

rockButton.addEventListener("click", function(){
    playerScore = startRound("Rock", getComputerChoice());
    if (playerScore == 1 || playerScore  == 11 || playerScore == 111){
        countPlayer += 1;
    } else if (computerScore == 2 || computerScore == 22 || computerScore == 222){
        countComputer += 1;
    }

    showPlayerScore.insertAdjacentHTML("afterbegin", countPlayer);
});

paperButton.addEventListener("click", function(){
    newDiv.textContent = startRound("Paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function(){
    newDiv.textContent = startRound("Scissors", getComputerChoice());

    
});

document.body.appendChild(newDiv);
//game();
