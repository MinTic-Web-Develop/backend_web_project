const router = require('express').Router();
const departmentController = require('../../controller/DepartmentController');


router.get('/', departmentController.getDepartments);

module.exports = router;