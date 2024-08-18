import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import jwtConfig from '../../config/jwt.js';

export default {
  async register(req, res) {
    const { firstname, surname, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ firstname, surname, email, password: hashedPassword });
      return res.status(201).json({ id: user.id, firstname, surname, email });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao registrar o usuário' });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const passwordMatches = await bcrypt.compare(password, user.password);
      if (!passwordMatches) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao autenticar o usuário' });
    }
  }
};