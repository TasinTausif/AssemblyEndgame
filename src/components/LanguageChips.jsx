import { languages } from '../data/languages'
import LanguageChip from './Chip'

export default function () {

    const languageElements = languages.map(language => (
        <LanguageChip
            key={language.name}
            {...language}
        />
    ))

    return (
        <section className="language-chips">
            {languageElements}
        </section>
    )
}