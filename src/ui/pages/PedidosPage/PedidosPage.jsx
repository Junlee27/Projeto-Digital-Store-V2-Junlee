import { useState, useEffect } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import '@styles/pages/PedidosPage/PedidosPage.css';
import sapatoImg from '@assets/img/sapato_card.png';

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      const pedidosMock = [
        {
          id: 1,
          data: '2023-08-15',
          total: 150.00,
          itens: [
            { id: 1, nome: 'Produto 1', quantidade: 2, preco: 50.00, imagem: sapatoImg },
            { id: 2, nome: 'Produto 2', quantidade: 1, preco: 50.00, imagem: sapatoImg },
          ],
        },
        {
          id: 2,
          data: '2023-08-14',
          total: 200.00,
          itens: [
            { id: 3, nome: 'Produto 3', quantidade: 1, preco: 200.00, imagem: sapatoImg },
          ],
        },
      ];
      setPedidos(pedidosMock);
    };

    fetchPedidos();
  }, []);

  const toggleDetalhes = (index) => {
    const novosPedidos = [...pedidos];
    novosPedidos[index].mostrarDetalhes = !novosPedidos[index].mostrarDetalhes;
    setPedidos(novosPedidos);
  };

  return (
    <>
      <Header />
      <div className="pedidos-page">
        <h1>Meus Pedidos</h1>
        <div className="pedidos-list">
          {pedidos.map((pedido, index) => (
            <div key={pedido.id} className="pedido-item">
              <div className="pedido-resumo" onClick={() => toggleDetalhes(index)}>
                <div>Pedido #{pedido.id}</div>
                <div>{new Date(pedido.data).toLocaleDateString()}</div>
                <div>Total: R${pedido.total.toFixed(2)}</div>
              </div>
              {pedido.mostrarDetalhes && (
                <div className="pedido-detalhes">
                  {pedido.itens.map(item => (
                    <div key={item.id} className="pedido-item-detalhe">
                      <img src={item.imagem} alt={item.nome} className="pedido-item-imagem" />
                      <div>{item.nome}</div>
                      <div>Quantidade: {item.quantidade}</div>
                      <div>Preço: R${item.preco.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PedidosPage;
