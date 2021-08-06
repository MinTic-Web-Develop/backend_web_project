const router = require('express').Router();
const cityController = require('../../controller/CitiesController');


router.get('/', cityController.getCities);
router.get('/:cityId', cityController.getCityById);
router.get('/department/:departmentId', cityController.getCityByDepartmentId)

module.exports = router;