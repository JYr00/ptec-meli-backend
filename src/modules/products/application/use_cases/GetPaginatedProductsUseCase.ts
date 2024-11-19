import { inject, injectable } from 'inversify';
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { TYPES } from '../../../../config/types';


@injectable()
export class GetPaginatedProductsUseCase {
    private readonly productRepository: ProductRepository;

    constructor(
        @inject(TYPES.ProductRepository) productRepository: ProductRepository,
    ) {
        this.productRepository = productRepository;
    }

    public async execute(
        page: number = 1,
        limit: number = 10,
    ): Promise<{ products: any[]; total: number; totalPages: number }> {
        const allProducts = await this.productRepository.fetchAllProducts();

        // Calcular paginación
        const total = allProducts.length;
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const products = allProducts.slice(startIndex, endIndex);

        return { products, total, totalPages };
    }
}
