const { Router } = require("express");
const CategoryController = require("../controller/CategoryController.js");
const router = Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategoryById);
router.post("/create-category", CategoryController.createCategory);
router.delete("/delete/:id", CategoryController.deleteCategory);
router.put("/update/:id", CategoryController.updateCategory);

module.exports = router;
