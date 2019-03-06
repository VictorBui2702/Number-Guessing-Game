let textBox = document.getElementById('textBox');
let guessButton = document.getElementById('guessButton');
let restartButton = document.getElementById('restartButton');
let generatedNumber = Math.floor(Math.random() * 100 + 1);
let tooLowAlert = document.getElementById('tooLowAlert');
let tooHighAlert = document.getElementById('tooHighAlert');
let correctAlert = document.getElementById('correctAlert');
let guessesRemaining = document.getElementById('guessesRemaining');
let previousGuesses = document.getElementById('previousGuesses');
let numberOfGuessesRemaining = 10;
let previousGuessesList = [];


guessButton.addEventListener("click", calculateOutput);
restartButton.addEventListener("click", NewCalculateOutput);

function calculateOutput() {
    // Subtract 1 from number of guesses remaining. 
    // If we are less than zero, we are out of guesses!!!
    // In this case, show an error message and quit.
    numberOfGuessesRemaining = numberOfGuessesRemaining - 1;
    let inputNumber = parseInt(textBox.value);
        if (!isNaN(textBox.value) && inputNumber > 0 && inputNumber < 100 && numberOfGuessesRemaining > 0) {
        if (inputNumber < generatedNumber) {
            tooLowAlert.style.display = "block";
            tooHighAlert.style.display = "none";
            correctAlert.style.display = "none";
            textBox.value = '';
        } else if (inputNumber === generatedNumber) {
            tooLowAlert.style.display = "none";
            tooHighAlert.style.display = "none";
            correctAlert.style.display = "block";
            textBox.value = '';
        } else if (inputNumber > generatedNumber) {
            tooLowAlert.style.display = "none";
            tooHighAlert.style.display = "block";
            correctAlert.style.display = "none";
            textBox.value = '';
        }
    } else if (numberOfGuessesRemaining < 0) {
        alert('You have exceeded number of your guesses');
        textBox.value = '';
    } else {
        alert('Please put a number between 1 and 100');
        textBox.value = '';
    }
    guessesRemaining.innerHTML = numberOfGuessesRemaining;
    previousGuessesList.push(inputNumber);
    previousGuesses.innerHTML = previousGuessesList.values(); 
}

function NewCalculateOutput() {
    numberOfGuessesRemaining = 10;
    textBox.value = '';
    tooLowAlert.style.display = "none";
    tooHighAlert.style.display = "none";
    correctAlert.style.display = "none";
    guessesRemaining.innerHTML = numberOfGuessesRemaining;
}



