const fs = require('fs');
const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');

const fileDirectory = process.env.NODE_ENV === 'production'
  ? './data/data'
  : './data/mockData';

const { createCryptoRatesObj, createCurrencyRatesObj } = require('./helpers');

const currencies = async () => {
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
  fs.writeFile(`${fileDirectory}/data.json`, JSON.stringify(updatedCurrencies), err => {
    if (err) {
      throw err;
    }
    console.log('file created');
  });
};

module.exports = {
  currencies,
};
