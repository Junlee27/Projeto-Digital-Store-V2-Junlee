const request = require('supertest');
const app = require('../src/app');
const { User } = require('../src/models');

describe('Auth Routes', () => {
  beforeAll(async () => {
    await User.destroy({ where: {} });
  });

  it('should register a user successfully', async () => {
    const res = await request(app)
      .post('/v1/auth/register')
      .send({
        firstname: 'Test',
        surname: 'User',
        email: 'testuser@mail.com',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('firstname', 'Test');
  });

  it('should login a user successfully', async () => {
    const res = await request(app)
      .post('/v1/auth/login')
      .send({
        email: 'testuser@mail.com',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
