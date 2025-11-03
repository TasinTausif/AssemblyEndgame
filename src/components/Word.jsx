export default function(props){
    const letterElements = props.currentWord.split("").map((letterElement, index) => (
        <span key={index} className="letter-box">
            {letterElement.toUpperCase()}
        </span>
    ))
    
    return (
        <section className='word'>
            {letterElements}
        </section>
    )
}