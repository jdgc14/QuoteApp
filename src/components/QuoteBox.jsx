import React, { useState } from 'react';
import quotes from '../quotes.json'


const QuoteBox = ({ getRandomInt }) => {

    let color = `rgb(${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)})`

    document.body.style = `background: ${color}`

    const numberQuotes = quotes.length

    const [actualQuote, setActualQuote] = useState(getRandomInt(numberQuotes))

    const randomQuote = () => setActualQuote(getRandomInt(numberQuotes))

    return (
        <div style={{ color: color }}>
            <div className='d-flex gap-3'>
                <i className="fa-solid fa-quote-left" style={{fontSize:'3rem'}}></i>
                <p style={{textAlign:'justify'}}>{`${quotes[actualQuote].quote}`}</p> 
            </div>
            <p className='text-end fw-bold fst-italic'>{`${quotes[actualQuote].author}`}</p>
            <div className='d-flex justify-content-end'>
                <button onClick={randomQuote} className='btn shadow rounded-4' style={{ color: 'white', background: `${color}` }}>
                    <i className="fa-solid fa-forward"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;