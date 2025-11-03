import KeyboardElement from "./keyboardElement.jsx"
import {useState} from "react"

const alphabet = "abcdefghijklmnopqrstuvwxyz"

export default function(){
    const [guessedLetters, setGuessedLetters] = useState([]);

    function addGuessedLetters(letter){
        setGuessedLetters(prevData => (
            prevData.includes(letter) ? prevData : [...prevData, letter]
        ))
        // setGuessedLetters(prevData => {
        //     const lettersSet = new Set(prevData);
        //     lettersSet.add(letter);
        //     return Array.from(lettersSet);
        // })
    }

    const keyboardElements = alphabet.split("").map(letter => (
        <KeyboardElement 
            key={letter}
            value={letter}
            addGuessedLetters={() => addGuessedLetters(letter)}
        />
    ))

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}