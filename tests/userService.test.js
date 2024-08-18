const UserService = require('../src/services/UserService');
const { User } = require('../src/models');

jest.mock('../src/models', () => ({
  User: {
    create: jest.fn(),
    findByPk: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn(),
  },
}));

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a user', async () => {
    const data = { firstname: 'Test', surname: 'User', email: 'test@mail.com', password: 'password123' };
    User.create.mockResolvedValue(data);

    const result = await UserService.createUser(data);

    expect(User.create).toHaveBeenCalledWith(data);
    expect(result).toEqual(data);
  });

  it('should get user by ID', async () => {
    const user = { id: 1, firstname: 'Test', surname: 'User', email: 'test@mail.com' };
    User.findByPk.mockResolvedValue(user);

    const result = await UserService.getUserById(1);

    expect(User.findByPk).toHaveBeenCalledWith(1, {
      attributes: ['id', 'firstname', 'surname', 'email'],
    });
    expect(result).toEqual(user);
  });

  it('should update a user', async () => {
    const user = { update: jest.fn(), id: 1 };
    User.findByPk.mockResolvedValue(user);

    const data = { firstname: 'Updated', surname: 'User' };
    const result = await UserService.updateUser(1, data);

    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(user.update).toHaveBeenCalledWith(data);
    expect(result).toEqual(user);
  });

  it('should delete a user', async () => {
    const user = { destroy: jest.fn(), id: 1 };
    User.findByPk.mockResolvedValue(user);

    const result = await UserService.deleteUser(1);

    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(user.destroy).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('should return false if user not found for delete', async () => {
    User.findByPk.mockResolvedValue(null);

    const result = await UserService.deleteUser(1);

    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(result).toBe(false);
  });
});
