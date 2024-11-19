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
import { UserRepository } from '../modules/users/domain/repositories/UserRepository';
import { RegisterUserUseCase } from '../modules/users/application/use_cases/RegisterUserUseCase';
import { MongoUserRepository } from '../modules/users/infrastructure/repositories/MongoUserRepository';
import { AuthenticateUserUseCase } from '../modules/users/application/use_cases/AuthenticateUserUseCase';
import { AuthController } from '../modules/users/api/controllers/AuthController';

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

// ===Users===
container.bind<UserRepository>(TYPES.UserRepository).to(MongoUserRepository);
container
  .bind<RegisterUserUseCase>(TYPES.RegisterUserUseCase)
  .to(RegisterUserUseCase);
container
  .bind<AuthenticateUserUseCase>(TYPES.AuthenticateUserUseCase)
  .to(AuthenticateUserUseCase);
container.bind<AuthController>(TYPES.AuthController).to(AuthController);
// ===End Users===

export { container };
