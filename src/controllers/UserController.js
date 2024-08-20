import bcrypt from 'bcryptjs';
import { User } from '../models/index.js';

export default {
  async createUser(req, res) {
    const { firstname, surname, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ firstname, surname, email, password: hashedPassword });
      return res.status(201).json({ id: user.id, firstname, surname, email });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar o usuário' });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id, {
        attributes: ['id', 'firstname', 'surname', 'email'],
      });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar o usuário' });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { firstname, surname, email } = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      await user.update({ firstname, surname, email });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar o usuário' });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      await user.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar o usuário' });
    }
  }
};
