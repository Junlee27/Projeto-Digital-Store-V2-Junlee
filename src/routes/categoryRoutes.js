import { Router } from 'express';
import CategoryController from '../controllers/CategoryController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/search', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.post('/', authMiddleware, CategoryController.create);
router.put('/:id', authMiddleware, CategoryController.update);
router.delete('/:id', authMiddleware, CategoryController.delete);

export default router;