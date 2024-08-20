# Projeto Digital Store V2
Bem-vindo ao Digital Store V2 do Junlee! Este projeto é uma aplicação de e-commerce desenvolvida com Node.js, React e várias outras tecnologias. Este README fornecerá uma visão geral do projeto, como configurá-lo e como contribuir.

## Sumário
- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Executando o Projeto](#executando-o-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral
O Digital Store V2 é uma aplicação web de e-commerce que permite aos usuários navegar por produtos, adicionar itens ao carrinho e realizar compras. A aplicação é construída com uma arquitetura moderna, utilizando Node.js para o backend e React para o frontend.

## Tecnologias Utilizadas
- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/) para o build e desenvolvimento rápido
  - [CSS](https://www.w3.org/Style/CSS/) para estilização
  - [React Context API](https://reactjs.org/docs/context.html) para gerenciamento de estado

- **Backend:**
  - [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/) para a criação de APIs
  - [Sequelize](https://sequelize.org/) para ORM (mapeamento objeto-relacional)
  - [JWT](https://jwt.io/) para autenticação e autorização
  - [Bcrypt](https://www.npmjs.com/package/bcrypt) para hash de senhas

- **Banco de Dados:**
  - [PostgreSQL](https://www.postgresql.org/)

- **Outras Ferramentas:**
  - [dotenv](https://www.npmjs.com/package/dotenv) para gerenciamento de variáveis de ambiente
  - [ESLint](https://eslint.org/) para linting de código

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte maneira:
```
projeto-digital-store-v2/
├── config/ # Configurações do projeto (database, JWT, etc.)
├── dist/ # Arquivos de build
├── node_modules/ # Dependências do projeto
├── public/ # Arquivos estáticos públicos
├── src/ # Código fonte
│ ├── assets/ # Imagens e outros arquivos estáticos
│ ├── context/ # Contextos React
│ ├── controllers/ # Controladores para a API
│ ├── middleware/ # Middleware Express
│ ├── models/ # Modelos Sequelize
│ ├── routes/ # Rotas da API
│ ├── services/ # Serviços para lógica de negócios
│ ├── styles/ # Arquivos CSS
│ ├── ui/ # Componentes da interface do usuário
│ ├── App.jsx # Componente principal do React
│ ├── app.js # Configuração do Express
│ ├── firebaseConfig.js # Configuração do Firebase
│ ├── main.jsx # Entrada do React
│ └── server.js # Entrada do servidor Express
├── tests/ # Testes do projeto
├── .babelrc # Configuração do Babel
├── .env # Variáveis de ambiente
├── .gitignore # Arquivos e pastas a serem ignorados pelo Git
├── README.md # Este arquivo
└── package.json # Gerenciador de pacotes
```
## Configuração do Ambiente
1. **Clone o repositório:**

   git clone https://github.com/Junlee27/Projeto-Digital-Store-V2-Junlee
   cd projeto-digital-store-v2

2. **Instale as dependências:**
    npm install

3. **Configure as variáveis de ambiente:**
Renomeie o arquivo .env.example para .env e adicione suas variáveis de ambiente. Exemplos de variáveis podem incluir:
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
JWT_SECRET=seusegredocabuloso

4. **Configure o banco de dados:**
Certifique-se de que o PostgreSQL está em execução e configure o banco de dados conforme necessário. As instruções para criar o banco de dados e as tabelas podem estar nos arquivos de migração.

5. **Executando o Projeto**
Execute o servidor backend:
npm run start:server
Isso iniciará o servidor Express no backend.

6. **Execute o frontend:**
npm run dev
Isso iniciará o servidor de desenvolvimento do Vite para o frontend.

Se você deseja contribuir para o projeto:
- Faça um fork do repositório.
- Crie uma nova branch para suas alterações:
    git checkout -b minha-branch
- Faça suas alterações e commit:
    git add .
    git commit -m "Descrição das alterações"
- Envie suas alterações para o GitHub:
    git push origin minha-branch
- Abra um Pull Request.

Licença
Este projeto está licenciado sob a Licença MIT.   
Se você tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para abrir uma issue no GitHub.

