import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductRepository } from '../modules/products/domain/repositories/ProductRepository';
import { ProductAPIRepository } from '../modules/products/infrastructure/service/ProductAPIRepository';
import { GetPaginatedProductsUseCase } from '../modules/products/application/use_cases/GetPaginatedProductsUseCase';
import { ProductController } from '../modules/products/api/controllers/ProductController';
import { CartRepository } from '../modules/cart/domain/repositories/CartRepository';
import { MongoCartRepository } from '../modules/cart/infrastructure/repositories/MongoCartRepository';
import { CartController } from '../modules/cart/api/controllers/CartController';
import { AddToCartUseCase } from '../modules/cart/application/use_cases/AddToCartUseCase';
import { GetCartUseCase } from '../modules/cart/application/use_cases/GetCartUseCase';
import { UpdateCartItemUseCase } from '../modules/cart/application/use_cases/UpdateCartItemUseCase';
import { RemoveFromCartUseCase } from '../modules/cart/application/use_cases/RemoveFromCartUseCase';
import { ClearCartUseCase } from '../modules/cart/application/use_cases/ClearCartUseCase';

const container = new Container();

// ===Products===
container
    .bind<ProductRepository>(TYPES.ProductRepository)
    .to(ProductAPIRepository);
container
    .bind<GetPaginatedProductsUseCase>(TYPES.GetPaginatedProductsUseCase)
    .to(GetPaginatedProductsUseCase);
container
    .bind<ProductController>(TYPES.ProductController)
    .to(ProductController);
// ===End Products===

// ===Cart===
container.bind<CartRepository>(TYPES.CartRepository).to(MongoCartRepository);
container.bind<CartController>(TYPES.CartController).to(CartController);
container.bind<AddToCartUseCase>(TYPES.AddToCartUseCase).to(AddToCartUseCase);
container.bind<GetCartUseCase>(TYPES.GetCartUseCase).to(GetCartUseCase);
container.bind<UpdateCartItemUseCase>(TYPES.UpdateCartItemUseCase).to(UpdateCartItemUseCase);
container.bind<RemoveFromCartUseCase>(TYPES.RemoveFromCartUseCase).to(RemoveFromCartUseCase);
container.bind<ClearCartUseCase>(TYPES.ClearCartUseCase).to(ClearCartUseCase);
// ===End Cart===

export { container };
