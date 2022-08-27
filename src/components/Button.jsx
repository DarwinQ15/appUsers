import React from 'react';

const Button = ({Cambio, colors, quotes}) => {
    return (
        <div>
            <button className={colors} onClick ={Cambio}>
            </button>
        </div>
    );
};

export default Button;