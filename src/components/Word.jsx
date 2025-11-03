export default function (props) {
    const letterElements = props.currentWord.split("").map((letter, index) => {
        const viewItem = props.guessedLetters.includes(letter) ? letter.toUpperCase() : " ";

        return <span key={index} className="letter-box">
            {viewItem}
        </span>
    })

    return (
        <section className='word'>
            {letterElements}
        </section>
    )
}