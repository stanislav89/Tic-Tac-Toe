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

const gameSpaceElement = document.getElementById('game_space')
const cellElements = document.querySelectorAll('[cell-unit]')
const restartButton = document.getElementById('restartButton')
let isPlayerTurn = false

startTheGame()

restartButton.addEventListener('click', startTheGame)

function startTheGame() {
    isPlayerTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
    })
}