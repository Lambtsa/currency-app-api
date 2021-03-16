const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');

const { createCryptoRatesObj, createCurrencyRatesObj } = require('./helpers');

const getCurrencies = async () => {
  const rawCryptoData = await fetchCrypto();
  const rawCurrenciesData = await fetchCurrencies();
  const cryptoData = createCryptoRatesObj(rawCryptoData);
  const currencyData = createCurrencyRatesObj(rawCurrenciesData);
  return [
    ...cryptoData.rates,
    ...currencyData.rates,
  ];
};

module.exports = {
  getCurrencies,
};
