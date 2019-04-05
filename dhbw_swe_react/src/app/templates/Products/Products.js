import React, { Component } from 'react';
import './Products.scss';
import { SERVER_ADDRESS, REST_PRODUCT } from '../Resources';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

const axios = require('axios');

class Products extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      isLoaded: false,
      errorMsg: '',
    };
  }

  componentDidMount() {
    axios.get(`${SERVER_ADDRESS}${REST_PRODUCT}`)
      .then((results) => {
        if (results.status === 200) {
          this.setState({
            productList: results.data._embedded.product,
            isLoaded: true,
          });
        }
      })
      .catch((error) => {
        this.setState({
          errorMsg: `${error}`,
        });
      });
  }

  render() {
    const defaultTableHeaders = ['count', 'description', 'category', 'sellPrice', 'buyPrice', 'supplier', 'origin', 'buyDate'];

    const {
      productList, isLoaded, errorMsg,
    } = this.state;
    return (
      <div className="products-container">
        <Headline text="Produktübersicht" />
        <div className="table-container">
          {isLoaded
            ? (
              <Table
                defaultTableHeaders={
                defaultTableHeaders
              }
                tableData={
                productList
              }
              />
            )
            : [
              errorMsg.length === 0 ? <h1 key="temp-loading">LOADING</h1> : <h1 key="temp-error">{errorMsg}</h1>,
            ]
          }
        </div>
      </div>

    );
  }
}

export default Products;
