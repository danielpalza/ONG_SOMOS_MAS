import React from "react";
import "./slider.css";

function Slider({ width, slides }) {
  const $ = window.jQuery;

  $(document).ready(() => {
    $(".bxslider").bxSlider({
      slideWidth: width,
      adaptiveHeight: true,
    });
  });

  return (
    <div className="bxslider">
      {slides.map(({ imgUrl, label }, idx) => (
        <div key={idx} className="slide">
          <img src={imgUrl} alt="img" />
          <h2>{label}</h2>
        </div>
      ))}
    </div>
  );
}

export default Slider;
