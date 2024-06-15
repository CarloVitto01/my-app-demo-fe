import React from 'react';
import "./Header.css";
import ButtonCreateOrdine from '../create/ButtonCreateOrdine';
import ButtonCreateCliente from '../create/ButtonCreateCliente';

const Header = () => {

    return (
        <div className="bodyHeader">
            <div className='containerHeader'>
                <div className='sectionContainer'></div>
                <div className='sectionContainer'>
                    <h1 className='titleStyle'>Pub CSM</h1>
                    <span>Fresca sul Tavolo</span>
                </div>
                <div className='sectionContainer buttonModalCreate'>
                    <ButtonCreateOrdine />
                </div>
            </div>
        </div>
    );
};

export default Header;
