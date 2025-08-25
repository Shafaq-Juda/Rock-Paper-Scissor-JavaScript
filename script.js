let result = document.getElementById("result");
let compMoveEl = document.getElementById("comp-move");
let userMoveEl = document.getElementById("user-move");
let gameOverMessage = document.getElementById("game-over-message");
let newGameButton = document.getElementById("new-game-button");

let moves = ["rock", "paper", "scissor"];

let hasComputerMoved = false;
let hasUserMoved = false;
let gameOver = false;

function getRandomMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function computerMove(){
    if (gameOver === true) {
        return;
    }

    let move = getRandomMove();
    compMoveEl.textContent = move;
    hasComputerMoved = true;
    maybeShowResult();
}

function userMove() {
    if (gameOver === true) {
        return;
    }

    let move = getRandomMove();
    userMoveEl.textContent = move;
    hasUserMoved = true;
    maybeShowResult();
}