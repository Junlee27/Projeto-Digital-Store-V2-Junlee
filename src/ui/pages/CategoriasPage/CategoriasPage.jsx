import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@components/Layout/Layout';

const categories = ['Camisetas', 'Tênis', 'Acessórios'];

function CategoriasPage() {
  return (
    <Layout>
      <h1>Categorias</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/ProductList?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default CategoriasPage;
