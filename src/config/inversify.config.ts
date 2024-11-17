import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductRepository } from '../modules/products/domain/repositories/ProductRepository';
import { ProductAPIRepository } from '../modules/products/infrastructure/service/ProductAPIRepository';
import { GetPaginatedProductsUseCase } from '../modules/products/application/use_cases/GetPaginatedProductsUseCase';
import { ProductController } from '../modules/products/api/controllers/ProductController';


const container = new Container();
// ===Start Products===
// Vincular el repositorio con su implementación
container
    .bind<ProductRepository>(TYPES.ProductRepository)
    .to(ProductAPIRepository);

// Vincular caso de uso
container
    .bind<GetPaginatedProductsUseCase>(TYPES.GetPaginatedProductsUseCase)
    .to(GetPaginatedProductsUseCase);

// Vincular controlador
container
    .bind<ProductController>(TYPES.ProductController)
    .to(ProductController);

// ===End Products===

export { container };
