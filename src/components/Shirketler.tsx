import React from 'react'
import Shirket from './Shirket'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Shirketler:React.FC = () => {
  return (
    <div className="sshirketler py-5">
      <div className='container py-5'>


      <Swiper
        slidesPerView={4}
        spaceBetween={200}
        modules={[Autoplay]}

        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

       
        className="mySwiper"
      >
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket1.svg"  /></SwiperSlide>
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket2.svg" /></SwiperSlide>
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket3.svg" /></SwiperSlide>
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket4.svg" /></SwiperSlide>

         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket1.svg"  /></SwiperSlide>
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket2.svg" /></SwiperSlide>
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket3.svg" /></SwiperSlide>
         <SwiperSlide><Shirket shirketinLogosu="/assets/images/shirketler/shirket4.svg" /></SwiperSlide>
</Swiper>           
        </div>
           
    </div>
  )
}

export default Shirketler