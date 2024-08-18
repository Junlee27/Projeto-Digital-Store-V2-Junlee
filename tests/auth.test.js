import request from 'supertest';
import app from '../src/server';
import { User } from '../src/models/User';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

describe('Auth Routes', () => {
  let testUser;

  beforeAll(async () => {
    testUser = await User.create({
      firstname: 'Auth',
      surname: 'User',
      email: 'authuser@mail.com',
      password: 'password'
    });
  });

  afterAll(async () => {
    await User.destroy({ where: { email: 'authuser@mail.com' } });
  });

  test('should authenticate and return a token', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'authuser@mail.com',
        password: 'password',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');

    const decoded = jwt.verify(res.body.token, jwtConfig.secret);
    expect(decoded.email).toBe('authuser@mail.com');
  });

  test('should not authenticate with wrong credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'authuser@mail.com',
        password: 'wrongpassword',
      });

    expect(res.statusCode).toBe(401);
  });

  test('should return user details with a valid token', async () => {
    const token = jwt.sign({ id: testUser.id, email: testUser.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

    const res = await request(app)
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe('authuser@mail.com');
  });
});
