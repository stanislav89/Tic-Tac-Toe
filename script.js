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
let turnPlayerX = true

startGame()

restartButton.addEventListener('click', startGame)

// Start a new game and clear the previous one
function startGame() {
    turnPlayerX = true
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
    const currentMove = turnPlayerX ? playerX : playerO
    selectedCell(cell, currentMove)
    if (checkWin(currentMove)) {
        gameOver(false)
    } else if (checkDraw()) {
        gameOver(true)
    } else {playerTurnChange()}
}

// Places X or O in a cell
function selectedCell(cell, currentMove) {
    cell.classList.add(currentMove)
}

// Swap turn
function playerTurnChange() {
    turnPlayerX = !turnPlayerX
}

// Finish the game
function gameOver(draw) {
    if (draw) {
        alert("It's a DRAW!")
    } else {
        alert(`Player ${turnPlayerX ? 'X' : 'O'} win!`)
    }
}

// Win check function
function checkWin(currentMove) {
    return winCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentMove)
        })
    })
}

// Draw check function
function checkDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(playerX) || cell.classList.contains(playerO)
    })
}