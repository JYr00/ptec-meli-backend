import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { GetPaginatedProductsUseCase } from '../../application/use_cases/GetPaginatedProductsUseCase';
import { TYPES } from '../../../../config/types';


@injectable()
export class ProductController {
    constructor(
        @inject(TYPES.GetPaginatedProductsUseCase)
        private readonly getPaginatedProductsUseCase: GetPaginatedProductsUseCase,
    ) {}

    public getPaginatedProducts = async (req: Request, res: Response) => {
        try {
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;

            const { products, total, totalPages } =
                await this.getPaginatedProductsUseCase.execute(page, limit);

            res.json({
                data: products,
                meta: {
                    totalItems: total,
                    currentPage: page,
                    totalPages: totalPages,
                    itemsPerPage: limit,
                },
            });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };
}
