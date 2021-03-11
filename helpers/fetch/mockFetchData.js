const crypto = require('../../data/mockData/mockCryptoData.json');
const currencies = require('../../data/mockData/mockCurrencyData.json');

const fetch = filename => Promise.resolve(filename);

/*
  Crypto
*/
module.exports.fetchCrypto = () => fetch(crypto);

/*
  Currencies
*/
module.exports.fetchCurrencies = () => fetch(currencies);
