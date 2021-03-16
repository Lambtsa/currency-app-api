const request = require('supertest');
const { app } = require('./app');

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

describe('GET /currencies', () => {
  test('responds with a json', (done) => {
    request(app)
    .get('/currencies')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });
});
