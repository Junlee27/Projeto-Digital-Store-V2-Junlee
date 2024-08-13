import React from 'react';
import '@styles/Components/CartSummary/CartSummary.css';

const CartSummary = ({ totalPrice }) => {
  return (
    <div className="cart-summary">
      <h2>RESUMO</h2>
      <div className="summary-details">
        <p>Subtotal: <span>R$ {totalPrice}</span></p>
        <p>Frete: <span>R$ 0,00</span></p>
        <p>Desconto: <span>R$ 30,00</span></p>
        <p>Total: <span className="total-price">R$ {totalPrice}</span></p>
        <p className="installments">ou 10x de R$ {(totalPrice / 10).toFixed(2)} sem juros</p>
        <button className="continue-button">Continuar</button>
      </div>
    </div>
  );
};

export default CartSummary;
