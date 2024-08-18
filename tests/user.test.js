const request = require('supertest');
const app = require('../src/app');
const { User } = require('../src/models');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

describe('User Routes', () => {
  let token;
  let userId;

  beforeAll(async () => {
    const user = await User.create({
      firstname: 'Test',
      surname: 'User',
      email: 'user@mail.com',
      password: 'password123',
    });

    userId = user.id;
    token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
  });

  it('should get a user by ID', async () => {
    const res = await request(app)
      .get(`/v1/user/${userId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', userId);
  });

  it('should update a user successfully', async () => {
    const res = await request(app)
      .put(`/v1/user/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        firstname: 'Updated',
        surname: 'User',
        email: 'updateduser@mail.com',
      });

    expect(res.statusCode).toEqual(204);
  });
});
