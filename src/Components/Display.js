// Display.js
import React from 'react';

function Display(props) {
    return (
        <div className="screen">
            <div className="display">
                <input type="text" id="display" readOnly value={props.value} />
            </div>
        </div>
    );
}

export default Display;
