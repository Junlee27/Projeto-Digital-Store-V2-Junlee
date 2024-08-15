import React from 'react';
import '@styles/pages/Cartpage/Cartpage.css';

const CartPage = ({ carrinho = [], removerItem, atualizarQuantidade }) => {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Meu Carrinho</h1>
      <div className="cart-items">
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imagem} alt={item.nome} className="cart-item-imagem" />
              <div className="cart-item-detalhes">
                <h2>{item.nome}</h2>
                <p>Preço: R${item.preco.toFixed(2)}</p>
                <label>
                  Quantidade:
                  <input
                    type="number"
                    min="1"
                    value={item.quantidade}
                    onChange={(e) => atualizarQuantidade(index, parseInt(e.target.value))}
                  />
                </label>
                <button
                  className="remover-item-btn"
                  onClick={() => removerItem(index)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h2>Total: R${calcularTotal()}</h2>
        <button className="finalizar-compra-btn">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartPage;
