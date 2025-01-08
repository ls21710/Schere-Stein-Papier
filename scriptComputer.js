const entscheidungsButtons = document.getElementById("entscheidungsButtonsEl")

const schereButtonEl = document.getElementById("schereButton")
const steinButtonEl = document.getElementById("steinButton")
const papierButtonEl = document.getElementById("papierButton")
const computerErgebnisEl = document.getElementById("ergebnisComputer")
const ergebnisBeideEl = document.getElementById("ergebnisBeideEl")

let themeUser = document.getElementById("spieler1Div")
let themeComputer = document.getElementById("computerDiv")

let countEl = document.getElementById("counter-el")

let resultComputer = ""

let resultUser = ""

let clickCounter = 0

let userCount = 0
let computerCount = 0


function showButtons() {

    entscheidungsButtons.style.visibility = "visible"

}



function schereClicked() {

    themeComputer.style.color = "black"
    themeUser.style.color = "black"
    computerErgebnisEl.textContent = "Ergebnis: "

    resultUser = "Schere"
    decisionComputer()

    if (resultComputer === "Schere") {
        ergebnisBeideEl.textContent = "Unentschieden"
        themeSpieler1.style.color = "darkorange"
        themeComputer.style.color = "darkorange"
    } else if (resultComputer === "Stein") {
        ergebnisBeideEl.textContent = "Computer gewinnt"
        themeComputer.style.color = "#006400"
        computerCount += 1
    } else if (resultComputer === "Papier") {
        ergebnisBeideEl.textContent = "Spieler 1 gewinnt"
        themeUser.style.color = "#006400"
        userCount += 1
    }

    countEl.textContent = userCount + " : " + computerCount

}

function steinClicked() {

    themeComputer.style.color = "black"
    themeUser.style.color = "black"
    computerErgebnisEl.textContent = "Ergebnis: "

    resultUser = "Stein"
    decisionComputer()

    if (resultComputer === "Schere") {
        ergebnisBeideEl.textContent = "Spieler 1 gewinnt"
        themeUser.style.color = "#006400"
        userCount += 1
    } else if (resultComputer === "Stein") {
        ergebnisBeideEl.textContent = "Unentschieden"
        themeSpieler1.style.color = "darkorange"
        themeComputer.style.color = "darkorange"
    } else if (resultComputer === "Papier") {
        ergebnisBeideEl.textContent = "Computer gewinnt"
        themeComputer.style.color = "#006400"
        computerCount += 1
    }

    countEl.textContent = userCount + " : " + computerCount

}

function papierClicked() {

    themeComputer.style.color = "black"
    themeUser.style.color = "black"
    computerErgebnisEl.textContent = "Ergebnis: "

    resultUser = "Papier"
    decisionComputer()

    if (resultComputer === "Schere") {
        ergebnisBeideEl.textContent = "Computer gewinnt"
        themeComputer.style.color = "#006400"
        computerCount += 1
    } else if (resultComputer === "Stein") {
        ergebnisBeideEl.textContent = "Spieler 1 gewinnt"
        themeUser.style.color = "#006400"
        userCount += 1
    } else if (resultComputer === "Papier") {
        ergebnisBeideEl.textContent = "Unentschieden"
        themeSpieler1.style.color = "darkorange"
        themeComputer.style.color = "darkorange"
    }

    countEl.textContent = userCount + " : " + computerCount

}



function decisionComputer() {

    let computerDecision = Math.floor( Math.random() * 3 ) + 1

    if (computerDecision === 1) {
        resultComputer = "Schere"
    } else if (computerDecision === 2) {
        resultComputer = "Stein"
    } else if (computerDecision === 3) {
        resultComputer = "Papier"
    }

    computerErgebnisEl.textContent += resultComputer

}


function resetGame() {

    ergebnisBeideEl.textContent = ""
    computerErgebnisEl.textContent = "Ergebnis: "
    countEl.textContent = ""

    resultComputer = ""
    resultUser = ""

    themeComputer.style.color = "black"
    themeUser.style.color = "black"

    userCount = 0
    computerCount = 0
    clickCounter = 0 

}