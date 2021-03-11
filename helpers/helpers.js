const filterCrypto = (data, crypto) => data
  .filter(r => r.asset_id_quote === crypto)[0]
  .rate;

module.exports.createCryptoRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: {
    btc: filterCrypto(data.rates, 'BTC'),
    bch: filterCrypto(data.rates, 'BCH'),
    eos: filterCrypto(data.rates, 'EOS'),
    eth: filterCrypto(data.rates, 'ETH'),
    hbar: filterCrypto(data.rates, 'HBAR'),
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
