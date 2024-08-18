import { Router } from 'express';
import CategoryController from '@controllers/CategoryController.js';
import authMiddleware from '@middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, CategoryController.createCategory);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id', authMiddleware, CategoryController.updateCategory);
router.delete('/:id', authMiddleware, CategoryController.deleteCategory);

export default router;
