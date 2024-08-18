const request = require('supertest');
const app = require('../src/app');
const { Category } = require('../src/models');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

describe('Category Routes', () => {
  let token;
  let categoryId;

  beforeAll(() => {
    token = jwt.sign({ id: 1, email: 'admin@mail.com' }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
  });

  it('should create a category successfully', async () => {
    const res = await request(app)
      .post('/v1/category')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'New Category',
        slug: 'new-category',
        use_in_menu: true,
      });

    categoryId = res.body.id;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get a category by ID', async () => {
    const res = await request(app)
      .get(`/v1/category/${categoryId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', categoryId);
  });
});
