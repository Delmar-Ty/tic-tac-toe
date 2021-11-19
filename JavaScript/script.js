var pickRandom = 0;
const cellArray = ["grid-one", "grid-two", "grid-three", "grid-four", "grid-five", "grid-six", "grid-seven", "grid-eight", "grid-nine"];
var win = false;
var player = "";
var columnsCheck = 0;
var columnArray = [];
var nextColumnItem;
var rowsCheck = 0;
var rowsArray = [];
var nextRowItem;
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
    checkColumns();
}

function checkColumns() {
    columnsCheck = 0;
    for (c = 0; c < 3; c++) {
        nextColumnItem = 0;
        if (document.getElementById(cellArray[columnsCheck]).innerText === "") {
            columnsCheck++;
        } else {
            for (let i = 0; i < 3; i++) {
                columnArray[i] = document.getElementById(cellArray[columnsCheck + nextColumnItem]).innerText;
                nextColumnItem += 3;
            }
            if (columnArray[0] === columnArray[1] && columnArray[0] === columnArray[2]) {
                alert("It works!");
                c = 3;
            } else {
                columnsCheck++;
            }
        }
    }
}

function checkRows() {

}
