import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '@models/index.js';
import jwtConfig from '@config/jwt.js';

class AuthService {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    return { user, token };
  }

  async register(userData) {
    const hash = bcrypt.hashSync(userData.password, 8);
    const user = await User.create({ ...userData, password: hash });
    return user;
  }

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, jwtConfig.secret);
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

export default new AuthService();