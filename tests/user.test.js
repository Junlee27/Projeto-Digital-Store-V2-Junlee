import request from 'supertest';
import app from '../src/server';
import { User } from '../src/models/User';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

describe('User Routes', () => {
  let token;
  let testUser;

  beforeAll(async () => {
    const adminUser = await User.create({
      firstname: 'Admin',
      surname: 'User',
      email: 'admin@mail.com',
      password: 'password'
    });

    token = jwt.sign({ id: adminUser.id, email: adminUser.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

    testUser = await User.create({
      firstname: 'Test',
      surname: 'User',
      email: 'testuser@mail.com',
      password: 'password'
    });
  });

  afterAll(async () => {
    await User.destroy({ where: { email: ['admin@mail.com', 'testuser@mail.com'] } });
  });

  test('should get a user by ID', async () => {
    const res = await request(app)
      .get(`/users/${testUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(testUser.email);
  });

  test('should update a user successfully', async () => {
    const updatedData = { firstname: 'Updated' };
    const res = await request(app)
      .put(`/users/${testUser.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData);

    expect(res.statusCode).toBe(200);
    expect(res.body.firstname).toBe(updatedData.firstname);
  });

  test('should delete a user successfully', async () => {
    const res = await request(app)
      .delete(`/users/${testUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);

    const deletedUser = await User.findByPk(testUser.id);
    expect(deletedUser).toBeNull();
  });
});
