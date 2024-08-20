import { Product, Category } from '../models/index.js';
import { Op } from 'sequelize';

export default {
  async getAll(req, res) {
    const { limit = 12, page = 1, match, category_ids, price_range } = req.query;
    try {
      const products = await Product.findAndCountAll({
        limit: parseInt(limit, 10),
        offset: (parseInt(page, 10) - 1) * limit,
        where: {
          ...(match && { name: { [Op.like]: `%${match}%` } }),
          ...(category_ids && { category_ids: category_ids.split(',') }),
          ...(price_range && {
            price: {
              [Op.between]: price_range.split('-').map(Number),
            },
          }),
        },
      });
      return res.status(200).json({
        data: products.rows,
        total: products.count,
        limit: parseInt(limit, 10),
        page: parseInt(page, 10),
      });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar os produtos' });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id, {
        include: [Category],
      });
      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar o produto' });
    }
  },

  async createProduct(req, res) {
    const { enabled, name, slug, stock, description, price, price_with_discount, category_ids } = req.body;
    try {
      const product = await Product.create({
        enabled,
        name,
        slug,
        stock,
        description,
        price,
        price_with_discount,
        category_ids,
      });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar o produto' });
    }
  },

  async updateProduct(req, res) {
    const { id } = req.params;
    const { enabled, name, slug, stock, description, price, price_with_discount, category_ids } = req.body;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await product.update({
        enabled,
        name,
        slug,
        stock,
        description,
        price,
        price_with_discount,
        category_ids,
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar o produto' });
    }
  },

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await product.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar o produto' });
    }
  }
};
