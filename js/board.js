
var origBoard;
const player = "O";
const aiPlayer = "X";


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

// startGame();


function startGame(){

    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].addEventListener("click", soundOnClick);
        cells[i].addEventListener("click", turnClick, false);
    }
    soundOnRestart();
    // let button = document.getElementsByClassName("inline-button");
    // button.addEventListener("click", soundOnRestart);
}

function turnClick(square){

    turn(square.target.id, player);

}

function turn(squareId, player){
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
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
