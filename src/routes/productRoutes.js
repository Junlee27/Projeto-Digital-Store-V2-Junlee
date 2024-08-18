import { Router } from 'express';
import ProductController from '../controllers/ProductController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/search', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', authMiddleware, ProductController.create);
router.put('/:id', authMiddleware, ProductController.update);
router.delete('/:id', authMiddleware, ProductController.delete);

export default router;