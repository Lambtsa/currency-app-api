const { fetchCrypto, fetchCurrencies } = process.env.NODE_ENV === 'production'
  ? require('./fetch/fetchData')
  : require('./fetch/mockFetchData');

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
  return updatedCurrencies;
};

module.exports = {
  currencies,
};
