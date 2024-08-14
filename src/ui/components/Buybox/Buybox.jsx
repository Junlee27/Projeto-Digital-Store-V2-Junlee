import React, { useContext } from 'react';
import Gallery from '@components/Gallery/Gallery';
import ProductOptions from '@components/ProductOptions/ProductOptions';
import { CartContext } from '@context/CartContext';
import '@styles/Components/Buybox/Buybox.css';

function BuyBox({ productName, reference, rating, price, description, images, sizes, colors }) {
  const { addToCart } = useContext(CartContext);

  const product = {
    name: productName,
    reference,
    rating,
    price,
    description,
    images,
    sizes,
    colors,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <div className="buyBox">
      <h2>{product.name}</h2>
      <p>Reference: {product.reference}</p>
      <p>Rating: {product.rating}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Gallery images={product.images} />
      <ProductOptions sizes={product.sizes} colors={product.colors} />

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default BuyBox;
