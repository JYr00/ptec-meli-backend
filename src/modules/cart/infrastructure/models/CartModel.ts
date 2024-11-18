import mongoose, { Schema, Document } from 'mongoose';
import { CartItem } from '../../domain/value_objects/CartItem';

export interface CartDocument extends Document {
    userId: string;
    items: CartItem[];
    totalPrice: number;
}

const CartItemSchema = new Schema<CartItem>({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
});

const CartSchema = new Schema<CartDocument>({
    userId: { type: String, required: true, unique: true },
    items: { type: [CartItemSchema], default: [] },
    totalPrice: { type: Number, default: 0 },
});


export const CartModel = mongoose.model<CartDocument>('Cart', CartSchema);
