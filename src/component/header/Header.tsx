import React from 'react';
import "./Header.css";
import ButtonCreateSegnalazione from '../create/ButtonCreateSegnalazione';

const Header = () => {

    return (
        <div className="bodyHeader">
            <div className='containerHeader'>
                <div className='sectionContainer'></div>
                <div className='sectionContainer'>
                    <h1 className='titleStyle'>Reporting Center</h1>
                </div>
                <div className='sectionContainer buttonCreate'>
                    <ButtonCreateSegnalazione />
                </div>
            </div>
        </div>
    );
};

export default Header;
