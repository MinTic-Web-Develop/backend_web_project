const router = require('express').Router();
const categoryRouter = require('./api/categories.routes');
const productsRouter = require('./api/products.routes');
const authRouter = require('./api/auth.routes');
const userRouter = require('./api/user.routes');

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productsRouter);

module.exports = router;