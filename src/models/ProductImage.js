import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import Product from './Product.js';

const ProductImage = sequelize.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  path: {
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

Product.hasMany(ProductImage, { foreignKey: 'product_id' });

export default ProductImage;