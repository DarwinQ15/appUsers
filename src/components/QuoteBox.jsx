import React from 'react';
import quotes from '../quotes.json'
const QuoteBox = ({random, quotes}) => {
    return (
        <div>
            <div>
                <b>“</b>
            </div>
            <div>
                <h1>{quotes[0].quote}</h1> 
            </div>
            <div>
                <h3>{quotes[0].quote}</h3>
            </div> 
        </div>
    );
};

export default QuoteBox;