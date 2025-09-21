"use strict";

var gBoard;
const WOOL = "⬜️";
const FLAG= "🚩"
// const arryNumbers = ['1','2','3'];
const BOOMS = "💣";

function init() {
  console.log("hello");

  gBoard = buildBoard();

  //   generateRandomHexColor();

  renderBoard(gBoard, ".board-container");
  //   var elBtn = document.querySelector(".modal");
  //   elBtn.style.display = "none";
  //   gGame.isOn = true;
  //   setInterval(renderChari, 5000);
}

function buildBoard() {
  const size = 8;
  const board = [];

  for (var i = 0; i < size; i++) {
    board.push([]);

    for (var j = 0; j < size; j++) {
      board[i][j] = WOOL;

      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        board[i][j] = WOOL;
      }
    }
  }
  board[5][3] =
    board[3][size - 1] =
    board[size - 1][1] =
    board[size - 1][size - 1] =
      BOOMS;

  // board[2][3] = board[1][3] = board[6][1] = BOOMS;
  return board;
}

// function gameOver() {
//   var elBtn = document.querySelector(".modal");
//   gGame.isOn = false;
//   elBtn.style.display = "block";

//   console.log("Game Over");
// }

// function restGame() {
//   gGhosts = [];
//   gGame.isOn = true;
//   init();
// }
