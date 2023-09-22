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

    if (playerSelection === computerSelection) {
        value = 0;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        value = 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        value = 2;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        value = 3;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        value = 4;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        value = 5;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        value = 6;
    }

    return value;
}

function messageResult(value){
    let message;

    switch(value){
        case 0:
            message = "Draw. Try again.";
            break;
        case 1:
            message = "You Win!, Rock beats Scissors";
            break;
        case 2:
            message = "You Lose!, Paper beats Rock";
            break;
        case 3:
            message = "You Win!, Paper beats Rock";
            break;
        case 4:
            message = "You Lose!, Scissors beats Paper";
            break;
        case 5:
            message = "You Win!, Scissors beats Paper";
            break;
        case 6:
            message = "You Lose!, Rock beats Scissors";
            break;
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

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const showPlayerScore = document.getElementById("playerScore");
const showComputerScore = document.getElementById("computerScore");
const showDrawScore = document.getElementById("drawScore");
const showMessageResult = document.getElementById("score");
const newDiv = document.createElement("div");
let matchResult = 0;
let countPlayer = 0;
let countComputer = 0;
let countDraw = 0;

rockButton.addEventListener("click", function(){
    matchResult = startRound("Rock", getComputerChoice());
    if (matchResult == 1 || matchResult  == 3 || matchResult == 5){
        countPlayer += 1;
    } else if (matchResult == 2 || matchResult == 4 || matchResult == 6){
        countComputer += 1;
    } else{
        countDraw += 1;
    }

    newDiv.textContent = messageResult(matchResult);
    showMessageResult.appendChild(newDiv);

    if(countPlayer == 5){
        alert("YOU WIN!");
        countPlayer = 0;
        countComputer = 0;
        countDraw = 0;
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
    if (matchResult == 1 || matchResult  == 3 || matchResult == 5){
        countPlayer += 1;
    } else if (matchResult == 2 || matchResult == 4 || matchResult == 6){
        countComputer += 1;
    } else{
        countDraw += 1;
    }

    newDiv.textContent = messageResult(matchResult);
    showMessageResult.appendChild(newDiv);

    if(countPlayer == 5){
        alert("YOU WIN!");
        countPlayer = 0;
        countComputer = 0;
        countDraw = 0;
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
    if (matchResult == 1 || matchResult  == 3 || matchResult == 5){
        countPlayer += 1;
    } else if (matchResult == 2 || matchResult == 4 || matchResult == 6){
        countComputer += 1;
    } else{
        countDraw += 1;
    }

    newDiv.textContent = messageResult(matchResult);
    showMessageResult.appendChild(newDiv);

    if(countPlayer == 5){
        alert("YOU WIN!");
        countPlayer = 0;
        countComputer = 0;
        countDraw = 0;
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
