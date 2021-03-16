const mongoose = require('mongoose');

const uri = `mongodb+srv://lambtsa:${process.env.MONGO_DB_PASSWORD}@lambtsacluster.ncmw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
