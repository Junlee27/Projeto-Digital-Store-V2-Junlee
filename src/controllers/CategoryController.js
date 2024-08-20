import { Category } from '../models/index.js';

export default {
  async getById(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar a categoria' });
    }
  },

  async createCategory(req, res) {
    const { name, description } = req.body;
    try {
      const category = await Category.create({ name, description });
      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a categoria' });
    }
  },

  async updateCategory(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      await category.update({ name, description });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a categoria' });
    }
  },

  async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      await category.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar a categoria' });
    }
  }
};
