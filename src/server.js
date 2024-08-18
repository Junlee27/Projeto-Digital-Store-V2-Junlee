import app from './app.js';
import sequelize from '../config/database.js';

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });
