let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice () {
    return prompt("Rock, paper or scissors", "").toLowerCase();
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (computer, player) {
        console.log("Computer choice: " + computer);
        console.log("Human choice: " + player);
        if(computer === player ) {
            console.log("It's a tie!")
        }
        else if(
            player === 'paper' && computer === 'rock' 
            || player === 'scissors' && computer === 'paper'
            || player === 'rock' && computer === 'scissors'
        ){
            console.log("Human wins!");
            humanScore++;
        }
        else {
            console.log("Computer wins!");
            computerScore++;
        }
    }

    for(let i = 0; i < 5; i++) {
        console.log("Round: " + (i + 1))
        playRound(getComputerChoice(), getHumanChoice())
    }

    //added for final result
    if(computerScore > humanScore) { console.log("Computer wins! " + computerScore)}
    else if(humanScore > computerScore) { console.log("Human wins! " + humanScore)}
    else { console.log("It's a tie!")}
}

playGame();