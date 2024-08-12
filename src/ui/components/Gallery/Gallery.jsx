import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Components/Gallery/Gallery.css';

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
