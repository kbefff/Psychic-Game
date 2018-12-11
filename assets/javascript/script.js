


// var randomNumber = generate a random number between 0 and 24
var randomNumber = Math.floor(Math.random() * 25);
console.log(randomNumber);

// var alphabet = alphabet array 
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var randomLetter = alphabet[randomNumber];

// var randomLetter = aphabet[randomNumber]
console.log(randomLetter);

var userInput = prompt("Guess what letter I'm thinking of...");

// var guess = saved input lowercase
var guess = userInput.toLowerCase();


if (guess == randomLetter) {
    console.log("you got it!");
}


else {


}


// if guess === randomLetter, print "you win!", 
// irease "wins", 
// hide "your guesses so far", 
// restart




// else { add guess to "your guesses so far"}, 
// increase "loses", 
// if loses = 10, print "you lose!"




// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).




