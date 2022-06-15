const computerSelection = computerPlay();
var playerSelection = playerChoice();

function playerChoice() {
    document.getElementById('choices').addEventListener('click', function(evt) {
        playerSelection = evt.target;
        if (playerSelection.id === 'rock') {
            document.getElementById('player').innerHTML = 'Player = ' + 'rock';
        } else if (playerSelection.id === 'paper') {
            document.getElementById('player').innerHTML = 'Player = ' + 'paper';
        } else if (playerSelection.id === 'scissors') {
            document.getElementById('player').innerHTML = 'Player = ' + 'scissors';
        } 
        playerSelection = playerSelection.value;
        // console.log(playerSelection);
    }, false);
    return playerSelection;
}

function computerPlay () {
    let arrayItems = ['rock', 'paper', 'scissors'];
    let randomChoice = arrayItems[Math.floor(Math.random() * arrayItems.length)];
    // return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return randomChoice;
}

// rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer Wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player Wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player Wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer Wins!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player Wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer Wins!';
    } else {
        return 'It\'s a draw! ';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        // const playerSelection = computerPlay();
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        // Call playRound function, passing in newly returned values
        // from playRound and computerPlay functions
        const currentRound = playRound(playerSelection, computerSelection);
        // Log result to HTML element and console
        // console.log(playerSelection); // "rock" | "paper" | "scissors"
        // console.log(computerSelection); // "rock" | "paper" | "scissors"
        const result = document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection);
        const computer = document.getElementById("computer").innerHTML = 'Computer = ' + computerSelection;
        const player = document.getElementById("player").innerHTML = 'Player = ' + playerSelection;
        console.log(currentRound);  // "Computer Wins!" | "Player Wins!" | "It's a draw! "
        console.log(player);
        console.log(computer);
        return {
            result, computer, player
        };
    }
}

let play = document.getElementById('play');

play.addEventListener('click', function() {
    let startGame = game();
    return startGame;
})

// Test area //

// let counter = 0
// setInterval(() => {
//     // counter++
//     document.getElementById('score').innerHTML = counter++;
//     console.log(counter)
// }, 1000);

// document.getElementById('result').innerHTML = playRound(playerSelection, computerSelection);
// document.getElementById("computer").innerHTML = 'Computer = ' + computerSelection;
// document.getElementById('player').innerHTML = 'Player = ' + playerSelection;
// document.getElementById('score').innerHTML = game();

// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
// console.log(playerSelection);
// console.log(game());