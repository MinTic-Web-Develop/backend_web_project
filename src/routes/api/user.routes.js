const router = require('express').Router();
const userController = require('../../controller/UserController');


router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);

router.post('/location/add/:userId', userController.addLocation);

router.put('/update/:userId', userController.updateUserInformationById);
router.put('/location/:locationId', userController.updateLocationById);
router.put('/deactivate/:userId', userController.deactivateUsersById);
router.put('/activate/:userId', userController.activateUsersById);

router.delete('/location/:locationId', userController.deleteLocationById);

module.exports = router;