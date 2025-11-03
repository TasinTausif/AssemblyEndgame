import GameStatus from './GameStatus.jsx'
import LanguageChips from './LanguageChips.jsx'
import Word from './Word.jsx'
import Keyboard from './Keyboard.jsx'

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