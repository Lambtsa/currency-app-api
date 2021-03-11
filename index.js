const { app } = require('./app');
// const fs = require('fs');
// const {
//   fetchCrypto,
//   createCryptoRatesObj,
// } = require('./helpers');

// (async () => {
//   const data = await fetchCrypto();
//   const crypto = createCryptoRatesObj(data);

//   fs.writeFile('./data/mockData/crypto.json', JSON.stringify(crypto), (err) => {
//     if (err) {
//       throw err
//     }
//     console.log('file created')
//   })
// })();

const port = process.env.PORT || 8080;

/* eslint-disable-next-line */
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
