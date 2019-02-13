import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <div className="HeaderThumbnail">
                <ImageThumbnail />
            </div>
            <div className="HeaderTitleContent">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderContainer;