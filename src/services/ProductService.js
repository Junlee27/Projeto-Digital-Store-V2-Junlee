import { Product } from '../models/index.js';

class ProductService {
  async createProduct(data) {
    const product = await Product.create(data);
    return product;
  }

  async getProductById(id) {
    return await Product.findByPk(id, {
      include: ['categories', 'images', 'options'],
      attributes: ['id', 'name', 'slug', 'price', 'price_with_discount', 'stock', 'description'],
    });
  }

  async updateProduct(id, data) {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(data);
      return product;
    }
    return null;
  }

  async deleteProduct(id) {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return true;
    }
    return false;
  }
}

export default new ProductService();