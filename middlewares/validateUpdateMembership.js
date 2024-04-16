const updateMembershipSchema = require("../validators/updateMembershipSchema");

const validateUpdateMembership = (req, res, next) => {
  const { error } = updateMembershipSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateUpdateMembership;
