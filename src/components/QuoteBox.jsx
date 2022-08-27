import React from 'react';
const QuoteBox = ({random, colors}) => {
    return (
        <div className='description' style= {{color: 'colors'}}>
            <div className='description-user colors'>
                <h1><i class="fa fa-quote-left" aria-hidden="true"></i>{random.quote}</h1> 
                <h3>{random.author}</h3>
            </div>
        </div>
    );
};

export default QuoteBox;