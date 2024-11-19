import { inject, injectable } from 'inversify';
import { CartRepository } from '../../domain/repositories/CartRepository';
import { TYPES } from '../../../../config/types';

@injectable()
export class UpdateCartItemUseCase {
    constructor(
        @inject(TYPES.CartRepository)
        private readonly cartRepository: CartRepository,
    ) {}

    public async execute(
        userId: string,
        productId: string,
        quantity: number,
    ): Promise<void> {
        const cart = await this.cartRepository.getCartByUserId(userId);
        cart.updateItem(productId, quantity);
        await this.cartRepository.saveCart(cart);
    }
}
