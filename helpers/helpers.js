const filterCrypto = (data, crypto) => data
  .filter(r => r.asset_id_quote === crypto)[0]
  .rate;

module.exports.createCryptoRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: [
    {
      name: 'BCH',
      rate: filterCrypto(data.rates, 'BCH'),
      logo: '/assets/flags/bch.webp',
    },
    {
      name: 'BTC',
      rate: filterCrypto(data.rates, 'BTC'),
      logo: '/assets/flags/btc.webp',
    },
    {
      name: 'EOS',
      rate: filterCrypto(data.rates, 'EOS'),
      logo: '/assets/flags/eos.webp',
    },
    {
      name: 'ETH',
      rate: filterCrypto(data.rates, 'ETH'),
      logo: '/assets/flags/eth.webp',
    },
    {
      name: 'HBAR',
      rate: filterCrypto(data.rates, 'HBAR'),
      logo: '/assets/flags/hbar.webp',
    },
    {
      name: 'LTC',
      rate: filterCrypto(data.rates, 'LTC'),
      logo: '/assets/flags/ltc.webp',
    },
  ],
});

module.exports.createCurrencyRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: [
    {
      name: 'AUD',
      rate: data.rates.AUD,
      logo: '/assets/flags/aud.webp',
    },
    {
      name: 'CAD',
      rate: data.rates.CAD,
      logo: '/assets/flags/cad.webp',
    },
    {
      name: 'CHF',
      rate: data.rates.CHF,
      logo: '/assets/flags/chf.webp',
    },
    {
      name: 'CNY',
      rate: data.rates.CNY,
      logo: '/assets/flags/cny.webp',
    },
    {
      name: 'DKK',
      rate: data.rates.DKK,
      logo: '/assets/flags/dkk.webp',
    },
    {
      name: 'EUR',
      rate: data.rates.EUR,
      logo: '/assets/flags/eur.webp',
    },
    {
      name: 'GBP',
      rate: data.rates.GBP,
      logo: '/assets/flags/gbp.webp',
    },
    {
      name: 'HKD',
      rate: data.rates.HKD,
      logo: '/assets/flags/hkd.webp',
    },
    {
      name: 'JPY',
      rate: data.rates.JPY,
      logo: '/assets/flags/jpy.webp',
    },
    {
      name: 'MXN',
      rate: data.rates.MXN,
      logo: '/assets/flags/mxn.webp',
    },
    {
      name: 'NOK',
      rate: data.rates.NOK,
      logo: '/assets/flags/nok.webp',
    },
    {
      name: 'SEK',
      rate: data.rates.SEK,
      logo: '/assets/flags/sek.webp',
    },
    {
      name: 'USD',
      rate: data.rates.USD,
      logo: '/assets/flags/usd.webp',
    },
  ],
});
