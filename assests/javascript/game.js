//the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

   //There will be four crystals displayed as buttons on the page. 
   $(":button")

//    * The player will be shown a random number at the start of the game. // * The random number shown at the start of the game should be between 19 - 120.


var minNumber = 19;
var maxNumber = 120

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var win = 0;
var loss = 0;
var goal = 36;
var total = 0;
var redValue = randomNumberFromRange(19, 120)//6;
var pinkValue = randomNumberFromRange(19, 120)//6;

// <div id='redcrystal'>...</div>

function resetGame() {
    //...
}

function checkForWinOrLoss() {
    // .... compare total to goal
    // if > goal -> loss++ then resetGame()
    // if === goal -> win++ then resetGame()
    // otherwise do nothing
}

$("#redcrystal").on("click", function() {
    total = total + redValue;
    checkForWinOrLoss();
})
$("#pinkcrystal").on("click", function() {
    total = total + pinkValue;
    checkForWinOrLoss();
})

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

  //There will be four crystals displayed as buttons on the page. 
  $(":button")

//I would just assign a class to the button...

var newButton = $("<button>");
newButton.addClass("ButtonClass");

$("#buttonId").button({

    icons: {primary: null},
    text: false

}).addClass("ButtonClass");
//Then your CSS class could look something like this...

.ButtonClass
{
    background-image: url(../images/Button.png);   
    background-repeat: no-repeat; 
    border: none;    
}



    //  * Your game will hide this amount until the player clicks a crystal.

    //  * When they do click one, update the player's score counter.

    <button onclick="myFunction()">Click me</button>

    <script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
</script>

or document.querySelector("#gameID").innerHTML = htmlGame;

var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
//  * When they do click one, update the player's score counter.

if (guess === computerRandom) {
  wins++;
  won = true;
  tries=9;
}
if (guessesSoFar == []) {
  guessesSoFar = guess;
} 
else {
  guessesSoFar = guessesSoFar + "," + guess;
}
tries++;
guessLeft--;


if (tries > 8) {
 guessLeft = 9;
 guessesSoFar = "";
 tries = 0;
    
 if (won === false) {
   losses++;
 } 
 else {
   won = false;
 }
}

//    * The player wins if their total score matches the random number from the beginning of the game.

if (playerClicks === computerRandom) {
    wins++;
    won = true;
    tries=9;
  }


//    * The player loses if their score goes above the random number.

if (playerClicks === computerRandom) {
    wins++;
    won = true;
    tries=9;
  }
//    * The game restarts whenever the player wins or loses.

    //  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

var htmlGame =
  "<p>Wins " + wins + "</p>" + 
  "<p>Losses " + losses + "</p>";

document.querySelector("#gameID").innerHTML = htmlGame;
}


 //  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// * Each crystal should have a random hidden value between 1 - 12.

var minNumber = 1;
var maxNumber = 12;

var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}