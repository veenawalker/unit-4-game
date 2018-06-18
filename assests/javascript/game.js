

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
    $("#totalScore").html(total);
    if (totalScore > randomNumber) {
        losses++
        youLose();
     }
     else if (totalScore === randomNumber) {
             wins++
             youWin();
        
     }
})
$("#crystal1").on("click", function() {
    total = total + triangleValue;
    // checkForWinOrLoss();
    console.log(total);
    $("#totalScore").html(total);
    if (totalScore > randomNumber) {
        losses++
        youLose();
     }
     else if (totalScore === randomNumber) {
             wins++
             youWin();
        
     }
})

$("#crystal3").on("click", function() {
    total = total + threeValue;
  
    console.log(total)
    $("#totalScore").html(total);
    if (totalScore > randomNumber) {
        losses++
        youLose();
     }
     else if (totalScore === randomNumber) {
             wins++
             youWin();
        
     }
})
$("#crystal4").on("click", function() {
    total = total + hexValue;
    // checkForWinOrLoss();
    console.log(total)
    $("#totalScore").html(total);
    if (totalScore > randomNumber) {
        losses++
        youLose();
     }
     else if (totalScore === randomNumber) {
             wins++
             youWin();
        
     }
})

function newGame() {
    randomNumberFromRange = 0;
    totalScore = 0;
    $("#randomNumber").text(randomNumber);
    $("#totalScore").text(totalScore);
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


