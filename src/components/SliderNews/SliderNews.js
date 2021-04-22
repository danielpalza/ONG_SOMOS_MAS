import React from 'react';
import './SliderNews.css';
const SliderNews = ({ news }) => {
  const $ = window.jQuery;

  $(document).ready(() => {
    $('.bxslider').bxSlider({
      adaptiveHeight: true,
      auto: true,
      infiniteLoop: true,
      controls: false,
      autoControls: false,
      mode: 'vertical',
    });
  });

  return (
    <>
      <div className="bxslider">
        {news.map((value, index) => {
          return (
            <div key={index}>
              <h1 className="display-4 text-center">{value.title}</h1>
              <div className="container">
                <p className="text-center text-sm-left text-md-left justify-lg-left font-weight-light">
                  {value.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SliderNews;
