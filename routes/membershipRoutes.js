const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

router.get('/', membershipController.getMemberships);
router.get('/:id', membershipController.getMembership);
router.post('/', membershipController.createMembership);
router.put('/:id', membershipController.updateMembership);
router.delete('/:id', membershipController.deleteMembership);

module.exports = router;
