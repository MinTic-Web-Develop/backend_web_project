const router = require('express').Router();
const productsController = require('../../controller/ProductsController');
const mw = require('../../middlewares/index');

router.get('/category/:categoryId', productsController.getProductsByCategory);
router.get('/', productsController.getProducts);
router.get('/detail/:productId', productsController.getProductById);

router.post('/create', [mw.middleware.verifyToken, mw.middleware.isAdministrator], productsController.createProduct);

router.put('/update/:productId', [mw.middleware.verifyToken, mw.middleware.isSeller], productsController.updateProductById);

router.delete('/delete/:productId',[mw.middleware.verifyToken, mw.middleware.isAdministrator], productsController.deleteProductById);

module.exports = router;