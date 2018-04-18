let origBoard;
const BOARDSIZE = 3;
let isGameActive = true;

var board = {
    cells: new Array(),
    BOARDSIZE: 3,
};

let player = {
    mark: "O"
};

const winCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

createTable();

board.cells = document.querySelectorAll(".square");

startGame();

function startGame() {

    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < board.cells.length; i++) {
        board.cells[i].innerText = '';
        board.cells[i].addEventListener("click", soundOnClick);
        board.cells[i].addEventListener("click", turnClick, false);
    }
}

function restartGame() {
    soundOnRestart();
    startGame();
    player.mark = "O";
    setMessage("It's " + player.mark + "'s turn");
}

function turnClick(square) {

    let squareId = square.target.id;

    if (document.getElementById(squareId).innerText === '') {
        turn(square.target.id, player.mark);
        switchTurn();
    } else {
        setMessage("Pick other square");
    }
}

function switchTurn() {

    if (checkWin()){
        gameEnd();
    } else {
        if (player.mark === "X"){
            player.mark = "O";
        } else {
            player.mark = "X";
        }
        setMessage("It's " + player.mark + "'s turn");
    }
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function checkWin() {

    let result = false;

    for (let i = 0; i < winCells.length; i++) {
        if (checkRow(winCells[i])) {
            result = true;
        }
    }
    return result;
}

    function turn(squareId, mark) {
        origBoard[squareId] = player.mark;
        document.getElementById(squareId).innerText = player.mark;
    }

    function checkRow(row) {

        for (let j = 0; j < row.length; j++) {
            if (origBoard[row[j]] !== player.mark) {
                return false;
            }
        }
        return true;
    }

    function gameEnd() {
        for (let i = 0; i < board.cells.length; i++) {
            document.getElementById(i).removeEventListener('click', turnClick, false);
        }
        setMessage("Player " + player.mark + " won!");
    }

    function createTable() {
        let mainTable = document.querySelector('.table');
        let tableRow;
        for (let i = 0; i < board.BOARDSIZE; i++) {
            tableRow = document.createElement('tr');
            fillRows(tableRow, i);
            mainTable.appendChild(tableRow);
        }
    }

    function fillRows(tableRow, rowNo) {
        let tableCell;
        for (let j = 0; j < board.BOARDSIZE; j++) {
            tableCell = document.createElement('td');
            tableCell.classList.add('square');
            tableCell.setAttribute('id', BOARDSIZE * rowNo + j);
            tableRow.appendChild(tableCell);
        }
    }

    function soundOnClick() {
        let song = document.createElement('audio');
        song.setAttribute('src', '../other/click.mp3');
        song.play();
    }

    function soundOnRestart() {
        let song = document.createElement('audio');
        song.setAttribute('src', '../other/restart.mp3');
        song.play();
    }

    function showHoveredMark() {
        var pointedSquare;
        pointedSquare = this;
        if (pointedSquare.innerText === '') {
            pointedSquare.style.color = 'grey';
            pointedSquare.innerText = player.mark;
        }
        console.log(pointedSquare.style);
    }

    function hideHoveredMark() {
        var pointedSquare;
        pointedSquare = this;
        if (pointedSquare.style.color != 'black') {
            pointedSquare.innerText = '';
            pointedSquare.style.color = null;
        }
    }