var pickRandom = 0;
const cellArray = ["grid-one", "grid-two", "grid-three", "grid-four", "grid-five", "grid-six", "grid-seven", "grid-eight", "grid-nine"];
var win = false;
var player = "";
var columnsCheck;
function randomPlayerStart() {
    pickRandom = Math.round(Math.random());
    if (pickRandom === 0) {
        document.getElementById('player-one').style.borderStyle = "solid";
    } else {
        document.getElementById('player-two').style.borderStyle = "solid";
    }
}

function insertObject(cell) {
    if (pickRandom === 0) {
        document.getElementById(cell).innerHTML = "X";
        document.getElementById('player-two').style.borderStyle = "solid";
        document.getElementById('player-one').style.borderStyle = "none";
        pickRandom = 1;
    } else {
        document.getElementById(cell).innerHTML = "O";
        document.getElementById('player-one').style.borderStyle = "solid";
        document.getElementById('player-two').style.borderStyle = "none";
        pickRandom = 0;
    }
    winCondition();
}

function winCondition() {
    console.log(document.getElementById(cellArray[0]).innerHTML);
    console.log(typeof(document.getElementById(cellArray[0]).innerHTML));
    console.log(document.getElementById(cellArray[3]).innerHTML);
    checkColumns();
}

function checkColumns() {
    columnsCheck = 0;
    for (let c = 0; c < 3; c++) {
        if (document.getElementById(cellArray[0 + columnsCheck]).innerHTML === document.getElementById(cellArray[3 + columnsCheck]).innerHTML) {
            win = true;
            c = 3;
            if (win) {
                document.getElementById('win-message').innerHTML = "You win!";
            }
        }
        columnsCheck++;
    }
}