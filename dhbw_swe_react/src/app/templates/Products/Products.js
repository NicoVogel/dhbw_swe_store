import React, { Component } from 'react';
import './Products.scss';
import { SERVER_ADDRESS, REST_PRODUCT } from '../Resources';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';


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
    fetch(`${SERVER_ADDRESS}${REST_PRODUCT}`)
      .then((results) => {
        if (!results.ok) {
          this.setState({
            errorMsg: `ERROR: HTTP status: ${results.status}`,
          });
          return {};
        }
        return results.json().then((data) => {
          this.setState({
            productList: data._embedded.product,
            isLoaded: results.ok,
          });
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
