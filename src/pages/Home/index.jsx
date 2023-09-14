// import React, { useEffect, useState } from "react";
// import banner from "../../assets/BannerIphone.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import banner1 from "../../assets/BannerHome1.png";
import banner2 from "../../assets/BannerHome2.jpg";
import banner3 from "../../assets/BannerHome3.jpg";
import banner4 from "../../assets/BannerHome4.png";
import banner5 from "../../assets/BannerHome5.png";
import banner6 from "../../assets/BannerHome6.png";
import tsv from "../../assets/ChaoTanSv.png";
import ip14 from "../../assets/iphone14prmax.png";
export default function Home() {
  // const [image, setImage] = useState(false);
  // useEffect(() => {
  //   const img = setTimeout(() => {
  //     setImage(true);
  //   }, 2000);
  //   return () => clearTimeout(img);
  // }, []);
  return (
    <div>
      {/* <div>
        {image && (
          <div className=" top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/[.5] fixed z-10">
            <div className="relative h-1/2">
              <div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center absolute top-2 right-2"
                onClick={(e) => setImage(false)}
              >
                x
              </div>
              <img src={banner} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        )}
      </div> */}
      <div>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, A11y]}
        >
          <SwiperSlide>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-56">
        <div className="flex justify-between w-full my-10">
          <div className="w-[32%]">
            <img src={banner4} alt="" />
          </div>
          <div className="w-[32%]">
            <img src={banner5} alt="" />
          </div>
          <div className="w-[32%]">
            <img src={banner6} alt="" />
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">iPhone</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {[...new Array(4)].map((_,index) => (
              <ProductItem key={index} />
            ))}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block m-auto text-blue-400 hover:bg-blue-500 hover:text-white my-5 ">Xem tất cả IPhone ></button>
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">iPad</h1>
      </div>
    </div>
  );
}
const ProductItem = () => {
  return (
    <div className="border-2 rounded-xl bg-slate-200  flex flex-col items-center p-2">
      <div className="self-end w-[100px]">
        <img src={tsv} alt="" className="w-full object-cover h-full" />
      </div>
      <div>
        <img src={ip14} alt="" />
      </div>
      <div>
        <h3 className="font-bold text-center">IPhone 14 Promax 256GB</h3>
        <div className="flex justify-between items-center">
          <h4 className="text-blue-700 font-bold">26.150.000đ</h4>
          <h5 className="line-through text-gray-400">34.990.000đ</h5>
          <h5 className="text-gray-400">-25%</h5>
        </div>
      </div>
    </div>
  );
};
