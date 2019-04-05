import React, { Component } from 'react';
import './Customer.scss';
import { SERVER_ADDRESS, REST_CUSTOMER } from '../Resources';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

const axios = require('axios');

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customerList: [],
      isLoaded: false,
      errorMsg: '',
    };
  }

  componentDidMount() {
    axios.get(`${SERVER_ADDRESS}${REST_CUSTOMER}`)
      .then((results) => {
        if (results.status === 200) {
          this.setState({
            customerList: results.data._embedded.customer,
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
      customerList, isLoaded, errorMsg,
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
                customerList
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
