const fs = require('fs');
const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');

const currenciesDir = process.env.NODE_ENV === 'production'
  ? './data/data/currencies.json'
  : './data/mockData/currencies.json';

const { createCryptoRatesObj, createCurrencyRatesObj } = require('./helpers');

const getCurrencies = async () => {
  const rawCryptoData = await fetchCrypto();
  const rawCurrenciesData = await fetchCurrencies();
  const cryptoData = createCryptoRatesObj(rawCryptoData);
  const currencyData = createCurrencyRatesObj(rawCurrenciesData);
  const updatedCurrencies = {
    baseCurrency: 'EUR',
    rates: [
      ...cryptoData.rates,
      ...currencyData.rates,
    ],
  };
  fs.writeFile(currenciesDir, JSON.stringify(updatedCurrencies), err => {
    if (err) {
      console.log(err);
    }
    console.log('currency file created');
  });
};

module.exports = {
  getCurrencies,
};
