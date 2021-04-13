import React, { useEffect, useState } from 'react';
import SliderNews from '../../components/SliderNews/SliderNews';
import Slider from '../../components/slider/Slider';
import { getHttpRequest } from '../../helper/axios/index';
import { news } from '../../utils/homeContent';
import './homeScreen.css';
const HomeScreen = () => {
  const [state, setState] = useState({});
  const { welcomeText } = state;

  const sliderImg = [
    {
      imgUrl:
        'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
      label: 'lorem ipsum',
    },
    {
      imgUrl:
        'https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg',
      label: 'lorem ipsum2',
    },
    {
      imgUrl:
        'https://www.cato5.cl/slider/fotos%20sindicato/carpeta%20sin%20t%C3%ADtulo/fotos%20usadas/01.jpg',
      label: 'lorem ipsum3',
    },
  ];
  useEffect(() => {
    getHttpRequest('http://localhost:3001/organizations/1/public')
      .then(res => setState(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center content-row">
          <div className="title col-12 text-sm-left text-md-left text-lg-center">
            <h1 className="display-3 text-justify text-truncate">
              {welcomeText}
            </h1>
          </div>
          <div className="sliderNews col-12">
            <SliderNews news={news} />
          </div>
        </div>
      </div>
      <div className="container-fluid slider">
        <Slider slides={sliderImg} width={'3000vw'} />
      </div>
    </>
  );
};

export default HomeScreen;
