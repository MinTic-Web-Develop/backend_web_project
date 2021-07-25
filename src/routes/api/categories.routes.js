const router = require('express').Router();
const categoriesController = require('../../controller/CategoryController');
const mw = require('../../middlewares/index');

router.get('/', categoriesController.getCategories);
router.get('/subcategory/:categoryId', categoriesController.getSubCategoriesByCategory);
router.get('/all', categoriesController.getAllCategories);
router.get('/:categoryId', categoriesController.getCategoryById);

router.post('/create', [mw.middleware.verifyToken, mw.middleware.isAdministrator], categoriesController.createCategory);

router.put('/update/:categoryId', [mw.middleware.verifyToken, mw.middleware.isSeller], categoriesController.updateCategoryById);

router.delete('/delete/:categoryId', [mw.middleware.verifyToken, mw.middleware.isAdministrator], categoriesController.deleteCategoryById); 

module.exports = router;