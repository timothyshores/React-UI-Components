import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
    return (
        <div className="app">
            <CalculatorDisplay />
            <ActionButton button="clear" />
            <NumberButton />
            <ActionButton button="0" />
        </div>
    );
};

export default App;
