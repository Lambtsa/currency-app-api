const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');

const repository = require('../db/repository');

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
  repository.addCurrencies(updatedCurrencies.rates)
    .then()
    .catch(err => console.log(err));
};

module.exports = {
  getCurrencies,
};
