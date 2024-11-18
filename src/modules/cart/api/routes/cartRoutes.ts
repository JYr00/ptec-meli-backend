import { Router } from 'express';
import { container } from '../../../../config/inversify.config';
import { TYPES } from '../../../../config/types';
import { CartController } from '../controllers/CartController';

const cartRoutes = Router();
const cartController = container.get<CartController>(TYPES.CartController);

cartRoutes.post('/add', cartController.addToCart);
cartRoutes.put('/update', cartController.updateCartItem);
cartRoutes.get('/:userId', cartController.getCart);
cartRoutes.delete('/remove', cartController.removeFromCart);
cartRoutes.delete('/clear', cartController.clearCart);

export default cartRoutes;
