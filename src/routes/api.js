const router = require('express').Router();
const categoryRouter = require('./api/categories.routes')
const productsRouter = require('./api/products.routes')


router.use('/categories', categoryRouter);
router.use('/products', productsRouter);

module.exports = router;