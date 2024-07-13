const score1El = document.querySelector(".score-1");
const score2El = document.querySelector(".score-2");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".number2");
const btnNew = document.querySelector(".number1");
const btnHold = document.querySelector(".number3");
const current1El = document.querySelector(".up-score-1");
const current2El = document.querySelector(".up-score-2");
const player1El = document.querySelector(".box-1");
const player2El = document.querySelector(".box-2");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;
  score1El.textContent = 0;
  score2El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;
  diceEl.classList.add("hidden");
  player1El.classList.remove("player-winner");
  player2El.classList.remove("player-winner");
  player1El.classList.add("player--active");
  player2El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.querySelector(`.up-score-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1El.classList.toggle("player--active");
  player2El.classList.toggle("player--active");
};

// score1El.textContent = 0;
// score2El.textContent = 0;
// diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice != 1 && dice != 6) {
      currentScore += dice;
      document.querySelector(`.up-score-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer - 1] += currentScore;
    document.querySelector(`.score-${activePlayer}`).textContent =
      scores[activePlayer - 1];
  }
  if (scores[activePlayer - 1] >= 50) {
    playing = false;
    diceEl.classList.add("hidden");
    document
      .querySelector(`.box-${activePlayer}`)
      .classList.add("player-winner");
    document
      .querySelector(`.box-${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
