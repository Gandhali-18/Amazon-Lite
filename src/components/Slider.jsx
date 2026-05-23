import { useState } from 'react';
import '../styles/slider.css';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg", 
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
  ];

  const goLeft = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <button className="slider-btn left-btn" onClick={goLeft}>
        &#10094;
      </button>
      <div className="slider-images">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Slide ${index}`}
            className={index === currentIndex ? "slide active" : "slide"}
          />
        ))}
      </div>
      <button className="slider-btn right-btn" onClick={goRight}>
        &#10095;
      </button>
    </div>
  );
}
