//getComputerChoice
//
//generate random number between 1 to 3
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    let result = "";

    switch(choice){
        case 1:
            result = "Rock";
            break;
        case 2:
            result = "Paper";
            break;
        case 3:
            result = "Scissors";
            break;
        default:
            console.log("Wrong number generated");
            break;
    }

    return result;
}

//playRound
//
//Total number of possible outcomes is 3, but given 2 players we have 3^2 possibilities
//to determine if the player wins or not.

function playRound(playerSelection, computerSelection) {
    let result = "";
    let playerScore = 0;

    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        result = "Its a Draw!";
        playerScore = 0;
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        result = "You Lose, Paper beats Rock";
        playerScore = -1;
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        result = "You Win, Rock beats Scissors";
        playerScore = 1;
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        result = "You Win, Paper beats Rock";
        playerScore = 1;
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        result = "Its a Draw!";
        playerScore = 0;
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        result = "You Lose, Scissors beats Paper";
        playerScore = -1;
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        result = "You Lose, Rock beats Scissors";
        playerScore = -1;
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        result = "You Win, Scissors beats Paper";
        playerScore = 1;
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        result = "Its a Draw";
        playerScore = 0;
    }
    else {
        console.log("Player Seclection cannot be empty or anything other than rock, paper, or scissors");
    }

    let resultsDiv = document.querySelector('.results');
    let resultsH  = document.createElement('h3');
    resultsH.textContent = result;
    resultsDiv.appendChild(resultsH);

    return playerScore;
}

//game
//
//
//get computer choice, player selection using prompt and call playRound 5 times
function game() {
    let choices = document.querySelectorAll(".rps-choice");

    let playerScore = 0;
    let computerScore = 0;

    choices.forEach(choice => {
        choice.addEventListener("click", (e) => {
            let computerSelection = getComputerChoice();
            let playerSelection = choice.textContent;
            let gameResult = playRound(playerSelection, computerSelection); 
    
            if(gameResult == 1) {
                playerScore++;
            }
            
            if(gameResult == -1) {
                computerScore++;
            } 
            console.log(gameResult);
    
            console.log(playerScore);
            console.log(computerScore);
    
    
    
            if(playerScore == 5 || computerScore == 5) {
                let scoreH = document.createElement('h1');
                let resultsDiv = document.querySelector('.results');
            
                scoreH.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
                resultsDiv.appendChild(scoreH);

                playerScore = 0;
                computerScore = 0;
            }   
        })
    }); 
}

game();
