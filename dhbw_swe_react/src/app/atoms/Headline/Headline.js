import React from 'react';
import './Headline.scss';

/**
 * Renders a prestyled Headline like element with custom'text'
 * @param {text} String Text to be displayed
 */
const Headline = ({ text }) => (
  <div className="headline">
    {text}
  </div>
);


export default Headline;
