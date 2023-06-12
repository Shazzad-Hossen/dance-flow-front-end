import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offer from "../../assets/images/banner/offer.png";
import b1 from "../../assets/images/banner/banner1.jpg";
import b5 from "../../assets/images/banner/banner2.jpg";
import b3 from "../../assets/images/banner/banner3.jpg";
import b4 from "../../assets/images/banner/banner4.jpg";
import b2 from "../../assets/images/banner/banner5.jpg";
import b6 from "../../assets/images/banner/banner6.jpg";


const Banner = () => {
    const bannerOffer= <>
      <div className="absolute top-0 left-0   h-full w-full bg-[#747474] bg-opacity-30 z-50">
          <div className="flex flex-col justify-center h-full ">
            <img
              className="max-w-[500px] w-full drop-shadow-lg lg:ml-56"
              src={offer}
              alt=""
            />
          </div>
        </div></>

    
  return (
    <div>
      <Swiper className="">
      
        <SwiperSlide>
          <div className="relative h-[calc(100vh-74.406px)] ">
            <img className="object-cover h-full w-full" src={b1} alt="" />
            {bannerOffer}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-74.406px)] ">
            <img className="object-cover h-full w-full" src={b2} alt="" />
            {bannerOffer}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-74.406px)] ">
            <img className="object-cover h-full w-full" src={b3} alt="" />
            {bannerOffer}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-74.406px)] ">
            <img className="object-cover h-full w-full" src={b4} alt="" />
            {bannerOffer}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-74.406px)] ">
            <img className="object-cover h-full w-full" src={b5} alt="" />
            {bannerOffer}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[calc(100vh-74.406px)] ">
            <img className="object-cover h-full w-full" src={b6} alt="" />
            {bannerOffer}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
