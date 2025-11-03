import KeyboardElement from "./keyboardElement"

export default function(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardElements = alphabet.split("").map(letter => (
        <KeyboardElement 
            key={letter}
            value={letter}
        />
    ))

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}