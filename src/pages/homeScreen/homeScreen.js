import React, { useEffect, useState } from 'react';
import SliderNews from '../../components/SliderNews/SliderNews';
import Slider from '../../components/slider/Slider';
import Header from '../../components/Header/Header';
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
        'https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg',
      label: 'lorem ipsum3',
    },
  ];
  useEffect(() => {
    getHttpRequest(`${process.env.REACT_APP_API_URL}/organizations/1/public`)
      .then(res => setState(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />

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
