import React from 'react';
import './RedirectBack.scss';

const RedirectBack = (props) =>{
  const { history, text } = props;
  return (
    <div className="redirect-back">
      <button onClick={history.goBack} type="submit">
        { text }
      </button>
    </div>
  );
} 


export default RedirectBack;
