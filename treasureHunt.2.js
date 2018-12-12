var treasureLocation = Math.floor(Math.random()*25);
var bombLocation = Math.floor(Math.random()*25);
var counter = 25;
var gameOver = "Game over. Click 'play again' right now. Or else.";

//recursion. prevents bomb & treasure from being same random number/location
function setUpGame() {
  if (bombLocation === treasureLocation) {
    setUpGame();
  }
  return;
}

//when a box is clicked, the steps to change to emoji and counter
function checkPosition(id){
  document.getElementById(id).innerHTML = "&#128125";
  counter--;
  document.getElementById('counter').innerHTML = 'Clicks Left: ' + counter;
  if (treasureLocation === id) {
    document.getElementById(id).innerHTML = "&#127772";
    document.getElementById("counter").innerHTML = "You made it to the moon! Huzzah! Safety at last!";
    alert("Winner winner chicken dinner!! " + gameOver);
  } else if (bombLocation === id) {
    document.getElementById(id).innerHTML = "&#127774";
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
  document.getElementById("counter").innerHTML = 'Clicks Left: ' + counter;
  setUpGame();
}

//DOESNT WORK (if(checkPosition(id)); if(document.getElById=unicode x 3); )
//stop counter from going below 0 and stop multiple clicks in one box
/*function disableOnclick() {
  if (document.getElementById(id).innerHTML = "&#127774"; || document.getElementById(id).innerHTML = "&#127772" ||document.getElementById(id).innerHTML = "&#128125") {
    JQUERY???
  }
}*/
