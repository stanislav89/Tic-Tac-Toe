const playerX = 'cross'
const playerO = 'zero'
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const cellElements = document.querySelectorAll('[cell-unit]')
const gameSpaceElement = document.getElementById('game_space')
const restartButton = document.getElementById('restartButton')
let turnOfPlayerX = true

startTheGame()

restartButton.addEventListener('click', startTheGame)

// Start a new game and clear the previous one
function startTheGame() {
    turnOfPlayerX = true
    cellElements.forEach(cell => {
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
        cell.removeEventListener('click', cellClick)
        cell.addEventListener('click', cellClick, {once: true})
    })
}

// Processing cell clicks and checking turn/progress/result
function cellClick(cellElement) {
    const cell = cellElement.target
    const currentMove = turnOfPlayerX ? playerX : playerO
    selectedCell(cell, currentMove)
    if (checkWin(currentMove)) {
        gameOver()
    } else if (checkForDraw()) {
        gameOver()
    } else {playerTurnChange()}
}

function selectedCell() {}
function checkWin() {}
function checkForDraw() {}
function gameOver() {}
function playerTurnChange() {}