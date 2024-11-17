export interface ProductRepository {
    fetchAllProducts(): Promise<any[]>;
}
