const db = require('./db');

module.exports.getAllEmails = () => db.query('SELECT email FROM emails');

module.exports.addEmail = email => {
  const addEmailQuery = `
  INSERT INTO EMAILS (email)
  VALUES (
    $1
  )`;
  return db.query(addEmailQuery, [email]);
};

module.exports.getAllCurrencies = () => db.query('SELECT * FROM currencies');

module.exports.addCurrencies = rates => {
  const ratesRows = [];
  rates.forEach(rate => ratesRows.push(`('${rate.initials}', '${rate.name}', '${rate.rate}', '${rate.logo}')`));
  const ratesString = ratesRows.join(',');
  const createCurrencyQuery = `
    DROP TABLE IF EXISTS Currencies;
    CREATE TABLE IF NOT EXISTS Currencies (
      id SERIAL PRIMARY KEY,
      initials VARCHAR NOT NULL,
      name VARCHAR NOT NULL,
      rate VARCHAR NOT NULL,
      logo VARCHAR NOT NULL
    );
    INSERT INTO Currencies (initials, name, rate, logo)
    VALUES 
      ${ratesString}
  `;
  return db.query(createCurrencyQuery);
};
