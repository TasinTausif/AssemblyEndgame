import GameStatus from './GameStatus.jsx'
import LanguageChips from './LanguageChips.jsx'
import Word from './Word.jsx'
import Keyboard from './Keyboard.jsx'
import { useState } from 'react'

export default function () {
    // State Value
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([]);

    // Derived Value
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    console.log(wrongGuessCount)

    return (
        <main>
            <GameStatus />
            <LanguageChips />
            <Word 
                currentWord={currentWord}
                guessedLetters={guessedLetters}
            />
            <Keyboard 
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
                currentWord={currentWord}
            />
            <button className='new-game'>New Game</button>
        </main>
    )
}