const Joi = require('joi');

const createMembershipSchema = Joi.object({
  customerId: Joi.string().required(),
  type: Joi.string().valid('GOLD', 'PLUS', 'CLASSIC').required(),
});

module.exports = createMembershipSchema;
