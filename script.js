'use strict';
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const diceIMG = document.querySelector('.dice');
const Rolldicebtn = document.querySelector('.btn--roll');
const currentscore_0 = document.getElementById('current--0');
const currentscore_1 = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
let current,
  activeplayer = 0;
let playing = true;
let score = [0, 0];
const switchPlayer = function () {
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--active');
  current = 0;
  document.getElementById(`current--${activeplayer}`).textContent = current;
  activeplayer = activeplayer == 0 ? 1 : 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--active');
};
diceIMG.classList.add('hidden'); //in the first of the game the dice should be hidden
// this event handler just do the print of random dices
Rolldicebtn.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceIMG.classList.remove('hidden');
    console.log(dice);
    diceIMG.src = `image/dice-${dice}.png`;
    if (dice !== 1) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--active');
      current += dice;
      document.getElementById(`current--${activeplayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += current;
    document.querySelector(`#score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 40) {
      diceIMG.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
newBtn.addEventListener('click', function () {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentscore_1.textContent = 0;
  currentscore_0.textContent = 0;
  diceIMG.classList.add('hidden');
  document
    .querySelector('.player--0')
    .classList.remove('player--winner', 'player--active');
 
  document
    .querySelector('.player--1')
    .classList.remove('player--winner', 'player--active'); 
  playing = true;
  score = [0, 0];
  current = 0
  activeplayer = 0;;
  document.querySelector('.player--0').classList.add('player--active');
});
