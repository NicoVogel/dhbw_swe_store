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
    };
  }

  componentDidMount() {
    fetch(`${SERVER_ADDRESS}${REST_CUSTOMER}`)
      .then(results => results.json())
      .then((data) => {
        this.setState({
          customerList: data._embedded.kunde,
        });
      });
  }

  render() {
    const productTableHeaders = [
      {
        id: 'name',
        text: 'Name',
      },
      {
        id: 'address',
        text: 'Adresse',
      },

    ];
    const {
      customerList,
    } = this.state;
    return (
      <div className="customer-container">
        <Headline text="Kundenübersicht" />
        <div className="table-container">
          <Table
            tableHeaders={
              productTableHeaders
            }
            tableData={
              customerList
            }
          />
        </div>
      </div>
    );
  }
}

export default Customers;
