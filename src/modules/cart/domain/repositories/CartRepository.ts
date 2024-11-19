import { Cart } from "../entities/Cart";

export interface CartRepository {
    getCartByUserId(userId: string): Promise<Cart>;
    saveCart(cart: Cart): Promise<void>;
}
