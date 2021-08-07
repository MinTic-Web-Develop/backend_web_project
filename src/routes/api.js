const router = require('express').Router();
const categoryRouter = require('./api/categories.routes');
const productsRouter = require('./api/products.routes');
const authRouter = require('./api/auth.routes');
const userRouter = require('./api/user.routes');
const cityRouter = require('./api/cities.routes');
const departmentRouter = require('./api/departments.routes');
const restaurantRouter = require('./api/restaurant.routes');
const orderRouter = require('./api/order.routes');


router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/products', productsRouter);
router.use('/cities', cityRouter);
router.use('/departments', departmentRouter);
router.use('/restaurant', restaurantRouter);
router.use('/shoppingcart', orderRouter);


module.exports = router;