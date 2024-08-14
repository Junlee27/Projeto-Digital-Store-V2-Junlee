import React, { useState, useEffect, useContext } from 'react';
import Layout from "@components/Layout/Layout";
import BuyBox from '@components/Buybox/Buybox';
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import axios from "axios";
import { CartContext } from '@context/CartContext';
import "@styles/pages/ProductViewPage/ProductViewPage.css";
import sapatoAzul from "@assets/img/sapato_card.png";
import Carrousel from "@components/CarouselMenor/CarouselMenor";

function ProductViewPage() {
  const [character, setCharacter] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products");
        setCharacter(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.log(`O erro foi ${error}`);
      }
    };
    fetchData();
  }, []);

  const product = {
    name: 'Tênis Nike Revolution 6',
    reference: '38416711',
    rating: '★★★★☆',
    price: 'R$ 219,90',
    description: 'Tênis de alta qualidade...',
    images: [
      { src: sapatoAzul, alt: 'Tênis Nike', name: 'Tênis Nike Revolution 6', price: 'R$ 219,90' },
      { src: sapatoAzul, alt: 'Tênis Nike', name: 'Tênis Nike Revolution 6', price: 'R$ 219,90' },
    ],
    sizes: ['39', '40', '41', '42'],
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'],
  };

  return (
    <Layout>
      <div className="corpo-product-view">
        <p>Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Nature Masculino</p>
        <div className="product">
          <div className="carousel-cards-tenis">
            <div>
              <Carrousel />
            </div>
            <div className="galery">
              <BuyBox
                productName={product.name}
                reference={product.reference}
                rating={product.rating}
                price={product.price}
                description={product.description}
                images={product.images}
                sizes={product.sizes}
                colors={product.colors}
              />
              <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
      <section className="produtos_relacionados">
        <h5>Produtos relacionados</h5>
        <div className="produto-em-alta-cards">
          {Array.isArray(character) && character.slice(0, 4).map(card => (
            card.desconto === true ? (
              <Cards2
                key={card.id}
                oferta={card.valordesconto}
                foto={sapatoAzul}
                titulo={card.titulo}
                descricao={card.descricao}
                valorantigo={card.valorantigo}
                valoratual={card.valoratual}
              />
            ) : (
              <Cards
                key={card.id}
                foto={sapatoAzul}
                titulo={card.titulo}
                descricao={card.descricao}
                valorantigo={card.valorantigo}
                valoratual={card.valoratual}
              />
            )
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ProductViewPage;
