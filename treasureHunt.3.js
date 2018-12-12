var treasureLocationOne = Math.floor(Math.random()*25);
var treasureLocationTwo = Math.floor(Math.random()*25);
var treasureLocationThree = Math.floor(Math.random()*25);
var bombLocationOne = Math.floor(Math.random()*25);
var bombLocationTwo = Math.floor(Math.random()*25);
var bombLocationThree = Math.floor(Math.random()*25);
var counter = 25;
var bombCounter = 0;
var treasureCounter = 0;
var gameOver = "Game over. Click 'play again' right now. Or else.";

//recursion. prevents bomb & treasure from being same random number/location
function setUpGame() {
  if (treasureLocationOne === treasureLocationTwo || treasureLocationOne === treasureLocationThree || treasureLocationOne === bombLocationOne || treasureLocationOne === bombLocationTwo || treasureLocationOne === bombLocationThree || treasureLocationTwo === treasureLocationThree || treasureLocationTwo === bombLocationOne || treasureLocationTwo === bombLocationTwo || treasureLocationTwo === bombLocationThree || treasureLocationThree === bombLocationOne || treasureLocationThree === bombLocationTwo || treasureLocationThree === bombLocationThree || bombLocationOne === bombLocationTwo || bombLocationOne === bombLocationThree || bombLocationTwo === bombLocationThree) {
    setUpGame();
  }
  return;
}

//when a box is clicked, the steps to change to emoji and counter
function checkPosition(id){
  document.getElementById(id).innerHTML = "&#128125";
  counter--;
  document.getElementById('counter').innerHTML = 'Clicks Left: ' + counter;
  if (treasureLocationOne === id) {
    document.getElementById(id).innerHTML = "&#127772";
    treasureCounter++;
    checkTreasureCounter();
  } else if (treasureLocationTwo === id) {
    document.getElementById(id).innerHTML = "&#127772";
    treasureCounter++;
    checkTreasureCounter();
  } else if (treasureLocationThree === id) {
    document.getElementById(id).innerHTML = "&#127772";
    treasureCounter++;
    checkTreasureCounter();
  } else if (bombLocationOne === id) {
    document.getElementById(id).innerHTML = "&#127774";
    bombCounter++;
    checkBombCounter();
  } else if (bombLocationTwo === id) {
    document.getElementById(id).innerHTML = "&#127774";
    bombCounter++;
    checkBombCounter();
  } else if (bombLocationThree === id) {
    document.getElementById(id).innerHTML = "&#127774";
    bombCounter++;
    checkBombCounter();
  }
}

//tracks number of treasures. win at 3.
function checkTreasureCounter() {
  if (treasureCounter === 3) {
    document.getElementById("counter").innerHTML = "You made it to the moon! Huzzah! Safety at last!";
    alert("Winner winner chicken dinner!! " + gameOver);
  }
}

//tracks number of bombs. lose at 3.
function checkBombCounter() {
  if (bombCounter === 3) {
    document.getElementById("counter").innerHTML = "Womp Womp. Better invest in some sunscreen.";
    alert("You lost, sucka! " + gameOver);
  }
}
//clicking play again button. returns all 'td' elements to default star
function playAgain() {
  let row = document.getElementsByTagName('td');
  for (let i = 0; i < row.length; i++) {
    row[i].innerHTML = '&#127775';
  }
  counter = 25;
  bombCounter = 0;
  treasureCounter = 0;
  document.getElementById("counter").innerHTML = 'Clicks Left: ' + counter;
}

/*one click per box - affects counter, bombCount, treasureCounter - window.addEventListener(wesbos1)
play again does not set up game again. all characters in same place
stop game at win or lose
css - dont want box size to change when column is all clicked*/
