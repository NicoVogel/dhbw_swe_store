import React, { Component } from 'react';
import './Customer.scss';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      category: 'customer',
      defaultTableHeaders: ['name', 'address'],
    };
  }

  render() {
    const {
      defaultTableHeaders,
      category,
    } = this.state;
    return (
      <div className="customer-container">
        <Headline text="Kundenübersicht" />
        <Table
          defaultTableHeaders={
              defaultTableHeaders
            }
          category={
                category
              }
        />
      </div>
    );
  }
}

export default Customers;
