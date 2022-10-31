const choices = ['rock','paper','scissors']
const winners = []


function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    let choice = choices[index]
    
    document.querySelector(`.${choice}`).classList.add('active');

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove('active');
        }, 700);

    return choice;
}

function resetGame() {
    winners = []
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}
function startGame() {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => img.addEventListener('click', () => {
        if(img.id){
            playRound(img.id);
        }
    })
    );
}

function findWinner(playerSelection, computerSelection) {  
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    else if ((playerSelection === 'rock' && computerSelection ==='scissors') ||
    (playerSelection == 'paper' && computerSelection === 'rock') ||
    (playerSelection == 'scissors' && computerSelection === 'paper')) {
        return 'Player'
        }
    else {
        return 'Computer'
    }
    }

function playRound(playerSelection) {
    let wins = checkWins();

    if(wins>=5) {
        return;
    }

    let computerSelection = getComputerChoice();
    let winner = findWinner(playerSelection, computerSelection);
    winners.push(winner)
    tallyWins()
    displayRound(playerSelection, computerSelection, winner)
    wins = checkWins();
    if(wins==5) {
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winners.filter((element) => element == 'Player').length;

    if (playerWins == 5) {
        document.querySelector('.winner').textContent = 'Congratulations, you won 5 games !';
    }
    else {
        document.querySelector('.winner').textContent = ' Unfortunate ... The computer won 5 games.';
    }
    document.querySelector('.reset').style.display = 'flex';
}


function checkWins() {
    let playerWins = winners.filter((element) => element == 'Player').length;
    let computerWins = winners.filter((element) => element == 'Computer').length;
    return Math.max(playerWins, computerWins);

}

function countWins() {
    let playerWins = winners.filter((element) => element == 'Player').length;
    let computerWins = winners.filter((element) => element == 'Computer').length;
    let ties = winners.filter((element) => element == 'Tie').length;

}

function tallyWins() {
    let playerWins = winners.filter((element) => element == 'Player').length;
    let computerWins = winners.filter((element) => element == 'Computer').length;
    let ties = winners.filter((element) => element == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function displayRound(playerSelection, computerSelection, winner) {
    document.querySelector('.playerChoice').textContent = `Your move: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `The computer's move: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    displayRoundWinner(winner);
}   

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = 'You won the Round !';
    }
    else if (winner == 'Computer') {
        document.querySelector('.winner').textContent = 'The computer won the Round.';
    }
    else {
        document.querySelector('.winner').textContent = "It's a tie !";
    }
}

startGame();