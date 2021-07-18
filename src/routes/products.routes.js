import { Router } from "express";
//import * as productsController from '../controller/productsController';
const productsController = require("../controller/productsController");
const router = Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.get("/:productId", productsController.getProductById);
router.put("/:productId", productsController.updateProductById);
router.delete("/:productId", productsController.deleteProductById);

module.exports = router;
