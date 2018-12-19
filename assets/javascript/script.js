 // Creates an alphabet array
 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
     't', 'u', 'v', 'w', 'x', 'y', 'z'
 ];

 // Creating variables to hold the number of wins, losses, and ties. They start at 0.
 var wins = 0;
 var losses = 0;
 var guessesLeft = 5;


 // Create variables that hold references to the places in the HTML where we want to display things.
 var yourWins = document.getElementById("your-wins");
 let yourlosses = document.getElementById("your-losses");
 let yourGuessesLeft = document.getElementById("guesses-left");
 let lettersGuessed = document.getElementById("letters-guessed");
 let yourGuess = document.getElementById("your-guess");
 let computerGuess = document.getElementById("computer-guess");
 let button = document.getElementById("guess-again");




 // Randomly chooses a choice from the options array. This is the Computer's guess.
 let randomLetter = alphabet[Math.floor(Math.random() * 25)];
 console.log(randomLetter);




 // var guess = saved input lowercase
 let userInput = prompt("Guess what letter I'm thinking of...");
 let guess = userInput.toLowerCase();

 if (guess === randomLetter) {
     console.log("same!");
     wins++;

 } else {
     losses++;
     lettersGuessed.append(guess + " ");

 }



 

 function myFunction() {
    userInput = prompt("Guess what letter I'm thinking of...");

};

 //  function myFunction() {
 //     document.getElementById("demo").innerHTML = "Hello World";
 //   }

 // Display the user and computer guesses, and wins/losses/ties.
 yourWins.textContent = wins;
 yourlosses.textContent = losses;
 yourGuessesLeft.textContent = guessesLeft;
 // lettersGuessed.textContent = guess.append(guess);
 computerGuess.textContent = randomLetter;
 yourGuess.textContent = guess;