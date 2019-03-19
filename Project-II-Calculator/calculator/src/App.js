import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';

const App = () => {
    return (
        <div className="app">
            <CalculatorDisplay />
            <div className="buttons">
                <div className="white-buttons">
                    <ActionButton button="clear" />
                    <NumberButton />
                    <ActionButton button="0" />
                </div>
                <div className="red-buttons">
                    <OperatorButton />
                </div>
            </div>
        </div>
    );
};

export default App;
