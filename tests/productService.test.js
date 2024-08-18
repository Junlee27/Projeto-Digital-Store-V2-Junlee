import { ProductService } from '../src/services/ProductService';
import { Product } from '../src/models/Product';

describe('ProductService', () => {
  let testProduct;

  beforeAll(async () => {
    testProduct = await Product.create({
      name: 'Test Product',
      price: 19.99,
      description: 'This is a test product'
    });
  });

  afterAll(async () => {
    await Product.destroy({ where: { name: 'Test Product' } });
  });

  afterEach(async () => {
    await Product.destroy({ where: { name: 'New Product' } });
  });

  test('should create a product', async () => {
    const data = { name: 'New Product', price: 29.99, description: 'A new test product' };
    const result = await ProductService.createProduct(data);

    expect(result.name).toBe(data.name);
    expect(result.price).toBe(data.price);
  });

  test('should get product by ID', async () => {
    const result = await ProductService.getProductById(testProduct.id);

    expect(result).toBeDefined();
    expect(result.name).toBe('Test Product');
  });

  test('should update a product', async () => {
    const data = { name: 'Updated Product', price: 39.99 };
    const result = await ProductService.updateProduct(testProduct.id, data);

    expect(result.name).toBe(data.name);
    expect(result.price).toBe(data.price);
  });

  test('should delete a product', async () => {
    const productToDelete = await Product.create({
      name: 'Delete Product',
      price: 9.99,
      description: 'A product to delete'
    });

    const result = await ProductService.deleteProduct(productToDelete.id);

    expect(result).toBe(true);

    const deletedProduct = await Product.findByPk(productToDelete.id);
    expect(deletedProduct).toBeNull();
  });

  test('should return false if product not found for delete', async () => {
    const result = await ProductService.deleteProduct(9999);

    expect(result).toBe(false);
  });
});
