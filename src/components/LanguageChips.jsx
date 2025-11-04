import LanguageChip from './Chip.jsx'

export default function (props) {
    const languageElements = props.languages.map((language, index) => (
        <LanguageChip
            key={language.name}
            {...language}
            isLanguageLost={index<props.wrongGuessCount}
        />
    ))

    return (
        <section className="language-chips">
            {languageElements}
        </section>
    )
}