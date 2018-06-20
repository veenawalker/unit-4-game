

var wins = 0;
var losses = 0;
var randomNumber;
var total = 0;
var diamondValue = randomNumberFromRange(1, 12);
var triangleValue = randomNumberFromRange(1, 12);
var threeValue = randomNumberFromRange(1, 12);
var hexValue = randomNumberFromRange(1, 12);

var randomNumber = randomNumberFromRange(19, 120);


//Random number function
function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
$("#randomNumber").text(randomNumber); 









// function checkForWinOrLoss() {
//     .... compare total to goal
//     if > goal -> loss++ then resetGame()
//     if === goal -> win++ then resetGame()
//     otherwise do nothing
// }

// //    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

$("#crystal2").on("click", function() {
    // total = total + diamondValue;
    total += diamondValue;
    // checkForWinOrLoss();
    console.log(total);
    console.log('total variable:', total);
    console.log('totalScore variable:', totalScore);
    $("#totalScore").html(total);
    if (total> randomNumber) {
        losses++
        youLose();
     }
     else if (total === randomNumber) {
             wins++
             youWin();
        
     }
})
$("#crystal1").on("click", function() {
    total = total + triangleValue;
    // checkForWinOrLoss();
    console.log(total);
    $("#totalScore").html(total);
    if (total > randomNumber) {
        losses++
        youLose();
     }
     else if (total === randomNumber) {
             wins++
             youWin();
        
     }
})

$("#crystal3").on("click", function() {
    total = total + threeValue;
  
    console.log(total)
    $("#totalScore").html(total);
    if (total > randomNumber) {
        losses++
        youLose();
     }
     else if (total === randomNumber) {
             wins++
             youWin();
        
     }
})
$("#crystal4").on("click", function() {
    total = total + hexValue;
    // checkForWinOrLoss();
    console.log(total)
    $("#totalScore").html(total);
    if (total > randomNumber) {
        losses++
        youLose();
     }
     else if (total === randomNumber) {
             wins++
             youWin();
        
     }
})

function newGame() {
    randomNumber = randomNumberFromRange(19, 120);
    diamondValue = randomNumberFromRange(1, 12);
    triangleValue = randomNumberFromRange(1, 12);
    threeValue = randomNumberFromRange(1, 12);
     hexValue = randomNumberFromRange(1, 12);

    total = 0;
    $("#randomNumber").text(randomNumber);
    $("#totalScore").text(total);
    $("#crystal1").attr( diamondValue);
    $("#crystal2").attr( triangleValue);
    $("#crystal3").attr(threeValue);
    $("#crystal4").attr(hexValue);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#winOrLose").text("");

   console.log(newGame);
}

$(".btn").on("click", function() {
    newGame();
});

function youWin() {
    $("#winOrLose").text("YOU WIN!");
    wins++;
    $("#wins").text(wins);
    newGame();
}

function youLose() {
    $("#winOrLose").text("YOU LOSE");
    losses++;
    $("#losses").text(losses);
    newGame();
}
 
//Player win or loose 
// if (totalScore > randomNumber) {
//    losses++
//    youLose();
// }
// else if (totalScore === randomNumber) {
//         wins++
//         youWin();
   
// }



// if (total === randomNumber) {
//     wins++;
 
//   }


//    * The player loses if their score goes above the random number.

// if (total === randomNumber) {
//     wins++;
// }
    

// function resetGame {

// var newButton = $("<button>");
// newButton.addClass("ButtonClass");

// $("#buttonId").button({

//     icons: {primary: null},
//     text: false

// }).addClass("ButtonClass");
// //Then your CSS class could look something like this...

// .ButtonClass
// {
//     background-image: url(../images/Button.png);   
//     background-repeat: no-repeat; 
//     border: none;    
// }





//     <button onclick="myFunction()">Click me</button>

//     <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// </script>

// or document.querySelector("#gameID").innerHTML = htmlGame;

// var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    


// if (guess === computerRandom) {
//   wins++;
//   won = true;
//   tries=9;
// }
// if (guessesSoFar == []) {
//   guessesSoFar = guess;
// } 
// else {
//   guessesSoFar = guessesSoFar + "," + guess;
// }
// tries++;
// guessLeft--;


// if (tries > 8) {
//  guessLeft = 9;
//  guessesSoFar = "";
//  tries = 0;
    
//  if (won === false) {
//    losses++;
//  } 
//  else {
//    won = false;
//  }
// }

// //    * The player wins if their total score matches the random number from the beginning of the game.

// if (playerClicks === computerRandom) {
//     wins++;
//     won = true;
//     tries=9;
//   }


// //    * The player loses if their score goes above the random number.

// if (playerClicks === computerRandom) {
//     wins++;
//     won = true;
//     tries=9;
//   }
// //    * The game restarts whenever the player wins or loses.

//     //  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// //    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// var htmlGame =
//   "<p>Wins " + wins + "</p>" + 
//   "<p>Losses " + losses + "</p>";

// document.querySelector("#gameID").innerHTML = htmlGame;
// }


//  //  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// // * Each crystal should have a random hidden value between 1 - 12.

// var minNumber = 1;
// var maxNumber = 12;

// var randomNumber = randomNumberFromRange(minNumber, maxNumber);

// function randomNumberFromRange(min,max)
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// var htmlGame =
//   "<p>Wins " + wins + "</p>" + 
//   "<p>Losses " + losses + "</p>" +
// //   "<h3>"randomNumber" + "randomNumberFromRange "</h3>" 
//   "<p>Your guesses so far " + guessesSoFar + "</p>";

// document.querySelector("#gameID").innerHTML = htmlGame;
