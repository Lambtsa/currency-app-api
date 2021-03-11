const filterCrypto = (data, crypto) => data
  .filter(r => r.asset_id_quote === crypto)[0]
  .rate;

module.exports.createCryptoRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: {
    BTC: filterCrypto(data.rates, 'BTC'),
    BCH: filterCrypto(data.rates, 'BCH'),
    EOS: filterCrypto(data.rates, 'EOS'),
    ETH: filterCrypto(data.rates, 'ETH'),
    HBAR: filterCrypto(data.rates, 'HBAR'),
  },
});

module.exports.createCurrencyRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: {
    AUD: data.rates.AUD,
    CAD: data.rates.CAD,
    CHF: data.rates.CHF,
    CNY: data.rates.CNY,
    DKK: data.rates.DKK,
    EUR: data.rates.EUR,
    GBP: data.rates.GBP,
    HKD: data.rates.HKD,
    JPY: data.rates.JPY,
    MXN: data.rates.MXN,
    NOK: data.rates.NOK,
    SEK: data.rates.SEK,
    USD: data.rates.USD,
  },
});
