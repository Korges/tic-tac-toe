import { Player } from "./Player.js";

export class Board {
    winCells = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    constructor(boardSize) {
        this.origBoard = [];
        this.boardSize = boardSize;
        this.player = "O";
        this.cells = null;
    }

    setMessage(msg) {
        document.getElementById("message").innerText = msg;
    }

    checkWin() {

        let result = false;

        for (let i = 0; i < this.winCells.length; i++) {
            if (this.checkRow(this.winCells[i])) {
                result = true;
            }
        }
        return result;
    }

    checkRow(row) {

        for (let j = 0; j < row.length; j++) {
            if (this.origBoard[row[j]] !== this.player) {
                return false;
            }
        }
        return true;
    }

    gameEnd() {

        for (let i = 0; i < this.cells.length; i++) {
            document.getElementById(i).removeEventListener('click', this.turnClick, false);
            document.getElementById(i).removeEventListener('click', this.soundOnClick, false);
        }
        this.setMessage("Player " + this.player + " won!");
    }

    createTable() {

        let mainTable = document.querySelector('.table');
        let tableRow;
        for (let i = 0; i < this.boardSize; i++) {
            tableRow = document.createElement('tr');
            this.fillRows(tableRow, i);
            mainTable.appendChild(tableRow);
        }
    }

    fillRows(tableRow, rowNo) {
        let tableCell;
        for (let j = 0; j < this.boardSize; j++) {
            tableCell = document.createElement('td');
            tableCell.classList.add('square');
            tableCell.setAttribute('id', this.boardSize * rowNo + j);
            tableRow.appendChild(tableCell);
        }
    }

    backgroundSoundTheme() {
        let song = document.createElement('audio');
        song.setAttribute('src', '../other/gta-IV-theme.mp3');
        song.play();
        song.loop = true;
    }

    soundOnClick() {

        let song = document.createElement('audio');
        song.setAttribute('src', '../other/click.mp3');
        song.play();
    }

    soundOnRestart() {
        let song = document.createElement('audio');
        song.setAttribute('src', '../other/restart.mp3');
        song.play();
    }


    // showHoveredMark() {
    //     var pointedSquare;
    //     pointedSquare = this;
    //     if (pointedSquare.innerText === '') {
    //         pointedSquare.style.color = 'grey';
    //         pointedSquare.innerText = player;
    //     }
    //     console.log(pointedSquare.style);
    // }
    //
    //
    // hideHoveredMark() {
    //     var pointedSquare;
    //     pointedSquare = this;
    //     if (pointedSquare.style.color != 'black') {
    //         pointedSquare.innerText = '';
    //         pointedSquare.style.color = null;
    //     }
    // }
}
