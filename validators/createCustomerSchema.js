const Joi = require('joi');

const createCustomerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  document: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  birthDate: Joi.date().required(),
});

module.exports = createCustomerSchema;
