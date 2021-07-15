import {Router} from 'express'
import * as productsController from '../controller/products.controller';
const router = Router()

router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', productsController.updateProductById);
router.delete('/:productId', productsController.deleteProductById);

export default router;