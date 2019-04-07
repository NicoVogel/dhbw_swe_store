import React from 'react';
import './ProductDetail.scss';
import Headline from '../../atoms/Headline/Headline';
import RedirectBack from '../../atoms/RedirectBack/RedirectBack';
import { SERVER_ADDRESS, REST_LINKS } from '../Resources';


const ProductDetail = (props) => {
  const { history, match } = props;

  return (
    <div className="productDetail-container">
      <Headline text="CATEGORY: PRODUCT" />
      <RedirectBack history={history} text="Zurück zur Produktübersicht" />
      {`${SERVER_ADDRESS}${REST_LINKS.get('product')}/${match.params.productID}`}
    </div>
  );
};

export default ProductDetail;
