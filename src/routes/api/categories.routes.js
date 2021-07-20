const router = require('express').Router();
const categoriesController = require('../../controller/CategoryController');

router.get('/', categoriesController.getCategories);
router.get('/subcategory/:categoryId', categoriesController.getSubCategoriesByCategory);
router.get('/all', categoriesController.getAllCategories);
router.get('/:categoryId', categoriesController.getCategoryById);

router.post('/create', categoriesController.createCategory);

router.put('/update/:categoryId', categoriesController.updateCategoryById);

router.delete('/delete/:categoryId', categoriesController.deleteCategoryById); 

module.exports = router;