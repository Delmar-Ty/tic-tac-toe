var pickRandom = 0;
function randomPlayerStart() {
    pickRandom = Math.round(Math.random());
    if (pickRandom === 0) {
        document.getElementById('player-one').style.borderStyle = "solid";
    } else {
        document.getElementById('player-two').style.borderStyle = "solid";
    }
}
