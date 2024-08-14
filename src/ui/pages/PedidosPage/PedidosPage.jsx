import React from 'react';
import Layout from '@components/Layout/Layout';
import sapatoAzul from '@assets/img/sapato_card.png';

function PedidosPage() {
  const orders = [
    {
      id: 1,
      products: [
        { name: 'Camiseta Supreme', image: sapatoAzul },
        { name: 'Tênis Nike', image: sapatoAzul }
      ],
      total: 'R$ 419,98',
      status: 'Entregue'
    },
    {
      id: 2,
      products: [
        { name: 'Fone de Ouvido', image: sapatoAzul }
      ],
      total: 'R$ 229,99',
      status: 'A Caminho'
    }
  ];

  return (
    <Layout>
      <h1>Meus Pedidos</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <h2>Pedido #{order.id}</h2>
            <p>Status: {order.status}</p>
            <div>
              {order.products.map((product, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={product.image} alt={product.name} style={{ width: '50px', marginRight: '10px' }} />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
            <p>Total: {order.total}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default PedidosPage;
