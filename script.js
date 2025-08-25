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

function maybeShowResult(){
    if (hasComputerMoved === true && hasUserMoved === true){
        showResult();
        gameOver = true;
    }
}

function showResult(){
    const comp = compMoveEl.textContent;
    const user = userMoveEl.textContent;

    if (comp === user) {
        result.textContent = "Game is tied!";
    } else if (
        (user === "rock" && comp === "scissor") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissor" && comp === "paper")
    ) {
        result.textContent = "You Win!";
    } else {
        result.textContent = "Computer Wins!";
    }

    gameOverMessage.style.display = "block";
    newGameButton.style.display = "inline-block";

    gameOver = true;
}