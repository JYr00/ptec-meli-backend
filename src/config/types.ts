export const TYPES = {
    // ===Products===
    ProductRepository: Symbol.for('ProductRepository'),
    GetPaginatedProductsUseCase: Symbol.for('GetPaginatedProductsUseCase'),
    ProductController: Symbol.for('ProductController'),
    // ===End Products===

    // ===Cart===
    CartRepository: Symbol.for('CartRepository'),
    CartController: Symbol.for('CartController'),

    AddToCartUseCase: Symbol.for('AddToCartUseCase'),
    GetCartUseCase: Symbol.for('GetCartUseCase'),
    UpdateCartItemUseCase: Symbol.for('UpdateCartItemUseCase'),
    RemoveFromCartUseCase: Symbol.for('RemoveFromCartUseCase'),
    ClearCartUseCase: Symbol.for('ClearCartUseCase'),
    // ===End Cart===
};
