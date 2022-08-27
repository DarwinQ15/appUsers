import React from 'react';

const Button = ({Cambio, colors}) => {
    return (
        <div className='button'>
            <button className={colors} onClick ={Cambio}><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
    );
};

export default Button;