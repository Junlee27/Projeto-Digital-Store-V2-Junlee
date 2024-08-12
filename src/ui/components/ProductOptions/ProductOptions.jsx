import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Components/ProductOptions/ProductOptions.css';

function ProductOptions({ sizes, colors }) {
  return (
    <div className="productOptions">
      <div className="sizes">
        <h3>Tamanhos:</h3>
        {sizes.map((size, index) => (
          <span key={index}>{size}</span>
        ))}
      </div>
      <div className="colors">
        <h3>Cores:</h3>
        {colors.map((color, index) => (
          <span key={index} style={{ backgroundColor: color }}></span>
        ))}
      </div>
    </div>
  );
}

ProductOptions.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductOptions;
