const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const URI = 'mongodb://localhost:27017/testaroo';
// connect to mongodb
before(function (done) {
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
      console.log('You have connected to TESTAROO db!');
      done();
    })
    .catch(err => {
      console.log('error', err.message);
    });
});

// Drop the characters colletion before each test
beforeEach(function (done) {
  // drop a collection
  mongoose.connection.db.dropCollection('mariochars', () => {
    done();
  });
});
