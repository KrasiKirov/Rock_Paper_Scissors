let player = prompt('What are you going to play?');
let choice = [ 'rock', 'paper', 'scissors']
let wins_player = 0;
let wins_computer = 0;


while (wins_player < 6 || wins_computer < 6) {
    let index = Math.floor(Math.random() * computer.length);
    let computer = choice[index];
    let player = prompt('What are you going to play?');
    if (player === 'rock') {
        if (computer === 'rock') {
            print ('tie');
        }
        if (computer === 'paper') {
            print ('You lose!');
            wins_computer++;
        }
        if (computer === 'scissors') {
            print ('You win');
            wins_player++;
        }
    }
    else if (player === 'paper') {
        if (computer === 'rock') {
            print ('You win')
            wins_player++
        }
        if (computer === 'paper') {
            print ('tie')
        }
        if (computer === 'scissors') {
            print ('You lose!')
            wins_computer++
        }
    }
    else if (palyer === 'scissors') {
        if (computer === 'rock') {
            print ('You lose!')
            wins_computer++
        }
        if (computer === 'paper') {
            print ('You win')
            wins_player++
            
        }
        if (computer === 'scissors') {
            print ('tie')
        }
    }
    else {
        print('Please enter a valid input!');
    }
}

if (player_wins == 5) {
    print('You have won the game!')
}
else if (computer_wins == 5) {
    print('The computer won the game...')
}