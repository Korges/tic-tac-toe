let origBoard;
let player = "O";
const BOARDSIZE = 3;
let isGameActive = true;
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

const cells = document.querySelectorAll(".square");

startGame();

function startGame(){

    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener("click", soundOnClick);
        cells[i].addEventListener("click", turnClick, false);
    }
}

function restartGame() {
    soundOnRestart();
    startGame();
    player = "O";
    setMessage("It's " + player + "'s turn");
}

function turnClick(square) {

    let squareId = square.target.id;

    if (document.getElementById(squareId).innerText === '') {
        turn(square.target.id, player);
        switchTurn();
    } else {
        setMessage("Pick other square");
    }
}

function switchTurn() {

    if (checkWin()){
        gameEnd();
    } else {
        if (player === "X"){
            player = "O";
        } else {
            player = "X";
        }
        setMessage("It's " + player + "'s turn");
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
function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}

function checkRow(row){

    for (let j = 0; j < row.length; j++){
        if (origBoard[row[j]] !== player){
            return false;
        }
    }
    return true;
}

function gameEnd() {
    for (let i = 0; i < cells.length; i++) {
        document.getElementById(i).removeEventListener('click', turnClick, false);
        document.getElementById(i).removeEventListener('click', soundOnClick, false);

    }
    setMessage("Player " + player + " won!");
}

function createTable() {
    let mainTable = document.querySelector('.table');
    let tableRow;
    for (let i=0; i<BOARDSIZE; i++) {
        tableRow = document.createElement('tr');
        fillRows(tableRow, i);
        mainTable.appendChild(tableRow);
    }
}

function fillRows(tableRow, rowNo) {
    let tableCell;
    for (let j=0; j<BOARDSIZE; j++) {
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
        pointedSquare.innerText = player;
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
