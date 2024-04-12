const createMembershipSchema =  require("../validators/createMembershipSchema");

const validateCreateMembership = (req, res, next) => {
  const { error } = createMembershipSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateCreateMembership;
