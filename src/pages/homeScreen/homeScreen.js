import React, { useEffect, useState } from 'react';
import SliderNews from '../../components/SliderNews/SliderNews';
import Slider from '../../components/slider/Slider';
import { getHttpRequest } from '../../helper/axios/index';
import { news } from '../../utils/homeContent';
import { Helmet } from 'react-helmet';
import photoBg from '../../assets/images/Foto-6.jpg';
import './homeScreen.css';
const HomeScreen = () => {
  const [state, setState] = useState({});
  const { welcomeText } = state;

  const sliderImg = [
    {
      imgUrl:
        'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
      label: 'Imagen',
    },
    {
      imgUrl:
        'https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg',
      label: 'Imagen2',
    },
    {
      imgUrl:
        'https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg',
      label: 'Imagen3',
    },
  ];

  useEffect(() => {
    getHttpRequest(`${process.env.REACT_APP_API_URL}/organizations/1/public`)
      .then((res) => setState(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Somos Más - Principal</title>
      </Helmet>
      <main className="page landing-page">
        <section className="clean-block clean-info dark">
          <Slider slides={sliderImg} />
        </section>
        <section
          className="clean-block clean-hero"
          style={{
            backgroundImage: `url(${photoBg})`,
            color: 'rgba(250, 250, 136, 0.85)',
          }}
        >
          <div className="text">
            <h1 className="welcome-text">Bienvenido!</h1>
            <p className="text-justify welcome-text">{welcomeText}</p>
          </div>
        </section>
        <section className="clean-block clean-info dark slider-news">
          <SliderNews news={news} />
        </section>
      </main>
    </>
  );
};

export default HomeScreen;
