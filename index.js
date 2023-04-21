//getComputerChoice
//
//generate random number between 1 to 3
//if number chosen is 1 return rock
//if number chosen is 2 return paper
//if number chosen is 3 return scissors

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

    console.log(result);
    return result;
}

//playRound
//
//Total number of possible outcomes is 3, but given 2 players we have 3^2 possibilities
//
//PlayerSelection Possible outcomes 
//if playerSelection is equal to Rock and computerSelection is Rock, then its a draw
//if playerSelection is equal to Rock and computerSelection is Paper, then Player Loses
//if playerSelection is equal to Rock and computerSelection is Scissors, then Player Wins
// 
//if playerSelection is equal to Paper and computerSelection is Rock, then Player Wins
//if playerSelection is equal to Paper and computerSelection is Paper, then its a Draw
//if playerSelection is equal to Paper and computerSelection is Scissors, then Player Loses
// 
//if playerSelection is equal to Scissors and computerSelection is Rock, then Player Loses
//if playerSelection is equal to Scissors and computerSelection is Paper, then Player Wins
//if playerSelection is equal to Scissors and computerSelection is Scissors, then its a Draw

function playRound(playerSelection, computerSelection) {
    let result = "";

    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        result = "Its a Draw!";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        result = "You Lose, Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        result = "You Win, Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        result = "You Win, Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        result = "Its a Draw!";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        result = "You Lose, Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        result = "You Lose, Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        result = "You Win, Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        result = "Its a Draw";
    }
    else {
        console.log("Player Seclection cannot be empty or anything other than rock, paper, or scissors");
    }

    return result;
}

//game
//
//
//get computer choice, player selection using prompt and call playRound 5 times
function game() {

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose one, Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let gameResult = playRound(playerSelection, computerSelection); 
        console.log(`${gameResult} \n`);
    }
}

game();