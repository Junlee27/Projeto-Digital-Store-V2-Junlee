# READ ME - Projeto de Junlee Araújo Rozendo

## Estrutura
projeto-digital-store/
|-- node_modules/
|-- public/
|-- src/
|   |-- assets/
|   |   |-- favicon/
|   |   |-- img/
|   |-- styles/
|   |   |-- Components/
|   |   |   |-- Buybox/
|   |   |   |-- CardDestaque/
|   |   |   |-- Cards/
|   |   |   |-- Carousel/
|   |   |   |-- CarouselMenor/
|   |   |   |-- CartItem/
|   |   |   |-- CartSummary/
|   |   |   |-- Destaque/
|   |   |   |-- Footer/
|   |   |   |-- Gallery/
|   |   |   |-- Header/
|   |   |   |-- HeaderMenor/
|   |   |   |-- IconDestaque/
|   |   |   |-- Main/
|   |   |   |-- ProductCard/
|   |   |   |-- ProductOptions/
|   |   |-- pages/
|   |   |   |-- CartPage/
|   |   |   |-- Error404/
|   |   |   |-- HomePage/
|   |   |   |-- ProductListingPage/
|   |   |   |-- ProductViewPage/
|   |-- ui/
|   |   |-- Components/
|   |   |   |-- Buybox/
|   |   |   |-- CardDestaque/
|   |   |   |-- Cards/
|   |   |   |-- Carousel/
|   |   |   |-- CarouselMenor/
|   |   |   |-- CartItem/
|   |   |   |-- CartSummary/
|   |   |   |-- Destaque/
|   |   |   |-- Footer/
|   |   |   |-- Gallery/
|   |   |   |-- Header/
|   |   |   |-- HeaderMenor/
|   |   |   |-- IconDestaque/
|   |   |   |-- Layout/
|   |   |   |-- Main/
|   |   |   |-- ProductCard/
|   |   |   |-- ProductOptions/
|   |   |-- pages/  
|   |   |   |-- CartPage/
|   |   |   |-- ConfirmarCompraPage/
|   |   |   |-- CriarContaPage/
|   |   |   |-- CriarFormularioPage/
|   |   |   |-- Error404/
|   |   |   |-- HomePage/
|   |   |   |-- InformacoesPage/
|   |   |   |-- LoginPage/
|   |   |   |-- PedidosPage/
|   |   |   |-- ProductListingPage/
|   |   |   |-- ProductViewPage/
|   |   |   |-- SucessoPage/
|   |-- App.css
|   |-- App.jsx
|   |-- firebaseConfig.js
|   |-- main.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- vite.config.js

## Componentes

**Buybox** Exibe informações detalhadas de um produto, incluindo nome, referência, avaliação, preço, descrição e opções.
**CardDestaque** Exibe cartões de destaque na página principal.
**Cards** Exibe cartões genéricos de produtos.
**Carousel** Exibe um carrossel de imagens para destaque de produtos.
**CarouselMenor** Exibe um carrossel menor para destaque adicional.
**CartItem** Exibe itens individuais no carrinho de compras.
**CartSummary** Resumo do carrinho de compras.
**Destaque** Exibe seções de destaque no site.
**Footer** Componente de rodapé com informações de contato e links úteis.
**Gallery** Exibe uma galeria de imagens de produtos.
**Header** Componente de cabeçalho com navegação principal.
**HeaderMenor** Variante menor do componente de cabeçalho.
**IconDestaque** Exibe ícones de destaque.
**Layout** Componente principal que envolve o conteúdo da página.
**Main** Componente principal do layout da página.
**ProductCard** Exibe cartões de produtos.
**ProductOptions** Exibe opções de produtos como tamanhos e cores.

## Páginas

**CartPage** Página do carrinho de compras.
**ConfirmarCompraPage** Página de confirmação de compra.
**CriarContaPage** Página para criação de nova conta de usuário.
**CriarFormularioPage** Página para criação de formulários personalizados.
**Error404** Página de erro para rotas não encontradas.
**HomePage** Página inicial com produtos e ofertas principais.
**InformacoesPage** Página de informações gerais.
**LoginPage** Página de login para usuários.
**PedidosPage** Página com histórico de pedidos do usuário.
**ProductListingPage** Página de listagem de produtos.
**ProductViewPage** Página de visualização detalhada de um produto.
**SucessoPage** Página pós-compra bem-sucedida.

## Bibliotecas Utilizadas

**React** Biblioteca JavaScript para construção de interfaces de usuário.
**axios** Biblioteca para realizar requisições HTTP.
**Bootstrap** Framework CSS para design responsivo e componentes pré-estilizados.
**Firebase** Plataforma de desenvolvimento de aplicativos.
**React Router** Biblioteca para gerenciamento de rotas no React.
**Vite** Ferramenta de construção e desenvolvimento rápido para projetos front-end.

## Como Utilizar

### Iniciando o Projeto

1. **Instale as dependências**
    npm install

2. **Execute o ESLint para verificar o código**
    npm run lint

3. **Inicie o servidor de desenvolvimento**
    npm run dev

4. **Construa o projeto para produção**
    npm run build

5. **Para pré-visualizar o projeto depois da construção**
    npm run preview



6. **Se você encontrar problemas com dependências**
    Caso isso aconteça: Reinstale-as conforme o "package.json":
    rm -rf node_modules
    rm -rf package-lock.json
	npm install
	npm run lint
	npm run dev
	npm run build
	npm run preview

7. **Erros com versões específicas de dependências**
    Caso tenha problemas com versões específicas, você pode instalar as dependências manualmente. Aqui estão os comandos para instalar todas as versões necessárias de uma vez:
    rm -rf node_modules
    rm -rf package-lock.json

    npm install @types/react-dom@18.3.0 @types/react@18.3.3 @vitejs/plugin-react@4.3.1 axios@1.7.2 bootstrap@5.3.3 eslint-plugin-react-hooks@4.6.2 eslint-plugin-react-refresh@0.4.7 eslint-plugin-react@7.34.2 eslint@8.57.0 firebase@10.12.5 react-dom@18.3.1 react-router-dom@6.25.1 react@18.3.1 vite@5.3.1

	npm run lint
	npm run dev
	npm run build
	npm run preview

8. **Instalação Individual de Dependências**
    Se precisar instalar ou atualizar apenas uma dependência específica, use um dos comandos abaixo:
    npm install @types/react-dom@18.3.0
    npm install @types/react@18.3.3
    npm install @vitejs/plugin-react@4.3.1
    npm install axios@1.7.2
    npm install bootstrap@5.3.3
    npm install eslint-plugin-react-hooks@4.6.2
    npm install eslint-plugin-react-refresh@0.4.7
    npm install eslint-plugin-react@7.34.2
    npm install eslint@8.57.0
    npm install firebase@10.12.5
    npm install react-dom@18.3.1
    npm install react-router-dom@6.25.1
    npm install react@18.3.1
    npm install vite@5.3.1
	
	npm run lint
	npm run dev
	npm run build
	npm run preview

### Utilização de Componentes

Os componentes estão localizados na pasta src/ui/Components e src/styles/Components. Você pode importá-los e usá-los nas suas páginas conforme necessário!

```jsx
import React from 'react';
import Header from '@components/Header/Header.jsx'
import Footer from '@components/Footer/Footer.jsx'


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
```

### Utilização de Páginas

As páginas estão localizadas na pasta src/ui/pages. Utilize React Router para configurar as rotas do seu aplicativo.

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import ProductListingPage from '@pages/ProductListingPage/ProductListingPage';
import ProductViewPage from '@pages/ProductViewPage/ProductViewPage';
import Error404 from '@pages/Error404/Error404';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products" component={ProductListingPage} />
      <Route path="/product/:id" component={ProductViewPage} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;
```

### Utilização de axios
Utilize axios para fazer requisições HTTP em seus componentes.

```jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.exemplo.com/produtos');
      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
```

### Utilização de Bootstrap

Adicione estilos e componentes do Bootstrap ao seu projeto.

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => (
  <div id="carouselExample" className="carousel slide" data-ride="carousel">
    {/* Carrossel conteúdo */}
  </div>
);

export default Carousel;
```

## Conclusão

Este guia fornece uma visão geral da estrutura do projeto, descreve os componentes e páginas, e explica como utilizar bibliotecas como `axios`, Bootstrap e React Router.

## Obervação:
Desculpem se acabou ficando desorgarnizado e mandei já no final do prazo, acabei perdendo todo o projeto duas vezes e recomecei novamente, mas acontece. A todos que lerem isso, tenha(m) um ótimo dia.