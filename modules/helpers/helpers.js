const filterCrypto = (data, crypto) => {
  const { rate } = data
    .filter(r => r.asset_id_quote === crypto)[0];
  if (rate < 1) {
    const rounded = Math.round(rate * 1000000);
    return (rounded / 1000000)
      .toFixed(6);
  }
  return rate.toFixed(4);
};

module.exports.createCryptoRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: [
    {
      initials: 'BCH',
      name: 'Bitcoin Cash',
      rate: filterCrypto(data.rates, 'BCH'),
      logo: '/assets/flags/bch.webp',
    },
    {
      initials: 'BTC',
      name: 'Bitcoin',
      rate: filterCrypto(data.rates, 'BTC'),
      logo: '/assets/flags/btc.webp',
    },
    {
      initials: 'EOS',
      name: 'EOS',
      rate: filterCrypto(data.rates, 'EOS'),
      logo: '/assets/flags/eos.webp',
    },
    {
      initials: 'ETH',
      name: 'Ethereum',
      rate: filterCrypto(data.rates, 'ETH'),
      logo: '/assets/flags/eth.webp',
    },
    {
      initials: 'HBAR',
      name: 'Hedera Hashgraph',
      rate: filterCrypto(data.rates, 'HBAR'),
      logo: '/assets/flags/hbar.webp',
    },
    {
      initials: 'LTC',
      name: 'Litecoin',
      rate: filterCrypto(data.rates, 'LTC'),
      logo: '/assets/flags/ltc.webp',
    },
  ],
});

const filterCurrencies = (data, currency) => {
  const rate = data[currency];
  if (rate < 1) {
    const rounded = Math.round(rate * 1000000);
    return (rounded / 1000000)
      .toFixed(6);
  }
  return rate.toFixed(4);
};

module.exports.createCurrencyRatesObj = data => ({
  baseCurrency: 'EUR',
  rates: [
    {
      initials: 'AUD',
      name: 'Australian Dollar',
      rate: filterCurrencies(data.rates, 'AUD'),
      logo: '/assets/flags/aud.webp',
    },
    {
      initials: 'CAD',
      name: 'Canadian Dollar',
      rate: filterCurrencies(data.rates, 'CAD'),
      logo: '/assets/flags/cad.webp',
    },
    {
      initials: 'CHF',
      name: 'Swiss Franc',
      rate: filterCurrencies(data.rates, 'CHF'),
      logo: '/assets/flags/chf.webp',
    },
    {
      initials: 'CNY',
      name: 'Chinese Yuan',
      rate: filterCurrencies(data.rates, 'CNY'),
      logo: '/assets/flags/cny.webp',
    },
    {
      initials: 'DKK',
      name: 'Danish Krone',
      rate: filterCurrencies(data.rates, 'DKK'),
      logo: '/assets/flags/dkk.webp',
    },
    {
      initials: 'EUR',
      name: 'Euro',
      rate: filterCurrencies(data.rates, 'EUR'),
      logo: '/assets/flags/eur.webp',
    },
    {
      initials: 'GBP',
      name: 'British Pound Sterling',
      rate: filterCurrencies(data.rates, 'GBP'),
      logo: '/assets/flags/gbp.webp',
    },
    {
      initials: 'HKD',
      name: 'Hong Kong Dollar',
      rate: filterCurrencies(data.rates, 'HKD'),
      logo: '/assets/flags/hkd.webp',
    },
    {
      initials: 'JPY',
      name: 'Japanese Yen',
      rate: filterCurrencies(data.rates, 'JPY'),
      logo: '/assets/flags/jpy.webp',
    },
    {
      initials: 'MXN',
      name: 'Mexican Peso',
      rate: filterCurrencies(data.rates, 'MXN'),
      logo: '/assets/flags/mxn.webp',
    },
    {
      initials: 'NOK',
      name: 'Norwegian Krone',
      rate: filterCurrencies(data.rates, 'NOK'),
      logo: '/assets/flags/nok.webp',
    },
    {
      initials: 'SEK',
      name: 'Swedish Krona',
      rate: filterCurrencies(data.rates, 'SEK'),
      logo: '/assets/flags/sek.webp',
    },
    {
      initials: 'USD',
      name: 'United States Dollar',
      rate: filterCurrencies(data.rates, 'USD'),
      logo: '/assets/flags/usd.webp',
    },
  ],
});
