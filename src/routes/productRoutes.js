import { Router } from 'express';
import ProductController from '@controllers/ProductController.js';
import authMiddleware from '@middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, ProductController.createProduct);
router.get('/:id', ProductController.getProductById);
router.put('/:id', authMiddleware, ProductController.updateProduct);
router.delete('/:id', authMiddleware, ProductController.deleteProduct);

export default router;