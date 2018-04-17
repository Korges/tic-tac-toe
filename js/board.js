let origBoard;
let player = "O";
const BOARDSIZE = 5;

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

function startGame() {

    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener("click", turnClick, false);
    }
}

function turnClick(square){

    let squareId = square.target.id;

    if (document.getElementById(squareId).innerText === '') {
        turn(square.target.id, player);
        switchTurn();
    } else {
        setMessage("Pick another square");
    }
}

function switchTurn(){

    if (player === "X"){
        player = "O";
    } else {
        player = "X";
    }
    setMessage("It's " + player + "'s turn");
}

function setMessage(msg){
    document.getElementById("message").innerText = msg;
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player);
    if (gameWon){
        gameEnd();
    }
}

function checkWin(board, player){

    // let game = board.reduce((a, e, i) => (e === player)) ? a.concat(i) : a, [];

}

function gameEnd(){

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
        console.log(tableCell);
        tableRow.appendChild(tableCell);
    }
}


