const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');
// const { fetchCrypto, fetchCurrencies } = require('./fetch/fetchData');
const { createCryptoRatesObj, createCurrencyRatesObj } = require('./helpers');

const currencies = async () => {
  const rawCryptoData = await fetchCrypto();
  const rawCurrenciesData = await fetchCurrencies();
  const cryptoData = createCryptoRatesObj(rawCryptoData);
  const currencyData = createCurrencyRatesObj(rawCurrenciesData);
  return {
    baseCurrency: 'EUR',
    rates: [
      ...cryptoData.rates,
      ...currencyData.rates,
    ],
  };
};

module.exports = {
  currencies,
};
