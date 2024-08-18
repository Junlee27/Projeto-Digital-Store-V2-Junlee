const request = require('supertest');
const app = require('../src/app');
const { Product } = require('../src/models');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

describe('Product Routes', () => {
  let token;
  let productId;

  beforeAll(() => {
    token = jwt.sign({ id: 1, email: 'admin@mail.com' }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
  });

  it('should create a product successfully', async () => {
    const res = await request(app)
      .post('/v1/product')
      .set('Authorization', `Bearer ${token}`)
      .send({
        enabled: true,
        name: 'New Product',
        slug: 'new-product',
        stock: 10,
        description: 'Product description',
        price: 99.99,
        price_with_discount: 79.99,
      });

    productId = res.body.id;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get a product by ID', async () => {
    const res = await request(app)
      .get(`/v1/product/${productId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', productId);
  });
});
