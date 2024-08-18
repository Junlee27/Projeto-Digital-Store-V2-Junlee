import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:id', authMiddleware, UserController.getById);
router.put('/:id', authMiddleware, UserController.update);
router.delete('/:id', authMiddleware, UserController.delete);

export default router;