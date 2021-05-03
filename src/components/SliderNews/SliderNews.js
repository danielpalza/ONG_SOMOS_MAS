import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './SliderNews.css';
const SliderNews = ({ news }) => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        {news.map((value, index) => (
          <div key={index} className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-5">
                <img
                  className="img-thumbnail"
                  src={
                    'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'
                  }
                  alt="img-new"
                />
              </div>
              <div className="col-md-7 px-5 text">
                <p className="display-3 text-info">{value.title}</p>
                <div className="getting-started-info text-justify">
                  {value.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SliderNews;
