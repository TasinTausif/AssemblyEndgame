import GameStatus from './GameStatus.jsx'
import LanguageChips from './LanguageChips.jsx'
import Word from './Word.jsx'
import Keyboard from './Keyboard.jsx'
import { useState } from 'react'
import { languages } from '../data/languages'

export default function () {
    // State Values
    const [currentWord, setCurrentWord]         = useState("react")
    const [guessedLetters, setGuessedLetters]   = useState([]);

    // Derived Values
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon       = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost      = wrongGuessCount >= languages.length - 1
    const isGameOver      = isGameWon || isGameLost

    return (
        <main>
            <GameStatus 
                isGameWon={isGameWon}
                isGameLost={isGameLost}
            />
            <LanguageChips 
                languages={languages}
                wrongGuessCount={wrongGuessCount}
            />
            <Word 
                currentWord={currentWord}
                guessedLetters={guessedLetters}
            />
            <Keyboard 
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
                currentWord={currentWord}
            />
            {isGameOver && <button className='new-game'>New Game</button>}
        </main>
    )
}