import React, { Component } from 'react';
import './ProductDetail.scss';
import Headline from '../../atoms/Headline/Headline';

// eslint-disable-next-line react/prefer-stateless-function
class ProductDetail extends Component {

  render() {
    return (
      <div className="productDetail-container">
        <Headline text="CATEGORY: PRODUCT" />

      </div>
    )
  }
}
export default ProductDetail;
