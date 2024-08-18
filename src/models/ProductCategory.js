import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const ProductCategory = sequelize.define('ProductCategory', {
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Product',
      key: 'id',
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category',
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

export default ProductCategory;