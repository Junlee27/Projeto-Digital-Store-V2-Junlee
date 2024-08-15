import React, { useContext } from 'react';
import { CartContext } from '@context/CartContext';
import CartItem from '@components/CartItem/CartItem';
import CartSummary from '@components/CartSummary/CartSummary';
import '@styles/pages/Cartpage/Cartpage.css';

function CartPage() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>
      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
          <CartSummary totalPrice={totalPrice} />
        </>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
}

export default CartPage;
