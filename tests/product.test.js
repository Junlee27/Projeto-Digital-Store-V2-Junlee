import request from 'supertest';
import app from '../src/server';
import { Product } from '../src/models/Product';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

describe('Product Routes', () => {
  let token;
  let testProduct;

  beforeAll(async () => {
    const adminUser = await User.create({
      firstname: 'Admin',
      surname: 'User',
      email: 'admin@mail.com',
      password: 'password'
    });

    token = jwt.sign({ id: adminUser.id, email: adminUser.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

    testProduct = await Product.create({
      name: 'Test Product',
      price: 19.99,
      description: 'This is a test product'
    });
  });

  afterAll(async () => {
    await Product.destroy({ where: { name: 'Test Product' } });
  });

  test('should create a product successfully', async () => {
    const data = { name: 'New Product', price: 29.99, description: 'A new test product' };
    const res = await request(app)
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send(data);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name);
  });

  test('should get a product by ID', async () => {
    const res = await request(app)
      .get(`/products/${testProduct.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Test Product');
  });

  test('should update a product successfully', async () => {
    const updatedData = { name: 'Updated Product', price: 39.99 };
    const res = await request(app)
      .put(`/products/${testProduct.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(updatedData.name);
  });

  test('should delete a product successfully', async () => {
    const res = await request(app)
      .delete(`/products/${testProduct.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);

    const deletedProduct = await Product.findByPk(testProduct.id);
    expect(deletedProduct).toBeNull();
  });
});
