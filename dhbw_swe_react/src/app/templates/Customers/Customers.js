import React, { Component } from 'react';
import './Customer.scss';
import { SERVER_ADDRESS, REST_LINKS } from '../Resources';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

const axios = require('axios');

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      category: 'customer',
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
    const defaultTableHeaders = ['name', 'address'];
    const {
      tableData, isLoaded, errorMsg, category,
    } = this.state;
    return (
      <div className="customer-container">
        <Headline text="Kundenübersicht" />
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

export default Customers;
