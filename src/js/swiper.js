import Swiper from 'swiper';
import 'swiper/css';

const goodsSlider = new Swiper('.goods-slider', {
  direction: 'horizontal',
  spaceBetween: -23,
  speed: 800,
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
});
