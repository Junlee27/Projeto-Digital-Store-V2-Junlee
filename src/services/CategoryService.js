import { Category } from '@models/index.js';

class CategoryService {
  async createCategory(data) {
    const category = await Category.create(data);
    return category;
  }

  async getCategoryById(id) {
    return await Category.findByPk(id, {
      attributes: ['id', 'name', 'slug', 'use_in_menu'],
    });
  }

  async updateCategory(id, data) {
    const category = await Category.findByPk(id);
    if (category) {
      await category.update(data);
      return category;
    }
    return null;
  }

  async deleteCategory(id) {
    const category = await Category.findByPk(id);
    if (category) {
      await category.destroy();
      return true;
    }
    return false;
  }
}

export default new CategoryService();
