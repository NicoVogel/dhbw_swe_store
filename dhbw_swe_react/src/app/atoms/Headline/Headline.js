import React from 'react';
import './Headline.scss';

function Headline({ text }) {
  return (
    <div className="headline">
      {text}
    </div>
  );
}

export default Headline;
