import React, { Component } from 'react';
import './Home.scss';

import Headline from '../../atoms/Headline/Headline';

class Home extends Component {
    render() { 
        return ( 
           <div className='home'>
                <Headline text='Großmarkt'/>
                <Headline text='Heinz Zitrus GmbH'/>
           </div>
        );
    }
}
 
export default Home;