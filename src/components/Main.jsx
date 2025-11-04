import GameStatus from './GameStatus.jsx'
import LanguageChips from './LanguageChips.jsx'
import Word from './Word.jsx'
import Keyboard from './Keyboard.jsx'
import ScreenReaderInstructions from './ScreenReaderInstructions.jsx'
import NewGameButton from './NewGameButton.jsx'
import { useState } from 'react'
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use'
import {languages} from '../data/languages'
import {getRandomWord} from '../data/utils.js'

export default function () {
    const { width, height } = useWindowSize()

    // State Values
    const [currentWord, setCurrentWord]         = useState(() => getRandomWord());
    const [guessedLetters, setGuessedLetters]   = useState([]);

    // Derived Values
    const numGuessesLeft        = languages.length - 1
    const wrongGuessCount       = guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon             = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost            = wrongGuessCount >= numGuessesLeft
    const isGameOver            = isGameWon || isGameLost
    const lastGuessedLetter     = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect  = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

    return (
        <main>
            {isGameWon && <Confetti
                width={width}
                height={height}
            />}
            <GameStatus 
                isGameWon={isGameWon}
                isGameLost={isGameLost}
                isLastGuessIncorrect={isLastGuessIncorrect}
                wrongGuessCount={wrongGuessCount}
            />
            <LanguageChips 
                languages={languages}
                wrongGuessCount={wrongGuessCount}
            />
            <Word 
                currentWord={currentWord}
                guessedLetters={guessedLetters}
                isGameLost={isGameLost}
            />
            <ScreenReaderInstructions
                currentWord={currentWord} 
                guessedLetters={guessedLetters}
                lastGuessedLetter={lastGuessedLetter}
                numGuessesLeft={numGuessesLeft}
            />
            <Keyboard 
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
                currentWord={currentWord}
                isGameOver={isGameOver}
            />
            <NewGameButton
                isGameOver={isGameOver}
                setCurrentWord={setCurrentWord}
                setGuessedLetters={setGuessedLetters}
            />
        </main>
    )
}