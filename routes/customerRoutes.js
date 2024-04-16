const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/with-memberships', customerController.getCustomersWithMemberships);
router.get('/', customerController.getCustomers);
router.get('/:id', customerController.getCustomer);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
