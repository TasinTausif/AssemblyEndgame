import {clsx} from "clsx"
import {getFarewellText} from "../data/utils"
import {languages} from "../data/languages.js"

export default function (props) {
    const className = clsx(
        "game-status",{
            won: props.isGameWon,
            lost: props.isGameLost,
            farewell: !props.isGameLost && props.isLastGuessIncorrect
        }
    )

    function renderGameStatus(){
        if(props.isGameWon){
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }else if(props.isGameLost){
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }else if(!props.isGameLost && props.isLastGuessIncorrect){
            return <p className="farewell-message">{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
        }else{
            return null
        }
    }

    return (
        <section className={className}>
            {renderGameStatus()}
        </section>
    );
}