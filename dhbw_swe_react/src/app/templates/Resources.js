export const SERVER_ADDRESS = 'http://viet.nat.selfnet.de:32404';
// export const REST_CUSTOMER = '/api/customer';
// export const REST_PRODUCT = '/api/product';

export const REST_LINKS = new Map();

REST_LINKS.set('customer', '/api/customer');
REST_LINKS.set('product', '/api/product');

export const headerStrings = new Map();

headerStrings.set('name', 'Name');
headerStrings.set('address', 'Adresse');
headerStrings.set('count', 'Anzahl im Lager');
headerStrings.set('description', 'Produktbezeichung');
headerStrings.set('category', 'Kategorie');
headerStrings.set('sellPrice', 'Verkaufspreis');
headerStrings.set('buyPrice', 'Einkaufspreis');
headerStrings.set('supplier', 'Hersteller');
headerStrings.set('origin', 'Herkunft');
headerStrings.set('buyDate', 'Einkaufsdatum');
