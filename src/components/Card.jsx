import React from 'react';
import QuoteBox from './QuoteBox';

const Card = () => {

    const getRandomInt = (max) => Math.floor(Math.random() * max)

    return (
        <div className='d-flex justify-content-center' style={{ height: '100vh' }}>
            <div className='my-auto shadow p-3 rounded-4 card-quote' style={{ background: 'white' }}>
                <QuoteBox getRandomInt={getRandomInt} />
            </div>
        </div>

    );
};

export default Card;