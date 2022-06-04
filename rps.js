const playerSelection = computerPlay();
const computerSelection = computerPlay();

function computerPlay () {

    let arrayItems = ['rock', 'paper', 'scissors'];
    let randomChoice = arrayItems[Math.floor(Math.random() * arrayItems.length)];
    // return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return randomChoice;
}

// rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer Wins!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Player Wins!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player Wins!';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer Wins!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player Wins!';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer Wins!';
    } else {
        return 'It\'s a tie'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    return '';
}

// Testing area

document.getElementById('result').innerHTML = playRound(playerSelection, computerSelection);
document.getElementById("computer").innerHTML = 'Computer = ' + computerSelection;
document.getElementById('player').innerHTML = 'Player = ' + playerSelection;

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);
console.log(playerSelection);
console.log(game());