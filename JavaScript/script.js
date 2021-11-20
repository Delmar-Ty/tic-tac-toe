var pickRandom = 0;
const cellArray = ["grid-one", "grid-two", "grid-three", "grid-four", "grid-five", "grid-six", "grid-seven", "grid-eight", "grid-nine"];
var win = false;
var player = "";
var columnsCheck = 0;
var columnArray = [];
var nextColumnItem;
var rowsCheck = 0;
var rowsArray = [];
var diagonalArray = [];
var secondDiagonal;
var nextDiagnoalItem = 0;
var who;
var beenClicked = [];
for (let x = 0; x < 9; x++) {
    beenClicked[x] = false; 
}
function randomPlayerStart() {
    pickRandom = Math.round(Math.random());
    if (pickRandom === 0) {
        document.getElementById('player-one').innerHTML = "X";
    } else {
        document.getElementById('player-one').innerHTML = "O";
    }
}

function insertObject(cell) {
    if (pickRandom === 0) {
        document.getElementById(cell).innerHTML = "X";
        document.getElementById('player-one').innerHTML = "O";
        pickRandom = 1;
    } else {
        document.getElementById(cell).innerHTML = "O";
        document.getElementById('player-one').innerHTML = "X";
        pickRandom = 0;
    }
    winCondition();
}

function winCondition() {
    win = false;
    checkColumns();
    checkRows();
    checkDiagonal();
    if (win) {
        document.getElementById('win-message').innerHTML = "Player " + who + " Won!";
        document.getElementById('reset').style.display = "block";
    }
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
                c = 3;
                win = true;
                who = columnArray[0];
            } else {
                columnsCheck++;
            }
        }
    }
}

function checkRows() {
    rowsCheck = 0;
    for (let b = 0; b < 3; b++) {
        if (document.getElementById(cellArray[rowsCheck]).innerText === "") {
            rowsCheck += 3;
        } else {
            for (let a = 0; a < 3; a++) {
                rowsArray[a] = document.getElementById(cellArray[rowsCheck + a]).innerText;
            }
            if (rowsArray[0] === rowsArray[1] && rowsArray[0] === rowsArray[2]) {
                b = 3;
                win = true;
                who = columnArray[0];
            }
            else {
                rowsCheck += 3;
            }
        }
    }
}

function checkDiagonal() {
    secondDiagonal = true;
    if (document.getElementById(cellArray[0]).innerText === "") {

    } else {
        nextDiagnoalItem = 0;
        for (let d = 0; d < 3; d++) {
            diagonalArray[d] = document.getElementById(cellArray[nextDiagnoalItem]).innerText;
            if (diagonalArray[0] === diagonalArray[1] && diagonalArray[0] === diagonalArray[2]) {
                d = 3;
                win = true;
                who = columnArray[0];
                secondDiagonal = false;
            } else {
                nextDiagnoalItem += 4;
            }
        }
    }
    if (document.getElementById(cellArray[2]).innerText === "") {

    } else {
        if (secondDiagonal) {
            nextDiagnoalItem = 2;
            for (let e = 0; e < 3; e++) {
                diagonalArray[e] = document.getElementById(cellArray[nextDiagnoalItem]).innerText;
                if (diagonalArray[0] === diagonalArray[1] && diagonalArray[0] === diagonalArray[2]) {
                    e = 3;
                    win = true;
                    who = columnArray[0];
                } else {
                    nextDiagnoalItem += 2;
                }
            }
        }
    }
}
