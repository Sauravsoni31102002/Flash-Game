const puzzleContainer = document.getElementById('puzzle-container');
let tiles = [];

// Initialize the puzzle
function init() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers = shuffleArray(numbers);

  for (let i = 0; i < numbers.length; i++) {
    const tile = createTile(numbers[i]);
    tiles.push(tile);
    puzzleContainer.appendChild(tile);
  }
}

// Create a tile element
function createTile(number) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.innerText = number !== 9 ? number : ''; // Leave the last tile empty
  tile.addEventListener('click', () => moveTile(tile));
  return tile;
}

// Shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Move tile
function moveTile(clickedTile) {
  const emptyTile = document.querySelector('.tile:empty');
  if (isAdjacent(clickedTile, emptyTile)) {
    const tempText = clickedTile.innerText;
    clickedTile.innerText = '';
    emptyTile.innerText = tempText;
  }
  checkWin();
}

// Check if two tiles are adjacent
function isAdjacent(tile1, tile2) {
  const tile1Index = tiles.indexOf(tile1);
  const tile2Index = tiles.indexOf(tile2);
  const rowDiff = Math.abs(Math.floor(tile1Index / 3) - Math.floor(tile2Index / 3));
  const colDiff = Math.abs((tile1Index % 3) - (tile2Index % 3));
  return (rowDiff === 1 && colDiff === 0) || (colDiff === 1 && rowDiff === 0);
}

// Check if the puzzle is solved
function checkWin() {
  let isSolved = true;
  for (let i = 0; i < tiles.length - 1; i++) {
    if (parseInt(tiles[i].innerText) !== i + 1) {
      isSolved = false;
      break;
    }
  }
  if (isSolved) {
    alert('Congratulations! You solved the puzzle!');
  }
}

// Shuffle the puzzle
function shuffle() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers = shuffleArray(numbers);

  for (let i = 0; i < numbers.length; i++) {
    tiles[i].innerText = numbers[i] !== 8 ? numbers[i] : ''; // Leave the last tile empty
  }
  checkWin(); // Check if the initial configuration is already solved
}

// Initialize the puzzle
init();
