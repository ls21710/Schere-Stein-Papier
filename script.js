let ergebnisSpieler1El = document.getElementById("ergebnisSpieler1") 
let ergebnisSpieler2El = document.getElementById("ergebnisSpieler2") 
let ergebnisEl = document.getElementById("ergebnisBeideEl")

let resultPlayer1 = ""
let resultPlayer2 = ""

let themeSpieler1 = document.getElementById("spieler1Div")
let themeSpieler2 = document.getElementById("spieler2Div")

let countEl = document.getElementById("counter-el")

let countSpieler1 = 0
let countSpieler2 = 0


function gameStart() {

    themeSpieler1.style.color = "black"
    themeSpieler2.style.color = "black"
    ergebnisEl.textContent = ""

    let randomPlayer1 = Math.floor( Math.random() * 3 ) + 1
    let randomPlayer2 = Math.floor( Math.random() * 3 ) + 1

    console.log(randomPlayer1)

    if (randomPlayer1 === 1) {
        resultPlayer1 = "Schere"
    } else if (randomPlayer1 === 2) {
        resultPlayer1 = "Stein"
    } else if (randomPlayer1 === 3) {
        resultPlayer1 = "Papier"
    }

    if (randomPlayer2 === 1) {
        resultPlayer2 = "Schere"
    } else if (randomPlayer2 === 2) {
        resultPlayer2 = "Stein"
    } else if (randomPlayer2 === 3) {
        resultPlayer2 = "Papier"
    }

    ergebnisSpieler1El.textContent = "Ergebnis: " + resultPlayer1
    ergebnisSpieler2El.textContent = "Ergebnis: " + resultPlayer2

    gameResult()

}

function gameResult() {
    
    if (resultPlayer1 === "Schere") {
        if (resultPlayer2 === "Schere") {
            ergebnisEl.textContent = "Unentschieden"
        } else if (resultPlayer2 === "Stein") {
            ergebnisEl.textContent = "Spieler 2 gewinnt"
            themeSpieler2.style.color = "#006400"
            countSpieler2 += 1
        } else if (resultPlayer2 === "Papier") {
            ergebnisEl.textContent = "Spieler 1 gewinnt"
            themeSpieler1.style.color = "#006400"
            countSpieler1 += 1
        }
    }

    if (resultPlayer1 === "Stein") {
        if (resultPlayer2 === "Schere") {
            ergebnisEl.textContent = "Spieler 1 gewinnt"
            themeSpieler1.style.color = "#006400"
            countSpieler1 += 1
        } else if (resultPlayer2 === "Stein") {
            ergebnisEl.textContent = "Unentschieden"
        } else if (resultPlayer2 === "Papier") {
            ergebnisEl.textContent = "Spieler 2 gewinnt"
            themeSpieler2.style.color = "#006400"
            countSpieler2 += 1
        }
    } 

    if (resultPlayer1 === "Papier") {
        if (resultPlayer2 === "Schere") {
            ergebnisEl.textContent = "Spieler 2 gewinnt"
            themeSpieler2.style.color = "#006400"
            countSpieler2 += 1
        } else if (resultPlayer2 === "Stein") {
            ergebnisEl.textContent = "Spieler 1 gewinnt"
            themeSpieler1.style.color = "#006400"
            countSpieler1 += 1
        } else if (resultPlayer2 === "Papier") {
            ergebnisEl.textContent = "Unentschieden"
        }
    }

    countEl.textContent = countSpieler1 + " : " + countSpieler2

}

function resetGame() {
    
    ergebnisSpieler1El.textContent = "Ergebnis: "
    ergebnisSpieler2El.textContent = "Ergebnis: "

    ergebnisEl.textContent = ""

    themeSpieler1.style.color = "black"
    themeSpieler2.style.color = "black"

    countSpieler1 = 0
    countSpieler2 = 0

    countEl.textContent = ""

}
