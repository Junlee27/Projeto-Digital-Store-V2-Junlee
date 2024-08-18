import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import Product from './Product.js';

const ProductOption = sequelize.define('ProductOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shape: {
    type: DataTypes.ENUM('square', 'circle'),
    defaultValue: 'square',
  },
  radius: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  type: {
    type: DataTypes.ENUM('text', 'color'),
    defaultValue: 'text',
  },
  values: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Product.hasMany(ProductOption, { foreignKey: 'product_id' });

export default ProductOption;