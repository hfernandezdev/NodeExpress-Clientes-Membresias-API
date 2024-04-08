const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  type: { type: String, enum: ['GOLD', 'PLUS', 'CLASSIC'] },
  creationDate: { type: Date, default: Date.now },
  beginDate: { type: Date, default: () => new Date(Date.now() + 20 * 24 * 60 * 60 * 1000) },
  endDate: { type: Date, default: () => new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000) }
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;
