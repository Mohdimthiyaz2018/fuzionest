const express = require('express');
const { addProduct, createOrder, outward } = require('../Controllers/inventoryController');


const router = express.Router();

router.route('/fuzionest/addProduct').post(addProduct);
router.route('/fuzionest/createOrder').post(createOrder);
router.route('/fuzionest/outWard').post(outward);

module.exports = router;