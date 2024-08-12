// Button.js
import React from 'react';

function Button({ onClick, id, children }) {
    return (
        <button onClick={onClick} id={id}>
            {children}
        </button>
    );
}

export default Button;
