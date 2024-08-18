import { Router } from 'express';
import UserController from '@controllers/UserController.js';
import authMiddleware from '@middleware/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, UserController.createUser);
router.get('/:id', authMiddleware, UserController.getUserById);
router.put('/:id', authMiddleware, UserController.updateUser);
router.delete('/:id', authMiddleware, UserController.deleteUser);

export default router;
