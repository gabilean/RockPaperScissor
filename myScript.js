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
const showPlayerScore = document.getElementById("playerScore");
const showComputerScore = document.getElementById("computerScore");
const showDrawScore = document.getElementById("drawScore");
const newDiv = document.createElement("div");
let matchResult = 0;
let countPlayer = 0;
let countComputer = 0;
let countDraw = 0;
let message = "TEST";

rockButton.addEventListener("click", function(){
    matchResult = startRound("Rock", getComputerChoice());
    if (matchResult == 1 || matchResult  == 11 || matchResult == 111){
        countPlayer += 1;
    } else if (matchResult == 2 || matchResult == 22 || matchResult == 222){
        countComputer += 1;
    } else{
        countDraw += 1;
    }

    if(countPlayer == 5){
        alert("YOU WIN!");
        countPlayer = 0;
        countComputer = 0;
    } else if(countComputer == 5){
        alert("YOU LOSE!");
        countPlayer = 0;
        countComputer = 0;
        countDraw = 0;
    }

    showPlayerScore.textContent = ` ${countPlayer}`;
    showComputerScore.textContent = ` ${countComputer}`;
    showDrawScore.textContent = `${countDraw}`;
});

paperButton.addEventListener("click", function(){
    matchResult = startRound("Paper", getComputerChoice());
    if (matchResult == 1 || matchResult  == 11 || matchResult == 111){
        countPlayer += 1;
    } else if (matchResult == 2 || matchResult == 22 || matchResult == 222){
        countComputer += 1;
    } else{
        countDraw += 1;
    }

    if(countPlayer == 5){
        alert("YOU WIN!");
        countPlayer = 0;
        countComputer = 0;
    } else if(countComputer == 5){
        alert("YOU LOSE!");
        countPlayer = 0;
        countComputer = 0;
        countDraw = 0;
    }
    

    showPlayerScore.textContent = ` ${countPlayer}`;
    showComputerScore.textContent = ` ${countComputer}`;
    showDrawScore.textContent = `${countDraw}`;
});

scissorsButton.addEventListener("click", function(){
    matchResult = startRound("Scissors", getComputerChoice());
    if (matchResult == 1 || matchResult  == 11 || matchResult == 111){
        countPlayer += 1;
    } else if (matchResult == 2 || matchResult == 22 || matchResult == 222){
        countComputer += 1;
    } else{
        countDraw += 1;
    }

    if(countPlayer == 5){
        alert("YOU WIN!");
        countPlayer = 0;
        countComputer = 0;
    } else if(countComputer == 5){
        alert("YOU LOSE!");
        countPlayer = 0;
        countComputer = 0;
        countDraw = 0;
    }  

    showPlayerScore.textContent = ` ${countPlayer}`;
    showComputerScore.textContent = ` ${countComputer}`; 
    showDrawScore.textContent = `${countDraw}`;   
});

if(countPlayer == 5){
    console.log("YOU WIN!");
}


document.body.appendChild(newDiv);
//game();
