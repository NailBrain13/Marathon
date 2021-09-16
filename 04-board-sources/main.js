const board = document.querySelector('#board');

const colors = ['#DC143C','#F4A460', '#8A2BE2', '#C0C0C0', '#708090', '#FF8C00', '#00FF7F'];

const squares = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

let squareNumber;

squareNumber = setSquareSize();

function setSquareSize() {
  const size = getRandomIndex(squares);

  return squareNumber = +size;
}

for (let i = 0; i< squareNumber ; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () =>
    setColor(square)
  )

  square.addEventListener('mouseleave', () =>
    removeColor(square)
  )

  board.append(square);
}

function setColor(element) {
  const color = getRandomIndex(colors);
  element.style.backgroundColor = color;
  element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
