const mongoose = require('mongoose');

const uri = process.env.NODE_ENV === 'production'
  ? `mongodb+srv://lambtsa:${process.env.MONGO_DB_PASSWORD_PROD}@currency-api-prod.twcxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  : `mongodb+srv://lambtsa:${process.env.MONGO_DB_PASSWORD_DEV}@lambtsacluster.ncmw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const connectedDb = mongoose.connection;

connectedDb.on('connected', () => console.log('MongoDB: connected to database.'));
connectedDb.on('error', error => console.log(`MongoDB: ${error.message}.`));
connectedDb.on('disconnected', () => console.log('MongoDB: disconnected.'));

process.on('SIGINT', () => {
  connectedDb.close(() => {
    console.log('MongoDB: Connection closed.');
    process.exit(0);
  });
});
