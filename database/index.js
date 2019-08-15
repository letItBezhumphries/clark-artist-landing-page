const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error connection to the database...')
);
db.once('open', function () {
  console.log('Successfully connected to the database');
});


module.exports = db;
