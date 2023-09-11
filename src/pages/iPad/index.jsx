import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from "../../assets/bannerhome1.png"
import banner2 from "../../assets/bannerhome2.jpg"
import banner3 from "../../assets/bannerhome3.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules';
export default function Ipad() {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
    }}
    >
       <SwiperSlide><img src={banner1} alt=''/></SwiperSlide>
       <SwiperSlide><img src={banner2} alt=''/></SwiperSlide>
       <SwiperSlide><img src={banner3} alt=''/></SwiperSlide>
    </Swiper>
  )
}
