import Hangman from './hangman.js'
import getPuzzle from './requests.js'


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        if (letter !== '*') {
            letterEl.classList.add('span')
        }
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
        if (letter === ' ') {
            letterEl.classList.add('span-hidden')
        }

    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()