import React from 'react';
import './Card.css';
import image from './react-logo.png';

const CardBanner = () => {
    return (
        <React.Fragment>
            <a href="https://www.reactjs.org">
                <img className="card-banner" src={image} alt="React Logo" />
            </a>
        </React.Fragment>
    );
};

export default CardBanner;

