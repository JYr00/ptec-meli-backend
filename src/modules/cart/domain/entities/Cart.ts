import { CartItem } from "../value_objects/CartItem";


export class Cart {
    public id: string;
    public items: CartItem[];
    public totalPrice: number;

    constructor(id: string, items: CartItem[] = []) {
        this.id = id;
        this.items = items;
        this.totalPrice = this.calculateTotal();
    }

    private calculateTotal(): number {
        return this.items.reduce(
            (total, item) => total + item.getSubtotal(),
            0,
        );
    }

    public addItem(item: CartItem): void {
        const existingItem = this.items.find(
            (i) => i.productId === item.productId,
        );
        if (existingItem) {
            const updatedItem = new CartItem(
                existingItem.productId,
                existingItem.name,
                existingItem.price,
                existingItem.quantity + item.quantity,
            );
            this.items = this.items.map((i) =>
                i.productId === item.productId ? updatedItem : i,
            );
        } else {
            this.items.push(item);
        }
        this.totalPrice = this.calculateTotal();
    }

    public removeItem(productId: string): void {
        this.items = this.items.filter((item) => item.productId !== productId);
        this.totalPrice = this.calculateTotal();
    }

    public updateItem(productId: string, quantity: number): void {
        const item = this.items.find((i) => i.productId === productId);
        if (!item) {
            throw new Error('El producto no existe en el carrito');
        }

        const updatedItem = new CartItem(
            item.productId,
            item.name,
            item.price,
            quantity,
        );

        this.items = this.items.map((i) =>
            i.productId === productId ? updatedItem : i,
        );

        this.totalPrice = this.calculateTotal();
    }
}
