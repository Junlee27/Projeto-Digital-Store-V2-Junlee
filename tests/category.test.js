import request from 'supertest';
import app from '../src/server';
import { Category } from '../src/models/Category';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

describe('Category Routes', () => {
  let token;
  let testCategory;

  beforeAll(async () => {
    const adminUser = await User.create({
      firstname: 'Admin',
      surname: 'User',
      email: 'admin@mail.com',
      password: 'password'
    });

    token = jwt.sign({ id: adminUser.id, email: adminUser.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

    testCategory = await Category.create({
      name: 'Test Category',
      slug: 'test-category',
      use_in_menu: true
    });
  });

  afterAll(async () => {
    await Category.destroy({ where: { name: 'Test Category' } });
  });

  test('should create a category successfully', async () => {
    const data = { name: 'New Category', slug: 'new-category', use_in_menu: false };
    const res = await request(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send(data);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name);
  });

  test('should get a category by ID', async () => {
    const res = await request(app)
      .get(`/categories/${testCategory.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Test Category');
  });

  test('should update a category successfully', async () => {
    const updatedData = { name: 'Updated Category', slug: 'updated-category' };
    const res = await request(app)
      .put(`/categories/${testCategory.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(updatedData.name);
  });

  test('should delete a category successfully', async () => {
    const res = await request(app)
      .delete(`/categories/${testCategory.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);

    const deletedCategory = await Category.findByPk(testCategory.id);
    expect(deletedCategory).toBeNull();
  });
});
