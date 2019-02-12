import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="HeaderTitle">
            <span id="UserName">Lambda School</span><span class="faded" id="UserHandle">@Lambda School</span><span class="faded" id="date">11 february</span>
        </div>
    );
};

export default HeaderTitle;