const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  document: String,
  phoneNumber: Number,
  birthDate: Date,
  memberships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Membership' }]
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
