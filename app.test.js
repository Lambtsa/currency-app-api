const request = require('supertest');
const { app } = require('./app');
const crypto = require('./data/mockData/mockCryptoData.json');
const currencies = require('./data/mockData/mockCurrencyData.json');
const { createCryptoRatesObj, createCurrencyRatesObj } = require('./helpers');

describe('GET /', () => {
  test('responds with json', (done) => {
    request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
  })
  test('responds with json message', (done) => {
    request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect({ message: "You are at the root"}, done);
  })
})

describe('GET /crypto', () => {
  const expected = createCryptoRatesObj(crypto);
  test('responds with a json', (done) => {
    request(app)
    .get('/crypto')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(expected)
    .expect(200, done)
  })
})

describe('GET /currencies', () => {
  const expected = createCurrencyRatesObj(currencies);
  test('responds with a json', (done) => {
    request(app)
    .get('/currencies')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(expected)
    .expect(200, done)
  });
});
