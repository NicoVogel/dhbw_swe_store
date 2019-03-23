import React, { Component } from 'react';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

class Suppliers extends Component {
    state = {  }
    render() { 

        const suppliersTableHeaders = [
            {
                text: 'Name'
            },
            {
                text: 'Adresse'
            }
        ];

        const suppliersList = [
            {
                name: 'Müller GmbH',
                addresse: '012546 Stuttgart Wiesenstraße 128'
            }
        ];

        return ( 
            <div>
            <Headline text='Lieferanten'/>
            <Table tableHeaders={suppliersTableHeaders} tableData={suppliersList} />
            </div>
        );
    }
}
 
export default Suppliers;