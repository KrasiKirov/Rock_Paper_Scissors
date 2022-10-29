const choice = ['rock','paper','scissors']
const winners = []


function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function getPlayerChoice() {
    let input = prompt('Enter your move: Rock, Paper or Scissors? ');
    while (input == null) {
        input = prompt('Enter your move: Rock, Paper or Scissors? ');
    }
    input = input.toLowerCase()
    while (!choice.includes(input)) {
        input = prompt('Enter your move: Rock, Paper or Scissors? Spelling needs to be exact.')
        while (input == null) {
            input = prompt('Enter your move: Rock, Paper or Scissors? ');
        }
        input = input.toLowerCase()
    }
    return input 
}

let player_wins = 0;
let computer_wins = 0;

function oneRound(playerSelection, computerSelection) {  
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

function playRound(round) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let winner = oneRound(playerSelection, computerSelection);
    winners.push(winner)
    logRound(playerSelection, computerSelection, winner, round);
}
function game() {
    for (let i = 1; i <=5; i++) { 
        playRound(i)    
    }
    document.querySelector('button').textContent = 'Play new game';
    countWins()
}

function countWins() {
    let playerWins = winners.filter((element) => element == 'Player').length;
    let computerWins = winners.filter((element) => element == 'Computer').length;
    let ties = winners.filter((element) => element == 'Tie').length;
    console.log('Results: ');
    console.log('Player wins: ', playerWins)
    console.log('Computer wins: ', computerWins);
    console.log('Ties: ', ties);
}

function logRound(playerSelection, computerSelection, winner, round) {
    console.log('Round: ', round)
    console.log("Player's choice: ", playerSelection);
    console.log("Computer's choice: ", computerSelection);
    console.log(winner, ' won the round.');
    console.log('------------------------')
}
