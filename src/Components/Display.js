// Display.js
import React from 'react';

function Display({ value }) {
    return (
        <div className="screen">
            <div className="display">
                <input type="text" id="display" readOnly value={value} />
            </div>
        </div>
    );
}

export default Display;
