import { Router } from 'express';

import { ProductController } from '../controllers/ProductController';
import { container } from '../../../../config/inversify.config';
import { TYPES } from '../../../../config/types';

const productRoutes = Router();
const productController = container.get<ProductController>(
    TYPES.ProductController,
);

productRoutes.get('/', productController.getPaginatedProducts);

export default productRoutes;
