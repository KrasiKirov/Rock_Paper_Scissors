function getComputerChoice() {
    let choice = [ 'rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * computer.length);
    return choice[index];
}


let player_wins = 0;
let computer_wins = 0;

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'It is a tie! No one wins.';
        }
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        }
        if (computerSelection === 'scissors') {
            return 'You win! Rock beats scissors.';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats rock.';
        }
        if (computerSelection === 'paper') {
            return 'It is a tie! No one wins.';
        }
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beat paper.';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors.';
        }
        if (computerSelection === 'paper') {
            return 'You win! Scissors beat paper.';
        }
        if (computerSelection === 'scissors') {
            return 'It is a tie! No one wins.';
        }
    }
    else {
        print('Please enter a valid input!');
    }
}

function game() {
    while  (player_wins && computer_wins <5) {
        let computerSelection = getComputerChoice();
        let playerSelection = str(prompt('Enter your move: ')).toLowerCase();
        if ((oneRound(playerSelection, computerSelection)).slice(4,7) == 'win') {
            player_wins++
        } 
        else if ((oneRound(playerSelection, computerSelection)).slice(4,8) == 'lose') {
            computer_wins++
        }
    }
    if (player_wins == 5) {
        print('You win 5 to ', str(computer_wins), ' . Congratulations!')
    }
    else {
        print('You lose ', player_wins, ' to 5. Congratulations!')
    }
    
}

  
