import React from 'react';

export const SERVER_ADDRESS = 'http://viet.nat.selfnet.de:32404';
export const REST_LINKS = new Map();
export const headerStrings = new Map();
export const CATEGORY = new Map();

export const AddButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="35.56" viewBox="0 0 43 35.56">
    <g id="table-add-button" transform="translate(-0.1 35.56) rotate(-90)">
      <path id="table-add-icon" d="M17,.1c9.416,0,17,7.953,17,17.793,0,4.987-2.616,10.245-9.547,17.389L17,43.1,9.416,35.282C2.616,28,0,22.746,0,17.893,0,8.053,7.585.1,17,.1Z" transform="translate(0 0)" fill="#772432" fill-rule="evenodd"/>
      <text id="table-add-text" transform="translate(10.56 17.652) rotate(90)" fill="#fff" fontSize="23"><tspan x="-7.67" y="0">+</tspan></text>
    </g>
  </svg>

);
export const RemoveButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42.942" height="35" viewBox="0 0 42.942 35">
    <g id="table-delete-button" transform="translate(-0.1 35) rotate(-90)">
      <path id="table-add-icon" d="M17.5.1A17.61,17.61,0,0,1,35,17.869c0,4.981-2.692,10.231-9.827,17.365L17.5,43.042,9.692,35.235C2.692,27.965,0,22.715,0,17.869A17.61,17.61,0,0,1,17.5.1Z" transform="translate(0 0)" fill="#ff002b" fill-rule="evenodd"/>
      <g id="ic_expand_close" transform="translate(24.746 10.289) rotate(90)">
        <path id="path" d="M14.5,1.45,13.05,0,7.25,5.8,1.45,0,0,1.45l5.8,5.8L0,13.05,1.45,14.5l5.8-5.8,5.8,5.8,1.45-1.45L8.7,7.25Z" transform="translate(0 0)" fill="#fff" />
      </g>
    </g>
  </svg>

);

REST_LINKS.set('customer', '/api/customer');
REST_LINKS.set('product', '/api/product');

headerStrings.set('name', 'Name');
headerStrings.set('address', 'Adresse');
headerStrings.set('count', 'Verfügbarkeit im Lager');
headerStrings.set('description', 'Bezeichnung');
headerStrings.set('category', 'Produktart');
headerStrings.set('sellPrice', 'Verkaufspreis');
headerStrings.set('buyPrice', 'Einkaufspreis');
headerStrings.set('supplier', 'Hersteller');
headerStrings.set('origin', 'Herkunft');
headerStrings.set('buyDate', 'Einkaufsdatum');

CATEGORY.set('product', 'Produkte');
CATEGORY.set('customer', 'Kunde');
