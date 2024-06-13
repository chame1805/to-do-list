import React from 'react';
import './Button.css'

function Button({ text, onClick, className }) {
    return (
        <div id='but'>

        <button onClick={onClick} className={className}>
            {text}
        </button>
        </div>
    );
}

export default Button;
