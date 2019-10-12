const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
    console.log('Mongoose is connected');
  } catch (error) {
    console.log(`Mongoose connection Failed ${error}`);
  }
}

connect()
