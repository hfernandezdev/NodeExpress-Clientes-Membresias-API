const updateCustomerSchema = require("../validators/updateCustomerSchema");

const validateUpdateCustomer = (req, res, next) => {
  const { error } = updateCustomerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateUpdateCustomer;
