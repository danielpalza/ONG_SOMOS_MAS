import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.css';

function Slider({ slides }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
    >
      {slides.map(({ imgUrl, label }, idx) => (
        <div key={idx} className="slide">
          <img src={imgUrl} alt="img" />
          <h2 className="legend">{label}</h2>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
