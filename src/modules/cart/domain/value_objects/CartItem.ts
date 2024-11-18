export class CartItem {
    public readonly productId: string;
    public readonly name: string;
    public readonly price: number;
    public readonly quantity: number;

    constructor(
        productId: string,
        name: string,
        price: number,
        quantity: number,
    ) {
        if (quantity <= 0) {
            throw new Error('La cantidad debe ser mayor a 0');
        }

        if (price < 0) {
            throw new Error('El precio no puede ser negativo');
        }

        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Método para calcular el subtotal
    public getSubtotal(): number {
        return this.price * this.quantity;
    }
}
