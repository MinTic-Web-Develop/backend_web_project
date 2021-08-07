const router = require('express').Router();
const OrderController = require('../../controller/OrderController');


router.get('/', OrderController.getShoppingCart);
router.post('/add', OrderController.addProducts);

module.exports = router;