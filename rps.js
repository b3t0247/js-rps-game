// const playerSelection = computerPlay();
const playerSelection = playerChoice();
const computerSelection = computerPlay();

// function playerChoice() {
//     let choice = document.getElementById("playerChoice").value;
//     return choice;
// }

function playerChoice() {
    var 
    if () {

    }
}

function computerPlay () {
    let arrayItems = ['rock', 'paper', 'scissors'];
    let randomChoice = arrayItems[Math.floor(Math.random() * arrayItems.length)];
    // return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return randomChoice;
}

// rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.
function playRound(playerSelection, computerSelection) {
    // if (playerSelection === 'rock' && computerSelection === 'paper') {
    //     return 'Player: ' + playerSelection + '\n' + 'Computer: ' + computerSelection + '\n' + 'Computer Wins!';
    // } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    //     return 'Player: ' + playerSelection + '\n' + 'Computer: ' + computerSelection + '\n' + 'Player Wins!';
    // } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    //     return 'Player: ' + playerSelection + '\n' + 'Computer: ' + computerSelection + '\n' + 'Player Wins!';
    // } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    //     return 'Player: ' + playerSelection + '\n' + 'Computer: ' + computerSelection + '\n' + 'Computer Wins!';
    // } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    //     return 'Player: ' + playerSelection + '\n' + 'Computer: ' + computerSelection + '\n' + 'Player Wins!';
    // } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    //     return 'Player: ' + playerSelection + '\n' + 'Computer: ' + computerSelection + '\n' + 'Computer Wins!';
    // } else {
    //     return 'It\'s a draw! ' + '\n' + 'Player = ' + playerSelection + '\n' + 'Computer = ' + computerSelection;
    // }

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
        // Log result to console and HTML
        console.log(currentRound);
        console.log(playerSelection);
        console.log(computerSelection);
        const result = document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection);
        const computer = document.getElementById("computer").innerHTML = 'Computer = ' + computerSelection;
        const player = document.getElementById("player").innerHTML = 'Player = ' + playerSelection;
        return {
            result, computer, player
        };
    }
}

let play = document.getElementById('play');

play.addEventListener('click', function() {
    let startGame = game();
    // let startGame = document.getElementById('score').innerHTML = game();
    return startGame;
})

// let rock = document.getElementById('rock');

// rock.addEventListener('click', function() {
//     let startGame = game();
//     // let startGame = document.getElementById('score').innerHTML = game();
//     return startGame;
// })


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