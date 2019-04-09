export const SERVER_ADDRESS = 'http://viet.nat.selfnet.de:32404';
export const REST_LINKS = new Map();
export const headerStrings = new Map();
export const CATEGORY = new Map();

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
