import React from 'react';
import './Home.scss';

import Headline from '../../atoms/Headline/Headline';

const Home = () => (
  <div className="home">
    <Headline text="Großmarkt" />
    <Headline text="Heinz Zitrus GmbH" />
  </div>
);

export default Home;
