import React, { Component } from 'react';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

import Headline from '../../atoms/Headline/Headline';
class Products extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="products">
                <Headline text='Produktübersicht'/>
            </div>
        );
    }
}
 
export default Products;