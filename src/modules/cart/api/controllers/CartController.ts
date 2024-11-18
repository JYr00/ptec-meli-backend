import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../../../config/types';
import { UpdateCartItemUseCase } from '../../application/use_cases/UpdateCartItemUseCase';
import { RemoveFromCartUseCase } from '../../application/use_cases/RemoveFromCartUseCase';
import { GetCartUseCase } from '../../application/use_cases/GetCartUseCase';
import { AddToCartUseCase } from '../../application/use_cases/AddToCartUseCase';
import { ClearCartUseCase } from '../../application/use_cases/ClearCartUseCase';

@injectable()
export class CartController {
    constructor(
        @inject(TYPES.AddToCartUseCase)
        private readonly addToCartUseCase: AddToCartUseCase,
        @inject(TYPES.UpdateCartItemUseCase)
        private readonly updateCartItemUseCase: UpdateCartItemUseCase,
        @inject(TYPES.RemoveFromCartUseCase)
        private readonly removeFromCartUseCase: RemoveFromCartUseCase,
        @inject(TYPES.GetCartUseCase)
        private readonly getCartUseCase: GetCartUseCase,
        @inject(TYPES.ClearCartUseCase)
        private readonly clearCartUseCase: ClearCartUseCase,
    ) {}

    public addToCart = async (req: Request, res: Response) => {
        try {
            const { userId, productId, name, price, quantity } = req.body;
            await this.addToCartUseCase.execute(
                userId,
                productId,
                name,
                price,
                quantity,
            );
            res.status(200).json({ message: 'Producto agregado al carrito' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    public updateCartItem = async (req: Request, res: Response) => {
        try {
            const { userId, productId, quantity } = req.body;
            await this.updateCartItemUseCase.execute(
                userId,
                productId,
                quantity,
            );
            res.status(200).json({
                message: 'Producto actualizado en el carrito',
            });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    public removeFromCart = async (req: Request, res: Response) => {
        try {
            const { userId, productId } = req.body;
            await this.removeFromCartUseCase.execute(userId, productId);
            res.status(200).json({ message: 'Producto eliminado del carrito' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    public getCart = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const cart = await this.getCartUseCase.execute(userId);
            res.status(200).json(cart);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    public clearCart = async (req: Request, res: Response) => {
        try {
            const { userId } = req.body;
            await this.clearCartUseCase.execute(userId);
            res.status(200).json({ message: 'Carrito limpiado exitosamente' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };
}
