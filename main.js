// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let oneEl = document.getElementById("1-out");
let twoEl = document.getElementById("2-out");
let threeEl = document.getElementById("3-out");
let fourEl = document.getElementById("4-out");
let fiveEl = document.getElementById("5-out");
let sixEl = document.getElementById("6-out");
let diceEl = document.getElementById("output-dice");

// Count Variables
let numHeads = 0;
let numTails = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btnDice").addEventListener("click", diceClicked);

// Function
function btnClicked() {
  //Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

// Function Dice
function diceClicked() {
  //Generate a Random Number
  let randNum = Math.random() * 7;
  console.log(randNum);

  if (randNum < 1) {
    diceEl.innerHTML = "<img src='img/1.png' />";
    num1++;
    oneEl.innerHTML = num1;
  } else if (randNum < 2) {
    diceEl.innerHTML = "<img src='img/2.png' />";
    num2++;
    twoEl.innerHTML = num2; //
  } else if (randNum < 3) {
    diceEl.innerHTML = "<img src='img/3.png' />";
    num3++;
    threeEl.innerHTML = num3;
  } else if (randNum < 4) {
    diceEl.innerHTML = "<img src='img/4.png' />";
    num4++;
    fourEl.innerHTML = num4;
  } else if (randNum < 5) {
    diceEl.innerHTML = "<img src='img/5.png' />";
    num5++;
    fiveEl.innerHTML = num5;
  } else {
    diceEl.innerHTML = "<img src='img/6.png' />";
    num6++;
    sixEl.innerHTML = num6;
  }
}
