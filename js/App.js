import { Board } from "./Board.js";
import { MoveController } from "./MoveController.js";

function startGame() {

    board.origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < board.cells.length; i++) {
        board.cells[i].innerText = '';
        board.cells[i].addEventListener("click", board.soundOnClick, false);
        board.cells[i].addEventListener("click", move.turnClick, false);
    }
}

function restartGame() {

    board.soundOnRestart();
    startGame();
    board.player = "O";
    board.setMessage("It's " + board.player + "'s turn");
}

let board = new Board(3);
let move = new MoveController(board);
board.createTable();
board.cells = document.querySelectorAll(".square");
// board.backgroundSoundTheme();
startGame();
