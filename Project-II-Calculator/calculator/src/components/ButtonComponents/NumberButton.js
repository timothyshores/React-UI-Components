import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className="number-button">
        <div className = "row clear-row">
            <span class="button" id="clear">clear</span>
            <span class="operator button" id="times">&divide;</span>
        </div>
        <div className = "row top-row">
            <span class="number button" id="seven">7</span>
            <span class="number button" id="eight">8</span>
            <span class="number button" id="nine">9</span>
            <span class="operator button" id="times">&times;</span>
        </div>
        <div className = "row middle-row">
            <span class="number button" id="four">4</span>
            <span class="number button" id="five">5</span>
            <span class="number button" id="six">6</span>
            <span class="operator button" id="minus">-</span>
        </div>        
        <div className = "row bottom-row">
            <span class="number button" id="one">1</span>
            <span class="number button" id="two">2</span>
            <span class="number button" id="three">#</span>
            <span class="operator button" id="minus">+</span>
        </div>
        <div className = "row zero-row">
            <span class="number button" id="zero">0</span>
            <span class="operator button" id="equals">=</span>
        </div>
    </div>
  );
};

export default NumberButton;