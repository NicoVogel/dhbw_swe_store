import React from 'react';
import './ProductDetail.scss';
import Headline from '../../atoms/Headline/Headline';
import RedirectBack from '../../atoms/RedirectBack/RedirectBack';
import { SERVER_ADDRESS, REST_LINKS } from '../Resources';

const axios = require('axios');

const ProductDetail = (props) => {
  const { history, match } = props;

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
    // return test;
  };

  getProductInfo();

  return (
    <div className="productDetail-container">
      <Headline text="CATEGORY: PRODUCT" />
      <RedirectBack history={history} text="Zurück zur Produktübersicht" /> 
    </div>
  );
};

export default ProductDetail;
