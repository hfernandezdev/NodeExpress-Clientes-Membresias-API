const Joi = require('joi');

const updateMembershipSchema = Joi.object({
  customerId: Joi.string(),
  type: Joi.string().valid('GOLD', 'PLUS', 'CLASSIC'),
});

module.exports = updateMembershipSchema;
