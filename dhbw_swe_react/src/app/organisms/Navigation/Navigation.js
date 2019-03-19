import React, { Component } from 'react';
import './Navigation.scss'

import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() { 
        return (
            <div className='navigation'>
                <h2>Navigation</h2>
                <div className='items-container'>
                    <NavLink className='nav-item' to='/products'>Produkte</NavLink>
                    <NavLink className='nav-item' to='/producers'>Produzenten</NavLink>
                    <NavLink className='nav-item' to='/suppliers'>Lieferanten</NavLink>
                    <NavLink className='nav-item' to='/customers'>Kunden</NavLink>
                    <NavLink className='nav-item' to='/deliverynote'>Lieferschein</NavLink>
                    <NavLink className='nav-item' to='/search'>Suche</NavLink>
                    <NavLink className='nav-item' to='/settings'>Settings</NavLink>
                </div>
            </div>
        );
    }
}
 
export default Navigation;