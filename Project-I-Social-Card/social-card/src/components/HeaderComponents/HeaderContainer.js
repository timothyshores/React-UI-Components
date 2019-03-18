import React from 'react';
import ImageThumnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className="header">
            <div className="avatar">
                <ImageThumnail />
            </div>
            <div className="avatar">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderContainer;