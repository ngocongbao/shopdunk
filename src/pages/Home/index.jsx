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
import sale from "../../assets/XaTonKho.png";
import ip14 from "../../assets/iphone14prmax.png";
import ipad from "../../assets/Ipad.png";
import mac from "../../assets/MacBook.png";
import ss from "../../assets/SanSang.png";
import watch from "../../assets/Watch.png";

import ProductItem from "../../components/product-item";

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
        <div className="flex justify-between  my-10">
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
            {[...new Array(5)].map((_, index) => (
              <ProductItem
                key={index}
                name="IPhone 14pro max"
                img={ip14}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={tsv}
              />
            ))}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả IPhone {"> "}
            </button>
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">iPad</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {[...new Array(5)].map((_, index) => (
              <ProductItem
                key={index}
                name="Ipad 14pro max"
                img={ipad}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={tsv}
              />
            ))}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả IPad {"> "}
            </button>
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">Mac</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {/* {[...new Array(5)].map((_, index) => (
              <Mac key={index} />
            ))} */}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả Mac {">"}
            </button>
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">Watch</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {/* {[...new Array(5)].map((_, index) => (
              <Watch key={index} />
            ))} */}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả Watch {"> "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
