import { Board } from "./Board.js";

export class MoveController {

    constructor(board){
        this.board = board;

        this.turn = function(squareId) {
            this.board.origBoard[squareId] = this.board.player;
            document.getElementById(squareId).innerText = this.board.player;
        };

        this.switchTurn = function() {

            if (this.board.checkWin()) {
                this.board.gameEnd();
            } else {
                if (this.board.player === "X") {
                    this.board.player = "O";
                } else {
                    this.board.player = "X";
                }
                this.board.setMessage("It's " + this.board.player + "'s turn");
            }
        }
    }

    turnClick(square) {

        let squareId = square.target.id;

        if (document.getElementById(squareId).innerText === '') {
            this.turn(square.target.id);
            this.switchTurn();
        } else {
            this.board.setMessage("Pick other square");
        }
    }
}