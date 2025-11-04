export default function (props) {
    return (
        <button
            onClick={props.addGuessedLetter}
            className={props.className}
            disabled={props.isGameOver}
            aria-disabled={props.isGuessed}
            aria-label={`Letter ${props.value}`}
        >
            {props.value.toUpperCase()}
        </button>
    )
}