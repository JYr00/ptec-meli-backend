import { Router } from 'express';
import { container } from '../../../../config/inversify.config';
import { TYPES } from '../../../../config/types';
import { CartController } from '../controllers/CartController';
import { authMiddleware } from '../../../../middleware/authMiddleware';

const cartRoutes = Router();
const cartController = container.get<CartController>(TYPES.CartController);

cartRoutes.post('/add', authMiddleware, cartController.addToCart);
cartRoutes.put('/update', authMiddleware, cartController.updateCartItem);
cartRoutes.get('/:userId', authMiddleware, cartController.getCart);
cartRoutes.delete('/remove', authMiddleware, cartController.removeFromCart);
cartRoutes.delete('/clear', authMiddleware, cartController.clearCart);

export default cartRoutes;
