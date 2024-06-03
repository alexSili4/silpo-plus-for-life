import Swiper from 'swiper';
import 'swiper/css';

const swiperClassName = '.swiper';

const swiper = new Swiper(swiperClassName, {
  direction: 'horizontal',
  spaceBetween: -23,
  speed: 800,
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
});
