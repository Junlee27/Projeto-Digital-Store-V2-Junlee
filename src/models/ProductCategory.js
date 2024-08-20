import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const ProductCategory = sequelize.define('ProductCategory', {
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Products',
      key: 'id',
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Categories',
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'ProductCategories',
  timestamps: true,
});

export default ProductCategory;
