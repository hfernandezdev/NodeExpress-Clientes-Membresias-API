const Joi = require('joi');

const updateCustomerSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  document: Joi.string(),
  phoneNumber: Joi.number(),
  birthDate: Joi.date(),
});

module.exports = updateCustomerSchema;
