import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Carousel({ images }) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
