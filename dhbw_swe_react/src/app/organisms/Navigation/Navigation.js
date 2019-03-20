import React, { Component } from 'react';
import './Navigation.scss'

import { NavLink } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUsers, faSearch, faFileInvoice, faIndustry, faSeedling, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faTruck, faUsers, faSearch, faFileInvoice, faIndustry, faSeedling, faCog);

class Navigation extends Component {
    render() { 
        return (
            <div className='navigation open'>
                <NavLink className='title' to='/home'>Heinz Zitrus</NavLink>
                <div className='items-container'>
                    <NavLink className='nav-item' to='/products'>
                        <FontAwesomeIcon icon='seedling' className='icon' />
                        <div className="text"> Produkte </div>
                    </NavLink>
                    <NavLink className='nav-item' to='/producers'>
                        <FontAwesomeIcon icon='industry' className='icon' />
                        <div className="text"> Hersteller </div>
                    </NavLink>
                    <NavLink className='nav-item' to='/suppliers'>
                        <FontAwesomeIcon icon='truck' className='icon' />
                        <div className="text"> Lieferanten </div>
                    </NavLink>
                    <NavLink className='nav-item' to='/customers'>
                        <FontAwesomeIcon icon='users' className='icon' />
                        <div className="text"> Kunden </div>
                    </NavLink>
                    <NavLink className='nav-item' to='/deliverynote'>
                        <FontAwesomeIcon icon='file-invoice' className='icon' />
                        <div className="text"> Lieferschein </div>
                    </NavLink>
                    <NavLink className='nav-item' to='/search'>
                        <FontAwesomeIcon icon='search' className='icon' />
                        <div className="text"> Suche </div>
                    </NavLink>
                    <NavLink className='nav-item' to='/settings'>
                        <FontAwesomeIcon icon='cog' className='icon' />
                        <div className="text"> Einstellungen </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;