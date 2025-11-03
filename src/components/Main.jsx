import GameStatus from './GameStatus.jsx'
import LanguageChips from './LanguageChips.jsx'
import Word from './Word.jsx'
import Keyboard from './Keyboard.jsx'
import { useState } from 'react'

export default function () {
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([]);

    return (
        <main>
            <GameStatus />
            <LanguageChips />
            <Word 
                currentWord={currentWord}
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