import React, { useContext } from "react";
import Layout from "@components/Layout/Layout";
import CartItem from "@components/CartItem/CartItem";
import CartSummary from "@components/CartSummary/CartSummary";
import { CartContext } from '@context/CartContext';
import "@styles/pages/Cartpage/Cartpage.css";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItemsCount = cart.reduce((sum, item) => sum + (item.quantidade || 1), 0);
  const totalPriceAmount = cart.reduce((sum, item) => sum + (item.precoComDesconto || item.preco) * (item.quantidade || 1), 0);

  return (
    <Layout>
      <div className="cart-page">
        <div className="cart-content">
          <div className="cart-header">
            <h2>MEU CARRINHO ({totalItemsCount} itens)</h2>
            <h2>QUANTIDADE</h2>
            <h2>UNITÁRIO</h2>
            <h2>TOTAL</h2>
          </div>
          {cart.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={removeFromCart} 
              onIncrease={() => { /* lógica para aumentar a quantidade */ }} 
              onDecrease={() => { /* lógica para diminuir a quantidade */ }} 
            />
          ))}
        </div>
        <CartSummary totalPrice={totalPriceAmount.toFixed(2)} />
      </div>
    </Layout>
  );
}

export default CartPage;
