import GameStatus from './GameStatus'
import LanguageChips from './LanguageChips'
import Word from './Word'
import Keyboard from './Keyboard'
export default function () {

    return (
        <main>
            <GameStatus />
            <LanguageChips />
            <Word />
            <Keyboard />
            <button className='new-game'>New Game</button>
        </main>
    )
}