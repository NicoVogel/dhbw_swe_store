import React, { Component } from 'react';
import './Products.scss';

import Headline from '../../atoms/Headline/Headline';
import Table from '../../organisms/Table/Table';


class Products extends Component {
    state = {  }
    render() { 
        const productList = [
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            }, {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
            {
                count: 13,
                description: 'Kartoffel',
                category: 'Gemüse',
                sellPrice: 1.29,
                buyPrice: 0.89,
                supplier: 'Müller gmbH',
                origin: 'Deutschland'
            },
        ];

        const productTableHeaders = [
            {
                id: 'count',
                text: 'Anzahl im Lager'
            },
            {
                id: 'description',
                text: 'Produkt Bezeichung'
            },
            {
                id: 'category',
                text: 'Kategorie'
            },
            {
                id: 'sellPrice',
                text: 'Verkaufspreis in €'
            },
            {
                id: 'buyPrice',
                text: 'EInkaufspreis in €'
            },
            {
                id: 'supplier',
                text: 'Hersteller'
            },
            {
                id: 'origin',
                text: 'Herkunft'
            }
        ]
        return ( 
            <div className="products-container">
                <Headline text='Produktübersicht' />
                <div className="table-container">
                    <Table tableHeaders={productTableHeaders} tableData={productList}/>
                </div>
            </div>
            
        );
    }
}
 
export default Products;