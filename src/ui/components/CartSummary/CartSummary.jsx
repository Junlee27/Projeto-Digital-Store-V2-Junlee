import '@styles/Components/CartSummary/CartSummary.css';

function CartSummary({ totalPrice }) {
  return (
    <div className="cart-summary">
      <h2>RESUMO</h2>
      <div className="summary-details">
        <p>Subtotal: <span className="total-price">R${totalPrice.toFixed(2)}</span></p>
        <p>Frete: <span>R$ 0,00</span></p>
        <p>Desconto: <span>R$ 30,00</span></p>
        <p>Total: <span className="total-price">R${(totalPrice - 30).toFixed(2)}</span></p>
        <p className="installments">ou 10x de R${((totalPrice - 30) / 10).toFixed(2)} sem juros</p>
      </div>
      <button className="continue-button">Finalizar Compra</button>
    </div>
  );
}

export default CartSummary;