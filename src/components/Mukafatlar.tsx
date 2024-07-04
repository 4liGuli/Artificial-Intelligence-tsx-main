import Mukafat from './Mukafat'

// JSON JavaScript Object Notation

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import mukafatMelumatlari from "../awards.json"

import { Pagination } from 'swiper/modules';



const Mukafatlar:React.FC = () => {


// if else for loop qetiyyen useState, useEffect, useRef
  return (
    <div className='py-5 award-section'>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-5"

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >


{

  // Callback HOF Higher Order Function

  mukafatMelumatlari.map((birMelumat)=> (
    <SwiperSlide><Mukafat mukafatTitle={birMelumat.title} mukafatImg={birMelumat.image} mukafatParaqraf={birMelumat.body} /></SwiperSlide>

  ))
}
      </Swiper>
    </div>
  )
}

export default Mukafatlar