
let origBoard;
let player = "O";


const winCells =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll(".square");

startGame();



function startGame(){

    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener("click", soundOnClick);
        cells[i].addEventListener("click", turnClick, false);
    }
}

function restartGame() {
    soundOnRestart();
    startGame();
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

function turn(squareId, player){
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
