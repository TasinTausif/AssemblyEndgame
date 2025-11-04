import {getRandomWord} from '../data/utils.js'

export default function(props){
    function startNewGame(){
        props.setCurrentWord(getRandomWord())
        props.setGuessedLetters([])
    }

    return (
        <>
            {props.isGameOver && 
            <button 
                className='new-game'
                onClick={startNewGame}
            >
                New Game
            </button>}
        </>
    )
}