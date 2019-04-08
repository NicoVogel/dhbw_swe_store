import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './RedirectBack.scss';

library.add(faArrowLeft);

const RedirectBack = (props) => {
  const { history, text } = props;
  return (
    <div className="redirect-back">
      <button onClick={history.goBack} type="submit">
        <FontAwesomeIcon icon="arrow-left" className="icon" />
        { text }
      </button>
    </div>
  );
};


export default RedirectBack;
