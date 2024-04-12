const createCustomerSchema = require("../validators/createCustomerSchema");

const validateCreateCustomer = (req, res, next) => {
  const { error } = createCustomerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateCreateCustomer;
