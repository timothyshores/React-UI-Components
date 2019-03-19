import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <h4 className="header-title">
            <span className="user-name">Lambda School</span>
            <span className="user-handle">@LambdaSchool</span>
        </h4>
    );
};

export default HeaderTitle;