const router = require('express').Router();
const productsController = require('../../controller/ProductsController');

router.get('/category/:categoryId', productsController.getProductsByCategory);
router.get('/all', productsController.getProducts);
router.get('/detail/:productId', productsController.getProductById);

router.post('/create', productsController.createProduct);

router.put('/update/:productId', productsController.updateProductById);

router.delete('/delete/:productId', productsController.deleteProductById);

module.exports = router;