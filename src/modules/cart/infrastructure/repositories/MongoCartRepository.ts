import { Cart } from '../../domain/entities/Cart';
import { CartRepository } from '../../domain/repositories/CartRepository';
import { CartItem } from '../../domain/value_objects/CartItem';
import { CartModel } from '../models/CartModel';
import { injectable } from 'inversify';

@injectable()
export class MongoCartRepository implements CartRepository {
    async getCartByUserId(userId: string): Promise<Cart> {
        const cartDoc = await CartModel.findOne({ userId }); // Buscar por userId
        if (!cartDoc) {
            const newCart = new Cart(userId); // Crear un nuevo carrito si no existe
            await this.saveCart(newCart);
            return newCart;
        }

        const items = cartDoc.items.map(
            (item) =>
                new CartItem(
                    item.productId,
                    item.name,
                    item.price,
                    item.quantity,
                ),
        );

        return new Cart(cartDoc.userId, items);
    }

    async saveCart(cart: Cart): Promise<void> {
        const { id, items, totalPrice } = cart;

        await CartModel.findOneAndUpdate(
            { userId: id }, // Guardar basado en userId
            {
                userId: id,
                items: items.map((item) => ({
                    productId: item.productId,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                })),
                totalPrice,
            },
            { upsert: true }, // Crear si no existe
        );
    }
}
