import { inject, injectable } from 'inversify';
import { CartRepository } from '../../domain/repositories/CartRepository';
import { TYPES } from '../../../../config/types';

@injectable()
export class RemoveFromCartUseCase {
    constructor(
        @inject(TYPES.CartRepository) private readonly cartRepository: CartRepository,
    ) {}

    public async execute(userId: string, productId: string): Promise<void> {
        const cart = await this.cartRepository.getCartByUserId(userId);
        cart.removeItem(productId);
        await this.cartRepository.saveCart(cart);
    }
}
