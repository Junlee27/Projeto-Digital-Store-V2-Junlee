import { useState } from 'react';
import '@styles/Components/Gallery/Gallery.css';

const Gallery = ({ imagens }) => {
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximaImagem = () => {
    setImagemAtual((prevImagemAtual) => (prevImagemAtual + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setImagemAtual((prevImagemAtual) => (prevImagemAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-main">
        <img src={imagens[imagemAtual]} alt="Galeria" className="gallery-imagem" />
        <button className="gallery-btn anterior" onClick={imagemAnterior}>‹</button>
        <button className="gallery-btn proxima" onClick={proximaImagem}>›</button>
      </div>
      <div className="gallery-thumbnails">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`gallery-thumbnail ${index === imagemAtual ? 'active' : ''}`}
            onClick={() => setImagemAtual(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
