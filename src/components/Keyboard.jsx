import KeyboardElement from "./KeyboardElement.jsx"
import {clsx} from "clsx"

const alphabets = "abcdefghijklmnopqrstuvwxyz"

export default function(props){
    function addGuessedLetter(letter){
        props.setGuessedLetters(prevData => (
            prevData.includes(letter) ? prevData : [...prevData, letter]
        ))
        // setGuessedLetters(prevData => {
        //     const lettersSet = new Set(prevData);
        //     lettersSet.add(letter);
        //     return Array.from(lettersSet);
        // })
    }

    const keyboardElements = alphabets.split("").map(letter => {
        const isGuessed = props.guessedLetters.includes(letter);
        const isCorrect = isGuessed && props.currentWord.includes(letter);
        const isWrong   = isGuessed && !props.currentWord.includes(letter);
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        return <KeyboardElement 
            key={letter}
            value={letter}
            addGuessedLetter={() => addGuessedLetter(letter)}
            className={className}
        />
    })

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}