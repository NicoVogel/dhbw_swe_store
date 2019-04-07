import React, { Component }from 'react';
import './ProductDetail.scss';
import RedirectBack from '../../atoms/RedirectBack/RedirectBack';
import { SERVER_ADDRESS, REST_LINKS } from '../Resources';
import DetailView from '../../organisms/DetailView/DetailView';

const axios = require('axios');

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      isLoaded: false,
    }
  }

  getProductInfo = () => {
    axios.get(`${SERVER_ADDRESS}${REST_LINKS.get('product')}/${this.props.match.params.productID}`)
      .then((results) => {
        if (results.status === 200) {
          this.setState({
            product: results.data,
            isLoaded: true,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProductInfo();
  }

  render (){
    const { isLoaded, product } = this.state;
    return (
      <div className="productDetail-container">
      <RedirectBack history={this.props.history} text="Zurück zur Produktübersicht" />
      { isLoaded ? 
        (
          <DetailView element={product} />
        )
        : null

      }
    </div>
  );
  }
}

export default ProductDetail;
