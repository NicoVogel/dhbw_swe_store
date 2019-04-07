import React from 'react';
import './DetailView.scss';
import Headline from '../../atoms/Headline/Headline';

const DetailView = ({ element }) => {
  const { category, description } = element;
  return (
    <div className="detailview">
      <Headline text={`${category}: ${description}`} />
      {JSON.stringify(element)}
    </div>
  );
};


export default DetailView;
