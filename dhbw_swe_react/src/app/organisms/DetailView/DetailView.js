import React from 'react';
import './DetailView.scss';
import Headline from '../../atoms/Headline/Headline';
import { headerStrings } from '../../templates/Resources';


const DetailView = ({ element }) => {
  const { category, description } = element;
  return (
    <div className="detailview-container">
      <Headline text={`${category}: ${description}`} />
      <div className="list-body">
        {
          Object.keys(element).filter(key => key !== '_links').map(key => (
            <div className="list-row" key={`${key}`}>
              <div className="key">
                {headerStrings.get(key)}
              </div>
              <div className="value">
                {element[key]}
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};


export default DetailView;