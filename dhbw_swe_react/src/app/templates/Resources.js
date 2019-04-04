export const SERVER_ADDRESS = "http://viet.nat.selfnet.de:32404";
export const REST_CUSTOMER = "/api/kunde";
export const REST_PRODUCT = "/api/produkt";

const headerStrings = new Map();

headerStrings.set('name', 'Name');
headerStrings.set('address', 'Adresse');
headerStrings.set('count', 'Anzahl im Lager');
headerStrings.set('description', 'Produktbezeichung');
headerStrings.set('category', 'Kategorie');
headerStrings.set('sellPrice', 'Verkaufspreis in €');
headerStrings.set('buyPrice', 'Einkaufspreis in €');
headerStrings.set('supplier', 'Hersteller');
headerStrings.set('origin', 'Herkunft');
headerStrings.set('buyDate', 'Einkaufsdatum');

export default headerStrings;
