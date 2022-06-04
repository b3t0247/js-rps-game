const randomChoice = ['rock', 'paper', 'scissors'];

function computerPlay () {
    // Math.floor(Math.random() * array.length)
    // Math.floor returns a whole number - Math.random() returns a float between 0 and 1
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

document.querySelector('p').innerHTML = computerPlay();

// Test area
console.log(Math.random(randomChoice) * toString().length);
console.log(toString(randomChoice).length);

