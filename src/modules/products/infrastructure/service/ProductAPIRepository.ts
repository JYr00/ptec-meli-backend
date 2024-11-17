import { ProductRepository } from '../../domain/repositories/ProductRepository';
import axios from 'axios';

export class ProductAPIRepository implements ProductRepository {
    private static readonly BASE_URL = 'https://fakestoreapi.com/products';

    async fetchAllProducts(): Promise<any[]> {
        try {
            const response = await axios.get(ProductAPIRepository.BASE_URL);
            return response.data as any[];
        } catch (error) {
            console.error(
                'Error al obtener los productos de la API externa:',
                error,
            );
            throw new Error('No se pudieron obtener los productos.');
        }
    }
}
