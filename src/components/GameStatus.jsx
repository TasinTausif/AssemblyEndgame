import {clsx} from "clsx"

export default function (props) {
    const className = clsx(
        "game-status",{
            won: props.isGameWon,
            lost: props.isGameLost
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