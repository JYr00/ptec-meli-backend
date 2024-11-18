import { inject, injectable } from 'inversify';
import { CartRepository } from '../../domain/repositories/CartRepository';
import { TYPES } from '../../../../config/types';
import { Cart } from '../../domain/entities/Cart';

@injectable()
export class GetCartUseCase {
    constructor(
        @inject(TYPES.CartRepository) private cartRepository: CartRepository,
    ) {}

    public async execute(userId: string): Promise<Cart> {
        return await this.cartRepository.getCartByUserId(userId);
    }
}
