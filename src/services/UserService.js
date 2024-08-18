import { User } from '../models/index.js';

class UserService {
  async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  async getUserById(id) {
    return await User.findByPk(id, {
      attributes: ['id', 'firstname', 'surname', 'email'],
    });
  }

  async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user;
    }
    return null;
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  }
}

export default new UserService();