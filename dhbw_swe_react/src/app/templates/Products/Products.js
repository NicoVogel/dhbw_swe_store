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
    };
  }

  componentDidMount() {
    fetch(`${SERVER_ADDRESS}${REST_PRODUCT}`)
      .then(results => results.json())
      .then((data) => {
        this.setState({
          productList: data._embedded.produkt,
          isLoaded: true,
        });
      });
  }

  render() {
    const defaultTableHeaders = ['count', 'description', 'category', 'sellPrice', 'buyPrice', 'supplier', 'origin', 'buyDate'];

    const {
      productList, isLoaded
    } = this.state;
    return (
      <div className="products-container">
        <Headline text="Produktübersicht" />
        <div className="table-container">
          {isLoaded ? 
          <Table
            defaultTableHeaders={
              defaultTableHeaders
            }
            tableData={
              productList
            }
          /> : <h1>LOADING</h1>
          }
        </div>
      </div>

    );
  }
}

export default Products;
