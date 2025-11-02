import {useState} from 'react'

export default function(){

    const [currentWord, setCurrentWord] = useState("react")
    
    const letterElements = currentWord.split("").map((letterElement, index) => (
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