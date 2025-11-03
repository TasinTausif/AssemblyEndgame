export default function(props){
    return (
        <button onClick={props.addGuessedLetters}>
            {props.value.toUpperCase()}
        </button>
    )
}