import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
    return (
        <div>
            <CalculatorDisplay />
            <ActionButton />
            <NumberButton />
            <ActionButton />
        </div>
    );
};

export default App;
