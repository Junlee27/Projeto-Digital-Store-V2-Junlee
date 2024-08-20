import { useContext } from 'react';
import { CartContext } from '@context/CartContext';
import CartItem from '@components/CartItem/CartItem';
import CartSummary from '@components/CartSummary/CartSummary';
import Layout from '@components/Layout/Layout';
import '@styles/pages/Cartpage/Cartpage.css';

function CartPage() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + (item.price ? item.price * item.quantity : 0), 0);

  return (
    <Layout>
      <div className="cart-page">
        <h1>Meu Carrinho</h1>
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
        <CartSummary totalPrice={totalPrice} />
      </div>
    </Layout>
  );
}

export default CartPage;