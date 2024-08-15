import React from 'react';
import '@styles/Components/CartItem/CartItem.css';

function CartItem({ item, removerItem, atualizarQuantidade }) {
  const originalPrice = item.originalPrice ? item.originalPrice.toFixed(2) : '0.00';
  const discountedPrice = item.discountedPrice ? item.discountedPrice.toFixed(2) : '0.00';

  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={item.image} alt={item.name} />
        <div className="item-info">
          <h2>{item.name || 'No Name Available'}</h2>
          <p className="item-pricing">
            <span className="original-price">R${originalPrice}</span>
            <span className="discounted-price">R${discountedPrice}</span>
          </p>
        </div>
      </div>
      <div className="item-quantity">
        <button onClick={() => atualizarQuantidade(item, item.quantity - 1)}>-</button>
        <span>{item.quantity || 1}</span>
        <button onClick={() => atualizarQuantidade(item, item.quantity + 1)}>+</button>
      </div>
      <button className="remove-item" onClick={() => removerItem(item.id)}>Remover</button>
    </div>
  );
}

export default CartItem;
