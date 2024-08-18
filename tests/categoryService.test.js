const CategoryService = require('../src/services/CategoryService');
const { Category } = require('../src/models');

jest.mock('../src/models', () => ({
  Category: {
    create: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe('CategoryService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a category', async () => {
    const data = { name: 'Category 1', slug: 'category-1', use_in_menu: true };
    Category.create.mockResolvedValue(data);

    const result = await CategoryService.createCategory(data);

    expect(Category.create).toHaveBeenCalledWith(data);
    expect(result).toEqual(data);
  });

  it('should get category by ID', async () => {
    const category = { id: 1, name: 'Category 1', slug: 'category-1', use_in_menu: true };
    Category.findByPk.mockResolvedValue(category);

    const result = await CategoryService.getCategoryById(1);

    expect(Category.findByPk).toHaveBeenCalledWith(1, {
      attributes: ['id', 'name', 'slug', 'use_in_menu'],
    });
    expect(result).toEqual(category);
  });

  it('should update a category', async () => {
    const category = { update: jest.fn(), id: 1 };
    Category.findByPk.mockResolvedValue(category);

    const data = { name: 'Updated Category', slug: 'updated-category' };
    const result = await CategoryService.updateCategory(1, data);

    expect(Category.findByPk).toHaveBeenCalledWith(1);
    expect(category.update).toHaveBeenCalledWith(data);
    expect(result).toEqual(category);
  });

  it('should delete a category', async () => {
    const category = { destroy: jest.fn(), id: 1 };
    Category.findByPk.mockResolvedValue(category);

    const result = await CategoryService.deleteCategory(1);

    expect(Category.findByPk).toHaveBeenCalledWith(1);
    expect(category.destroy).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('should return false if category not found for delete', async () => {
    Category.findByPk.mockResolvedValue(null);

    const result = await CategoryService.deleteCategory(1);

    expect(Category.findByPk).toHaveBeenCalledWith(1);
    expect(result).toBe(false);
  });
});
