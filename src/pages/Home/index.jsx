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
import airpod from "../../assets/airpod 2 pro.png";
import ProductItem from "../../components/product-item";
import moi from "../../assets/new.png";
import sac from "../../assets/sac.png";
import bannerfooter from "../../assets/BannerFooter.jpeg";
import News from "../../components/News";
import bannerfooter1 from "../../assets/bannerfooter1.png";
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
        <div className="grid grid-cols-3 gap-5 mx-20 mt-5">
          <div className="">
            <img src={banner4} alt="" />
          </div>
          <div className="">
            <img src={banner5} alt="" />
          </div>
          <div className="">
            <img src={banner6} alt="" />
          </div>
        </div>
      <div className="mx-20">
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">iPhone</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {[...new Array(5)].map((_, index) => (
              <ProductItem
                key={index}
                name="IPhone 14pro Max 128GB"
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
                name="Ipad Air 4"
                img={ipad}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={sale}
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
            {[...new Array(4)].map((_, index) => (
              <ProductItem
                key={index}
                name="MacBook Air M1 2020 (8GB)|256GB SSD "
                img={mac}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={ss}
              />
            ))}
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
            {[...new Array(5)].map((_, index) => (
              <ProductItem
                key={index}
                name="Apple Watch Series 7 Nhôm GPS"
                img={watch}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={tsv}
              />
            ))}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả Watch {"> "}
            </button>
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">Âm thanh</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {[...new Array(5)].map((_, index) => (
              <ProductItem
                key={index}
                name=" AirPod Pro 2"
                img={airpod}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={moi}
              />
            ))}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả Âm thanh {"> "}
            </button>
          </div>
        </div>
        <h1 className="font-bold text-center text-3xl pt-10 pb-5">Phụ kiện</h1>
        <div>
          <div className="flex justify-between items-center gap-2">
            {[...new Array(5)].map((_, index) => (
              <ProductItem
                key={index}
                name="Sạc 20W USB-C Power Adapter"
                img={sac}
                price={"19000000"}
                oldPrice={"20000000"}
                tag={moi}
              />
            ))}
          </div>
          <div>
            <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
              Xem tất cả Phụ kiện {"> "}
            </button>
          </div>
        </div>
        <div>
          <img
            src={bannerfooter}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-bold text-center text-3xl pt-10 pb-5">Tin tức</h1>
          <div>
            <div className="flex justify-between items-center gap-2">
              {[...new Array(4)].map((_, index) => (
                <News
                  key={index}
                  img={bannerfooter1}
                  title="Chuyên gia giải đáp nên mua Iphone 15 Plus hay 14 là tốt nhất"
                  date="13/09/2023"
                />
              ))}
            </div>
            <div>
              <button className="border-2 border-blue-500 rounded-md py-2 px-4 block mx-auto my-6 text-blue-400 hover:bg-blue-500 hover:text-white  ">
                Xem tất cả Tin tức {"> "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 leading-10">
        <h1 className="text-center font-bold">Đăng kí nhận tin từ ShopDunk</h1>
        <h3 className="text-center">
          Thông tin sản phẩm mới nhất và chương trình khuyến mãi
        </h3>
        <div className="flex items-center relative mx-auto w-max  rounded-2xl overflow-hidden">
          <input
            type="email"
            placeholder="Nhập Email"
            className=" w-[300px] pl-2"
          />
          <button className="absolute top-50% right-0 text-white text-center bg-blue-500 p-2">
            Đăng kí
          </button>
          
        </div>
      </div>
    </div>
  );
}
