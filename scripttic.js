const board = document.getElementById('board');
const endScreen = document.getElementById('end-screen');
const endMessage = document.getElementById('end-message');
let currentPlayer = 'X';
let moves = 0;
let gameEnd = false;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (!gameEnd && !board.children[index].innerHTML) {
        board.children[index].innerHTML = currentPlayer;
        moves++;
        if (checkWin()) {
            endMessage.textContent = `${currentPlayer} wins!`;
            showEndScreen();
        } else if (moves === 9) {
            endMessage.textContent = `It's a draw!`;
            showEndScreen();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
            board.children[a].innerHTML &&
            board.children[a].innerHTML === board.children[b].innerHTML &&
            board.children[a].innerHTML === board.children[c].innerHTML
        ) {
            return true;
        }
    }
    return false;
}

function showEndScreen() {
    endScreen.style.display = 'flex';
    gameEnd = true;
}

function newGame() {
    for (let i = 0; i < 9; i++) {
        board.children[i].innerHTML = '';
    }
    currentPlayer = 'X';
    moves = 0;
    gameEnd = false;
    endScreen.style.display = 'none';
}
