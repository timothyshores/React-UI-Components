import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        <div className="operator-button">
            <div>
                <button>÷</button>
            </div>
            <div>
                <button>×</button>
            </div>
            <div>
                <button>-</button>
            </div>
            <div>
                <button>+</button>
            </div>
            <div>
                <button>=</button>
            </div>
        </div>
    );
};

export default NumberButton;