import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './RedirectDetail.scss';

library.add(faAngleRight);

/**
 * Renders a button which redirects to the detail page with given id
 * @param {props} props includes id, currently hardcoded to show detail page for product
 */

const RedirectDetail = (props) => {
  const { id } = props;
  return (
    <div className="redirect-detail">
      <NavLink className="nav-link" to={`/product/${id}`}>
        <FontAwesomeIcon icon="angle-right" className="icon" />
      </NavLink>
    </div>
  );
};


export default RedirectDetail;
