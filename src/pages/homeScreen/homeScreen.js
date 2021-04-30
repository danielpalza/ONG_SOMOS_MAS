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
      <main className="page landing-page">
        <section className="clean-block clean-hero">
          <Slider slides={sliderImg} />
        </section>
        <section className="clean-block clean-info dark">
          <section class="clean-block clean-hero">
            <div class="text">
              <h2 className="display-1">welcome</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
          </section>
        </section>
        <section className="clean-block clean-info dark">
          <SliderNews news={news} />
        </section>
      </main>
    </>
  );
};

export default HomeScreen;
