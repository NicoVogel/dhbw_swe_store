import React, { Component } from 'react';
import './Products.scss';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

class Products extends Component {
  // Customer Component is identical to this one, therefore the structure is explained here
  constructor() {
    super();
    this.state = {
      // category is the identifier for the table organism
      category: 'product',
      // in case the database is empty (empty response)
      // the table should still show available columns --> default values
      defaultTableHeaders: ['count', 'description', 'category', 'sellPrice', 'buyPrice', 'supplier', 'origin', 'buyDate'],
    };
  }

  render() {
    const {
      defaultTableHeaders,
      category,
    } = this.state;

    // Table organism is called with the predefined headers and the category
    return (
      <div className="products-container">
        <Headline text="Produktübersicht" />
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

export default Products;
