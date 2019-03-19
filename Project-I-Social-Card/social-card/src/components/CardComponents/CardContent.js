import React from 'react';
import './Card.css';

const CardBanner = () => {
    return (
        <div className="card-content">
            <a style={{ display: "block" }} href="reactjs.org">
                <h5>Get started With React</h5>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application. </p>
                <a className="url" href="reactjs.org">reactjs.org</a>
            </a>
        </div>
    );
};

export default CardBanner;

