import User from './User.js';
import Category from './Category.js';
import Product from './Product.js';
import ProductCategory from './ProductCategory.js';
import ProductImage from './ProductImage.js';
import ProductOption from './ProductOption.js';
import sequelize from '../../config/database.js';

Product.belongsToMany(Category, { through: ProductCategory, foreignKey: 'productId' });
Category.belongsToMany(Product, { through: ProductCategory, foreignKey: 'categoryId' });

Product.hasMany(ProductImage, { foreignKey: 'productId', as: 'images' });
ProductImage.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

Product.hasMany(ProductOption, { foreignKey: 'productId', as: 'options' });
ProductOption.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

const models = {
  User,
  Category,
  Product,
  ProductCategory,
  ProductImage,
  ProductOption,
  sequelize,
};

export default models;
