import express from 'express';
import dotenv from 'dotenv';
import sequelize from '../config/database.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/v1/auth', authRoutes);
app.use('/v1/user', userRoutes);
app.use('/v1/product', productRoutes);
app.use('/v1/category', categoryRoutes);

sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

export default app;
