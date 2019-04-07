import React, { Component }from 'react';
import './ProductDetail.scss';
import Headline from '../../atoms/Headline/Headline';
import RedirectBack from '../../atoms/RedirectBack/RedirectBack';
import { SERVER_ADDRESS, REST_LINKS } from '../Resources';

const axios = require('axios');

class ProductDetail extends Component {
  constructor(props) {
    super(props);

  const getProductInfo = () => {
    // let test;
    axios.get(`${SERVER_ADDRESS}${REST_LINKS.get('product')}/${match.params.productID}`)
      .then((results) => {
        if (results.status === 200) {
          console.log(results.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render (){
    return (
      <div className="productDetail-container">
      <Headline text="CATEGORY: PRODUCT" />
      <RedirectBack history={this.props.history} text="Zurück zur Produktübersicht" />
    </div>
  );
  }
}

export default ProductDetail;
