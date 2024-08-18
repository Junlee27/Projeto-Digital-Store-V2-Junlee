import { User } from '../models/index.js';

export default {
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