import { useState, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import CartSummary from "@components/CartSummary/CartSummary";
import sapatoAzul from "@assets/img/sapato_card.png";
import axios from "axios";
import flechaRosa from "@assets/img/flecha_icon.svg";
import { Link } from "react-router-dom";
import "@styles/pages/Cartpage/Cartpage.css";

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  const { nome, cor, tamanho, quantidade, preco, precoComDesconto } = item;

  const precoFormatado = preco ? preco.toFixed(2) : "0.00";
  const precoComDescontoFormatado = precoComDesconto ? precoComDesconto.toFixed(2) : "0.00";

  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={sapatoAzul} alt={nome} />
        <div className="item-info">
          <h2>{nome}</h2>
          <p>Cor: {cor}</p>
          <p>Tamanho: {tamanho}</p>
        </div>
      </div>
      <div className="item-quantity">
        <div>
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{quantidade}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
        <a href="#" onClick={() => onRemove(item.id)} className="remove-item">
          Remover item
        </a>
      </div>
      <div className="item-pricing">
        <p className="original-price">R$ {precoFormatado}</p>
        <p className="discounted-price">R$ {precoComDescontoFormatado}</p>
      </div>
    </div>
  );
}

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products");
        const initialItems = response.data.map(item => ({ ...item, quantidade: 1 }));
        setCartItems(initialItems);
      } catch (error) {
        console.log(`O erro foi ${error}`);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantidade, 0);
    const totalPriceAmount = cartItems.reduce((sum, item) => sum + (item.precoComDesconto || 0) * item.quantidade, 0);
    
    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceAmount);
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleIncreaseItem = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantidade: item.quantidade + 1 } : item
    ));
  };

  const handleDecreaseItem = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : item
    ));
  };

  return (
    <Layout>
      <div className="cart-page">
        <div className="cart-content">
          <div className="cart-header">
            <h2>MEU CARRINHO ({totalItems} itens)</h2>
            <h2>QUANTIDADE</h2>
            <h2>UNITÁRIO</h2>
            <h2>TOTAL</h2>
          </div>
          {cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemoveItem} 
              onIncrease={handleIncreaseItem} 
              onDecrease={handleDecreaseItem} 
            />
          ))}
          <section className="discount-shipping">
            <div className="discount">
              <strong>Calcular desconto</strong>
              <input type="text" placeholder="Insira seu Cupom" id="discount-code" name="discountCode" />
              <button>OK</button>
            </div>
            <div className="shipping">
              <strong>Calcular Frete</strong>
              <input type="text" placeholder="Insira seu CEP" id="shipping-zip" name="shippingZip" />
              <button>OK</button>
            </div>
          </section>
        </div>
        <CartSummary totalPrice={totalPrice.toFixed(2)} />
      </div>
      <section className="container-produtos-em-alta">
        <div className="produtos-em-alta">
          <div className="topico-section">
            <h1>Produtos Relacionados</h1>
            <h2>
              <Link to="/ProductList" className="link-ver-todos">
                Ver todos <img src={flechaRosa} alt="flecha" />
              </Link>
            </h2>
          </div>
          <div className="produto-em-alta-cards">
            {cartItems.slice(0, 4).map((card) =>
              card.desconto ? (
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
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CartPage;
