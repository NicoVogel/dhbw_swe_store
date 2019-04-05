import React, { Component } from 'react';
import './Products.scss';
import { SERVER_ADDRESS, REST_LINKS } from '../Resources';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

const axios = require('axios');

class Products extends Component {
  constructor() {
    super();
    this.state = {
      category: 'product',
      tableData: [],
      isLoaded: false,
      errorMsg: '',
    };
  }

  componentDidMount() {
    const { category } = this.state;
    axios.get(`${SERVER_ADDRESS}${REST_LINKS.get(category)}`)
      .then((results) => {
        if (results.status === 200) {
          this.setState({
            tableData: results.data._embedded[category],
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
      tableData, isLoaded, errorMsg, category,
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
                  tableData
              }
                category={
                  category
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
