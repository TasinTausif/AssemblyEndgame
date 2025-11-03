export default function(props){
    return (
        <button onClick={props.addGuessedLetter} className={props.className}>
            {props.value.toUpperCase()}
        </button>
    )
}