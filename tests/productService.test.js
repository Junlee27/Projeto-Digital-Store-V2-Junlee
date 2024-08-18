const ProductService = require('../src/services/ProductService');
const { Product } = require('../src/models');

jest.mock('../src/models', () => ({
  Product: {
    create: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe('ProductService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a product', async () => {
    const data = { name: 'Product 1', slug: 'product-1', price: 99.99, price_with_discount: 79.99 };
    Product.create.mockResolvedValue(data);

    const result = await ProductService.createProduct(data);

    expect(Product.create).toHaveBeenCalledWith(data);
    expect(result).toEqual(data);
  });

  it('should get product by ID', async () => {
    const product = {
      id: 1,
      name: 'Product 1',
      slug: 'product-1',
      price: 99.99,
      price_with_discount: 79.99,
    };
    Product.findByPk.mockResolvedValue(product);

    const result = await ProductService.getProductById(1);

    expect(Product.findByPk).toHaveBeenCalledWith(1, {
      include: ['categories', 'images', 'options'],
      attributes: [
        'id',
        'name',
        'slug',
        'price',
        'price_with_discount',
        'stock',
        'description',
      ],
    });
    expect(result).toEqual(product);
  });

  it('should update a product', async () => {
    const product = { update: jest.fn(), id: 1 };
    Product.findByPk.mockResolvedValue(product);

    const data = { name: 'Updated Product', price: 49.99 };
    const result = await ProductService.updateProduct(1, data);

    expect(Product.findByPk).toHaveBeenCalledWith(1);
    expect(product.update).toHaveBeenCalledWith(data);
    expect(result).toEqual(product);
  });

  it('should delete a product', async () => {
    const product = { destroy: jest.fn(), id: 1 };
    Product.findByPk.mockResolvedValue(product);

    const result = await ProductService.deleteProduct(1);

    expect(Product.findByPk).toHaveBeenCalledWith(1);
    expect(product.destroy).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('should return false if product not found for delete', async () => {
    Product.findByPk.mockResolvedValue(null);

    const result = await ProductService.deleteProduct(1);

    expect(Product.findByPk).toHaveBeenCalledWith(1);
    expect(result).toBe(false);
  });
});
