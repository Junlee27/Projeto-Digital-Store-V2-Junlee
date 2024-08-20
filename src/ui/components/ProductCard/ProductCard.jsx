import "@styles/Components/ProductCard/ProductCard.css";

function ProductCard({ image, name, price, rating, addToCart, product }) {
  return (
    <div className="productCard">
      <div className="imageContainer">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="details">
        <h3 className="name">{name}</h3>
        <p className="price">R$ {price.toFixed(2)}</p>
        <p className="rating">Rating: {rating}</p>
        <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default ProductCard;