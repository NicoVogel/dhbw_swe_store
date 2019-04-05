import React, { Component } from 'react';
import './Customer.scss';
import { SERVER_ADDRESS, REST_CUSTOMER } from '../Resources';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

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
    fetch(`${SERVER_ADDRESS}${REST_CUSTOMER}`)
      .then((results) => {
        if (!results.ok) {
          this.setState({
            errorMsg: `ERROR: HTTP status: ${results.status}`,
          });
          return {};
        }
        return results.json().then((data) => {
          this.setState({
            customerList: data._embedded.customer,
            isLoaded: results.ok,
          });
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
