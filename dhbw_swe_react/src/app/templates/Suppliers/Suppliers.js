import React, { Component } from 'react';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';

class Suppliers extends Component {
  render() {
    const defaultTableHeaders = ['name', 'address'];

    const suppliersList = [
      {
        name: 'Müller GmbH',
        address: '012546 Stuttgart Wiesenstraße 128',
      },
    ];

    return (
      <div>
        <Headline text="Lieferanten" />
        <Table defaultTableHeaders={defaultTableHeaders} tableData={suppliersList} />
      </div>
    );
  }
}

export default Suppliers;
