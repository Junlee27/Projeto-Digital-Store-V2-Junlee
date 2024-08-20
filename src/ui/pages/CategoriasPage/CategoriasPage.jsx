import { useState, useEffect } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import '@styles/pages/CategoriasPage/CategoriasPage.css';
import roupasImg from '@assets/img/blusa.png';
import eletronicosImg from '@assets/img/fone_de_ouvido.png';
import calcadosImg from '@assets/img/sapato_card.png';
import { Link } from 'react-router-dom';

const CategoriasPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const fetchCategorias = async () => {
      const categoriasMock = [
        { id: 1, nome: 'Roupas', imagem: roupasImg, link: '/ProductList?categoria=roupas' },
        { id: 2, nome: 'Eletrônicos', imagem: eletronicosImg, link: '/ProductList?categoria=eletronicos' },
        { id: 3, nome: 'Calçados', imagem: calcadosImg, link: '/ProductList?categoria=calcados' },
      ];
      setCategorias(categoriasMock);
    };

    fetchCategorias();
  }, []);

  const handleFilterChange = (event) => {
    setFiltro(event.target.value);
  };

  const categoriasFiltradas = categorias.filter(categoria =>
    categoria.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="categorias-page">
        <h1>Categorias</h1>
        <input
          type="text"
          placeholder="Filtrar categorias"
          value={filtro}
          onChange={handleFilterChange}
          className="filtro-categorias"
        />
        <div className="categorias-grid">
          {categoriasFiltradas.map(categoria => (
            <Link to={categoria.link} key={categoria.id}>
              <div className="categoria-card">
                <img src={categoria.imagem} alt={categoria.nome} className="categoria-imagem" />
                <h2>{categoria.nome}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoriasPage;
