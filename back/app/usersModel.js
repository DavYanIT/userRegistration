const { Schema, model } = require('mongoose');

const Users = new Schema({
  firstName: { type: String, required: [true, 'First Name is mandatory!'] },
  lastName: { type: String, required: [true, 'Last Name is mandatory!'] },
  birthdate: { type: Date, required: true },
  address: { type: String, required: [true, 'Address is mandatory!'] },
  address2: { type: String, required: false },
  country: { type: String, required: [true, 'Country is mandatory!'] },
  city: { type: String, required: [true, 'City is mandatory!'] },
  legal: { type: String, enum: ['Company', 'Individual'] },
  package: { type: String, enum: ['Standard Package', 'Premium Package'] },
});

module.exports = model('Users', Users);
