import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import jwtConfig from '../../config/jwt.js';

class AuthService {
  async register(data) {
    const { firstname, surname, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ firstname, surname, email, password: hashedPassword });
    return user;
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return { token };
  }
}

export default new AuthService();