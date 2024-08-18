import { CategoryService } from '../src/services/CategoryService';
import { Category } from '../src/models/Category';

describe('CategoryService', () => {
  let testCategory;

  beforeAll(async () => {
    testCategory = await Category.create({
      name: 'Test Category',
      slug: 'test-category',
      use_in_menu: true
    });
  });

  afterAll(async () => {
    await Category.destroy({ where: { name: 'Test Category' } });
  });

  afterEach(async () => {
    await Category.destroy({ where: { name: 'New Category' } });
  });

  test('should create a category', async () => {
    const data = { name: 'New Category', slug: 'new-category', use_in_menu: false };
    const result = await CategoryService.createCategory(data);

    expect(result.name).toBe(data.name);
    expect(result.slug).toBe(data.slug);
  });

  test('should get category by ID', async () => {
    const result = await CategoryService.getCategoryById(testCategory.id);

    expect(result).toBeDefined();
    expect(result.name).toBe('Test Category');
  });

  test('should update a category', async () => {
    const data = { name: 'Updated Category', slug: 'updated-category' };
    const result = await CategoryService.updateCategory(testCategory.id, data);

    expect(result.name).toBe(data.name);
    expect(result.slug).toBe(data.slug);
  });

  test('should delete a category', async () => {
    const categoryToDelete = await Category.create({
      name: 'Delete Category',
      slug: 'delete-category',
      use_in_menu: true
    });

    const result = await CategoryService.deleteCategory(categoryToDelete.id);

    expect(result).toBe(true);

    const deletedCategory = await Category.findByPk(categoryToDelete.id);
    expect(deletedCategory).toBeNull();
  });

  test('should return false if category not found for delete', async () => {
    const result = await CategoryService.deleteCategory(9999);

    expect(result).toBe(false);
  });
});
