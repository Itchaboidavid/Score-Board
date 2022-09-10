let hScore = document.getElementById("hscore");
let gScore = document.getElementById("gscore");
let score = 0;

function add1() {
    score += 1;
    hScore.textContent = score;
}

function add2() {
    score += 2;
    hScore.textContent = score;
}

function add3() {
    score += 3;
    hScore.textContent = score;
}

function plus1() {
    score += 1;
    gScore.textContent = score;
}

function plus2() {
    score += 2;
    gScore.textContent = score;
}

function plus3() {
    score += 3;
    gScore.textContent = score;
}

function reset() {
    score = 0;
    hScore.textContent = score;
    gScore.textContent = score;
}