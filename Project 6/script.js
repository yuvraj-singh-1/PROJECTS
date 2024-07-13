'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const guessStart = function(message){
  document.querySelector('.guess-start').textContent = message ;
}

document.querySelector('.button-2').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    guessStart('No Number 🚫');
  } else if (guess === secretNumber) {
    guessStart('Correct Number 🎉');
    document.querySelector('html').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.backgroundColor = '#60b347';
    document.querySelector('.question-mark').style.width = '300px';
    document.querySelector('.question-mark').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.value-score-2').textContent = highscore;
    }
  }
    else if(guess!==secretNumber){
      if (score > 1) {
       guessStart(guess>secretNumber ?
          'Your Guess is High ⚡':'Your Guess is Low 🔻');
        score--;
        document.querySelector('.value-score-1').textContent = score;
      } else {
        guessStart('GAME OVER ☠️');
        document.querySelector('.value-score-1').textContent = 0;
      }
    }
});
document.querySelector('.button').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.question-mark').textContent = '?';
  guessStart('Start Guessing...');
  document.querySelector('.value-score-1').textContent = score;
  document.querySelector('html').style.backgroundColor = ' rgb(18, 18, 18)';
  document.querySelector('.guess').style.backgroundColor = ' rgb(18, 18, 18)';
  document.querySelector('.question-mark').style.width = '150px';
  document.querySelector('.guess').value = undefined;
});
