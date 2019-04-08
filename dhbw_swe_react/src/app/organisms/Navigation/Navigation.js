import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck, faUsers, faSearch, faFileInvoice, faIndustry, faSeedling, faCog, faAngleLeft, faAngleRight
} from '@fortawesome/free-solid-svg-icons';

import React, { Component } from 'react';
import './Navigation.scss';

library.add(faTruck, faUsers, faSearch, faFileInvoice, faIndustry, faSeedling, faCog, faAngleLeft, faAngleRight);

class Navigation extends Component {

  state = {
    menuOpen: false,
  };
  toggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  render() {
    return (
      <div className={`navigation ${this.state.menuOpen ? "" : " open"}`} >
        <div className="nav-item top">
          {
            this.state.menuOpen ? <NavLink className='title'  to="/home">H</NavLink> : < NavLink className="title"
              to="/home" > Heinz Zitrus </NavLink>
          }
          {
            this.state.menuOpen ? < FontAwesomeIcon onClick={
              this.toggle
            }
              className='icon nav-back'
              icon="angle-right" /> : < FontAwesomeIcon onClick={
                this.toggle
              }
                className='icon nav-back'
                icon="angle-left" />
          }
        </div>
        <div className="nav-item center">
          <div className="items-container">
            <NavLink className="nav-link" to="/product">
              <FontAwesomeIcon icon="seedling" className="icon" />
              {this.state.menuOpen ? null : < div className="text" > Produkte </div>}
            </NavLink>
            <NavLink className="nav-link" to="/producer">
              <FontAwesomeIcon icon="industry" className="icon" />
              {this.state.menuOpen ? null : < div className="text" > Hersteller </div>}
            </NavLink>
            <NavLink className="nav-link" to="/supplier">
              <FontAwesomeIcon icon="truck" className="icon" />
              {this.state.menuOpen ? null : < div className="text" > Lieferanten </div>}
            </NavLink>
            <NavLink className="nav-link" to="/customer">
              <FontAwesomeIcon icon="users" className="icon" />
              {this.state.menuOpen ? null : < div className="text" > Kunden </div>}
            </NavLink>
            <p className="item-separator"></p>
            <NavLink className="nav-link" to="/deliverynote">
              <FontAwesomeIcon icon="file-invoice" className="icon" />
              {this.state.menuOpen ? null : < div className="text" > Lieferschein </div>}
            </NavLink>
            <NavLink className="nav-link" to="/search">
              <FontAwesomeIcon icon="search" className="icon" />
              {this.state.menuOpen ? null : < div className="text" > Suche </div>}
            </NavLink>

          </div>
        </div>
        <div className="nav-item bottom">
          <NavLink className="nav-link" to="/setting">
            <FontAwesomeIcon icon="cog" className="icon" />
            {this.state.menuOpen ? null : < div className="text" > Einstellungen </div>}
          </NavLink>
        </div>

      </div>
    );
  }
}

export default Navigation;