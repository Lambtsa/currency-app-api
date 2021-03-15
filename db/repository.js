const db = require('./db');

module.exports.getAllEmails = () => {
  return db.query('SELECT * FROM emails');
};

module.exports.addEmail = email => {
  const addEmailQuery = `
  INSERT INTO EMAILS (email)
  VALUES (
    $1
  )`
  return db.query(addEmailQuery, [email])
}
