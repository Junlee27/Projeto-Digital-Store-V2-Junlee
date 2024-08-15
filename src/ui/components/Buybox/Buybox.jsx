import React, { useState } from 'react';
import '@styles/Components/Buybox/Buybox.css';

const Buybox = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const handleQuantidadeChange = (e) => {
    setQuantidade(parseInt(e.target.value));
  };

  const handleTamanhoSelecionado = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const adicionarAoCarrinho = () => {
    if (!tamanhoSelecionado) {
      alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
      return;
    }
    console.log(`Adicionado ao carrinho: ${produto.nome}, Tamanho: ${tamanhoSelecionado}, Quantidade: ${quantidade}`);
  };

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="buybox-container">
      <h2>{produto.nome}</h2>
      <p className="produto-preco">R${produto.preco?.toFixed(2)}</p>

      <div className="tamanhos-disponiveis">
        <h3>Tamanhos Disponíveis</h3>
        <div className="tamanhos-opcoes">
          {produto.tamanhos?.map((tamanho) => (
            <button
              key={tamanho}
              className={`tamanho-opcao ${tamanhoSelecionado === tamanho ? 'selected' : ''}`}
              onClick={() => handleTamanhoSelecionado(tamanho)}
            >
              {tamanho}
            </button>
          ))}
        </div>
      </div>

      <div className="quantidade-container">
        <label htmlFor="quantidade">Quantidade:</label>
        <input
          type="number"
          id="quantidade"
          min="1"
          value={quantidade}
          onChange={handleQuantidadeChange}
        />
      </div>

      <button className="adicionar-carrinho-btn" onClick={adicionarAoCarrinho}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default Buybox;
