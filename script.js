let playerScore = 0
let computerScore = 0
const player = document.querySelector(".player-score")
const computer = document.querySelector(".computer-score")
const roundResults = document.querySelector(".round-results")
const popup = document.getElementById('popup');
const popupMessage = document.querySelector('.popup-message');


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) +1;
    switch (choice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    player_value = playerSelection.toUpperCase()
    computer_value = computerSelection.toUpperCase()
        
    if (player_value == computer_value){
        return "Draw! " + playerSelection + " ties " + computerSelection;
    }
    else if ((player_value === "ROCK" && computer_value === "SCISSORS") ||
            (player_value === "PAPER" && computer_value === "ROCK") ||
            (player_value === "SCISSORS" && computer_value === "PAPER")){
        playerScore +=1;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else{
        computerScore +=1;
        return "You Lose! " + computerSelection + " beats " + playerSelection;;
    }
}
    
function updateScore(){ 
    player.textContent = `Player: ${playerScore}`
    computer.textContent = `Computer: ${computerScore}`
}


function resetGame(){
    popup.style.display = "none"
    playerScore = 0
    computerScore = 0
    roundResults.innerHTML = "The first to score 5 points is the winner"
    updateScore()
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        roundResults.innerText = playRound(button.innerText,getComputerChoice());
        updateScore()

        if (playerScore >=5){
            popup.style.display = "block"
            popupMessage.textContent = "You Win!"
        }
        else if (computerScore >=5){
            popup.style.display = "block"
            popupMessage.textContent = "You Lose!"
        }
    });
  });
  
const messageButton = document.querySelector(".restart-button")
messageButton.addEventListener('click', resetGame)

  
