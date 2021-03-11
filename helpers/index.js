const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');
// const { fetchCrypto, fetchCurrencies } = require('./fetch/fetchData');
const { createCryptoRatesObj, createCurrencyRatesObj } = require('./helpers');

module.exports = {
  fetchCrypto,
  fetchCurrencies,
  createCryptoRatesObj,
  createCurrencyRatesObj,
};
