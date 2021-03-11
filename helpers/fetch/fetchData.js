const fetch = require('node-fetch');

/*
  Crypto
*/
module.exports.fetchCrypto = () => fetch('https://rest.coinapi.io/v1/exchangerate/EUR', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    'X-CoinAPI-Key': 'C293F3C9-F920-4E59-9AA9-BC49B2C015EC',
  },
})
  .then(response => response.json());

/*
  Currencies
*/
module.exports.fetchCurrencies = () => fetch(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
})
  .then(response => response.json());
