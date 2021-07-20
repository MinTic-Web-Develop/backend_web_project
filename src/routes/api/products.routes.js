const router = require('express').Router();
const productsController = require('../../controller/productsController');

router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', productsController.updateProductById);
router.delete('/:productId', productsController.deleteProductById);

module.exports = router;