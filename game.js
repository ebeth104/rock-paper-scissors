function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors? : ");

    choices = ["rock", "paper", "scissors"]

    if (choices.includes(humanChoice.toLowerCase())) {
        return humanChoice.toLowerCase()
    }
    else {
        return null
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "rock" && computerChoice == "scissors")  || 
            (humanChoice == "paper" && computerChoice == "rock") || 
            (humanChoice == "scissors" && computerChoice == "paper")){
                humanScore += 1;
                console.log("You win this round! ", humanChoice, " beats ", computerChoice);
        }
        else if ((computerChoice == "rock" && humanChoice == "scissors")  || 
            (computerChoice == "paper" && humanChoice == "rock") || 
            (computerChoice == "scissors" && humanChoice == "paper")) {
                computerScore += 1;
                console.log("You lost this round. ", computerChoice, " beats ", humanChoice);
            }
        else if (humanChoice == computerChoice){
            console.log("It's a tie!")
        }
        else {
            console.log("Invalid input! Your choices are - rock, paper or scissors");
        }
    }
    
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Your score: ", humanScore, " Computer Score: ", computerScore)
    if (humanScore > computerScore) {
        return "You Won this game!";
    }
    else if (computerScore > humanScore) {
        return "You lost this game :(";
    }
    else if (humanScore == computerScore) {
        return "This game was a tie";
    }
}

console.log(playGame());

