import React from 'react';
import "../Styles/Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
   <>
    <div className='promo'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide><img src="https://cms-contents.pharmeasy.in/banner/e0c9b9d5481-Dweb.jpg?dim=1440x0&dpr=1&q=100" alt="promo"/></SwiperSlide>
        <SwiperSlide><img src="https://cms-contents.pharmeasy.in/banner/99b17b5c930-Dweb_Entry.jpg?dim=1440x0&dpr=1.25&q=100" alt="promo" /></SwiperSlide>
        <SwiperSlide><img src="https://cms-contents.pharmeasy.in/banner/aff1e7e2a72-PHEA20Dweb.jpg?dim=1440x0&dpr=1&q=100" alt="promo" /></SwiperSlide>
        <SwiperSlide><img src="https://cms-contents.pharmeasy.in/banner/d6903fb22ab-Dweb_NpnPE.jpg?dim=1440x0&dpr=1&q=100" alt="promo" /></SwiperSlide>
      </Swiper>
    </div>

    <div className='promo1'>
      <div><img src="http://127.0.0.1:5501/orderMedicine.png" alt="" /></div>
      <div><img src="http://127.0.0.1:5501/HealthProducts.png" alt="" /></div>
      <div><img src="http://127.0.0.1:5501/LabTest.png" alt="" /></div>
    </div>

    <div className='promo2'>
        <img src="http://127.0.0.1:5501/plusmember.png" alt="" />
    </div>
   </>
  )
}

export default Home