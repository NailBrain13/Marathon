const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#DC143C','#F4A460', '#8A2BE2', '#C0C0C0', '#708090', '#FF8C00', '#00FF7F'];

let time = 0;
let score = 0;


function getRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function setColor(element) {
  const color = getRandomIndex(colors);
  element.style.background = `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`;
}

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
}
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomDot();
  };
})


function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomDot();
  timeEl.innerHTML = `00:${time}`;

}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let cur = --time;
  if (cur < 10) {
    cur=`0${cur}`
  }
  setTime(cur);
  }

}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML=`<h1>Итоговый счет: <span class="primary">${score}</span></h1>`
}

function createRandomDot() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const {width,height} = board.getBoundingClientRect();

  const x = getRandomNumber(0,width - size);
  const y = getRandomNumber(0,height - size);

  circle.classList.add('circle');
  setColor(circle);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function winGame() {
  function killClick() {
    const circle = document.querySelector('.circle');
    if (circle) {
      circle.click();
    }
  };

  setInterval(killClick, 75);
}
