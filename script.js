let low, high, secret, steps;

/* 🔊 SOUND EFFECTS */
const correctSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

/* START GAME */
function startGame() {
  document.getElementById("intro").style.display = "none";
  restartGame();
}

/* RESET */
function restartGame() {
  low = 1;
  high = 100;
  secret = Math.floor(Math.random() * 100) + 1;
  steps = 0;

  document.getElementById("range").innerText = "Range: 1 - 100";
  document.getElementById("message").innerText = "Find the hidden number";
  document.getElementById("steps").innerText = "Steps: 0";
}

/* MAIN GAME LOGIC */
function makeGuess() {
  let guess = Number(document.getElementById("guessInput").value);

  if (guess < low || guess > high) {
    alert("❌ Stay within range!");
    return;
  }

  steps++;
  document.getElementById("steps").innerText = "Steps: " + steps;

  if (guess === secret) {
    correctSound.play();
    document.getElementById("message").innerText = "🎉 Correct! You found it!";
  } else if (guess < secret) {
    wrongSound.play();
    low = guess + 1;
    document.getElementById("message").innerText = "Too low!";
  } else {
    wrongSound.play();
    high = guess - 1;
    document.getElementById("message").innerText = "Too high!";
  }

  document.getElementById("range").innerText = `Range: ${low} - ${high}`;
}
