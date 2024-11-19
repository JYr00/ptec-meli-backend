import { inject, injectable } from 'inversify';
import { CartRepository } from '../../domain/repositories/CartRepository';
import { TYPES } from '../../../../config/types';

@injectable()
export class ClearCartUseCase {
    constructor(
        @inject(TYPES.CartRepository) private readonly cartRepository: CartRepository,
    ) {}

    public async execute(userId: string): Promise<void> {
        const cart = await this.cartRepository.getCartByUserId(userId);
        cart.items = []; // Limpia los productos del carrito
        cart.totalPrice = 0; // Reinicia el precio total
        await this.cartRepository.saveCart(cart);
    }
}
