import React from 'react';
import Gallery from '@components/Gallery/Gallery';
import ProductOptions from '@components/ProductOptions/ProductOptions';
import '@styles/Components/Buybox/Buybox.css';

function BuyBox() {
  const products = [
    {
      src: 'src/assets/img/blusa.png',
      alt: 'Blusa Supreme: Edição Especial Stormtrooper',
      name: 'Blusa Supreme: Edição Especial Stormtrooper',
      reference: 'QT01112022',
      rating: '★★★★☆',
      price: 'R$ 189,99',
      description: 'Uma camisa da grande marca de grife Supreme agora para aqueles fãs de Star Wars que tanto aguardavam, venha se aventurar com nosso Stormtrooper da Supreme que faz parte dos Sith Troopers',
    },
    {
      src: 'src/assets/img/FotoNike.jpeg',
      alt: 'Tênis Botinha Cano Alto: Retrô',
      name: 'Tênis Botinha Cano Alto: Retrô',
      reference: 'JC11102024',
      rating: '★★★★★',
      price: 'R$ 229,99',
      description: 'Venha se aventurar com saltos como fez em outros tempos o grande Jordan!',
    },
  ];

  const product = products[0];

  return (
    <div className="buyBox">
      <h2>{product.name}</h2>
      <p>Reference: {product.reference}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Gallery images={products.map(({ src, alt }) => ({ src, alt }))} />
      <ProductOptions sizes={['P', 'M', 'G', 'GG']} colors={['#ff0000', '#00ff00', '#0000ff', '#ff00ff']} />
      <button>COMPARE</button>
    </div>
  );
}

export default BuyBox;
