import { UserService } from '../src/services/UserService';
import { User } from '../src/models/User';

describe('UserService', () => {
  let testUser;

  beforeAll(async () => {
    testUser = await User.create({
      firstname: 'Service',
      surname: 'User',
      email: 'serviceuser@mail.com',
      password: 'password'
    });
  });

  afterAll(async () => {
    await User.destroy({ where: { email: 'serviceuser@mail.com' } });
  });

  afterEach(async () => {
    await User.destroy({ where: { email: 'newuser@mail.com' } });
  });

  test('should create a user', async () => {
    const data = { firstname: 'New', surname: 'User', email: 'newuser@mail.com', password: 'password' };
    const result = await UserService.createUser(data);

    expect(result.firstname).toBe(data.firstname);
    expect(result.email).toBe(data.email);
  });

  test('should get user by ID', async () => {
    const result = await UserService.getUserById(testUser.id);

    expect(result).toBeDefined();
    expect(result.email).toBe('serviceuser@mail.com');
  });

  test('should update a user', async () => {
    const data = { firstname: 'Updated', surname: 'User' };
    const result = await UserService.updateUser(testUser.id, data);

    expect(result.firstname).toBe(data.firstname);
    expect(result.surname).toBe(data.surname);
  });

  test('should delete a user', async () => {
    const userToDelete = await User.create({
      firstname: 'Delete',
      surname: 'User',
      email: 'deleteuser@mail.com',
      password: 'password'
    });

    const result = await UserService.deleteUser(userToDelete.id);

    expect(result).toBe(true);

    const deletedUser = await User.findByPk(userToDelete.id);
    expect(deletedUser).toBeNull();
  });

  test('should return false if user not found for delete', async () => {
    const result = await UserService.deleteUser(9999);

    expect(result).toBe(false);
  });
});
