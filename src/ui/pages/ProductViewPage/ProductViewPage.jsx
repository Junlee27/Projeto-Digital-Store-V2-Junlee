import { useState, useContext } from 'react';
import Layout from "@components/Layout/Layout";
import BuyBox from '@components/Buybox/Buybox';
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import { CartContext } from '@context/CartContext';
import "@styles/pages/ProductViewPage/ProductViewPage.css";
import sapatoAzul from "@assets/img/sapato_card.png";
import Carrousel from "@components/CarouselMenor/CarouselMenor";

function ProductViewPage() {
  const { addToCart } = useContext(CartContext);

  const product = {
    name: 'Tênis Nike Revolution 6',
    reference: '38416711',
    rating: '★★★★☆',
    price: 219.90,
    description: 'Tênis de alta qualidade, ideal para corridas e caminhadas.',
    images: [
      { src: sapatoAzul, alt: 'Tênis Nike' },
      { src: sapatoAzul, alt: 'Tênis Nike' },
    ],
    sizes: ['39', '40', '41', '42'],
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'],
  };

  const relatedProducts = [
    { id: 1, titulo: 'Tênis Vermelho', descricao: 'Ótimo para caminhadas.', valordesconto: 199.90, valorantigo: 229.90, valoratual: 199.90, desconto: true },
    { id: 2, titulo: 'Tênis Azul', descricao: 'Ótimo para corridas.', valordesconto: 219.90, valorantigo: 249.90, valoratual: 219.90, desconto: true },
  ];

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
          {relatedProducts.map(card => (
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