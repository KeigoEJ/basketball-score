let scoreHome = 0
let scoreAway = 0
let scoreHomeEl = document.getElementById("scorehome-el")
let scoreAwayEl = document.getElementById("scoreaway-el")

function add1H() {
    scoreHomeEl.textContent = scoreHome += + 1
}

function add2H() {
    scoreHomeEl.textContent = scoreHome += + 2
}

function add3H() {
    scoreHomeEl.textContent = scoreHome += + 3
}

function add1A() {
    scoreAwayEl.textContent = scoreAway += + 1
}

function add2A() {
    scoreAwayEl.textContent = scoreAway += + 2
}

function add3A() {
    scoreAwayEl.textContent = scoreAway += + 3
}