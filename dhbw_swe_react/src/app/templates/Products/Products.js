import React, { Component } from 'react';
import './Products.scss';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      category: 'product',
      defaultTableHeaders: ['count', 'description', 'category', 'sellPrice', 'buyPrice', 'supplier', 'origin', 'buyDate'],
    };
  }

  render() {
    const {
      defaultTableHeaders,
      category,
    } = this.state;
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
