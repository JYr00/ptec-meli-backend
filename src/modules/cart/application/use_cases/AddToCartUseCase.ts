import { inject, injectable } from 'inversify';
import { CartRepository } from '../../domain/repositories/CartRepository';
import { TYPES } from '../../../../config/types';
import { CartItem } from '../../domain/value_objects/CartItem';

@injectable()
export class AddToCartUseCase {
    constructor(
        @inject(TYPES.CartRepository) private cartRepository: CartRepository,
    ) {}

    public async execute(
        userId: string,
        productId: string,
        name: string,
        price: number,
        quantity: number,
    ): Promise<void> {
        const cart = await this.cartRepository.getCartByUserId(userId);
        const item = new CartItem(productId, name, price, quantity);
        cart.addItem(item);
        await this.cartRepository.saveCart(cart);
    }
}
