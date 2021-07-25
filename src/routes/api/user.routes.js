const router = require('express').Router();
const userController = require('../../controller/UserController');


router.get('/', userController.getUsers);
router.get('/roles/:rol', userController.getUsersByRol);
router.get('/:userId', userController.getUserById);

router.post('/create', userController.createUser);
router.post('/location/add', userController.addLocation);

router.put('/update/:userId', userController.updateUserInformationById);
router.put('/location/:locationId', userController.updateLocationById);
router.put('/deactivate/:userId', userController.deactivateUsersById);

router.delete('/location/:locationId', userController.deleteLocationById);

module.exports = router;