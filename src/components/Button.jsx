import React from 'react';

const Button = ({ChangeRandom, colors}) => {
    return (
        <div className='button'>
            <button  style= {{background: 'colors'}} onClick ={ChangeRandom}><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
    );
};

export default Button;