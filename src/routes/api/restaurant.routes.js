const router = require('express').Router();
const restaurantController = require('../../controller/RestaurantController');


router.get('/', restaurantController.getRestaurants);
router.get('/:restaurantId', restaurantController.getRestaurantsById);

router.post('/create', restaurantController.createRestaurant);

router.put('/deactivate/:restaurantId', restaurantController.closeRestaurant);


module.exports = router;