import { Category } from '../models/index.js';

export default {
  async getAll(req, res) {
    const { limit = 12, page = 1 } = req.query;
    try {
      const categories = await Category.findAndCountAll({
        limit: parseInt(limit, 10),
        offset: (parseInt(page, 10) - 1) * limit,
      });
      return res.status(200).json({
        data: categories.rows,
        total: categories.count,
        limit: parseInt(limit, 10),
        page: parseInt(page, 10),
      });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar as categorias' });
    }
  },

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

  async create(req, res) {
    const { name, slug, use_in_menu } = req.body;
    try {
      const category = await Category.create({ name, slug, use_in_menu });
      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar a categoria' });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, slug, use_in_menu } = req.body;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      await category.update({ name, slug, use_in_menu });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar a categoria' });
    }
  },

  async delete(req, res) {
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