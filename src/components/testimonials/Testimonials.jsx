import React from 'react'
import './Testimonials.css'
import certi1 from '../../assets/IBM_certi.jpg'
import certi2 from '../../assets/google-data.jpg'
import certi3 from '../../assets/google-R.jpg'
import certi4 from '../../assets/java.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'



const Testimonials = () => {
  return (
    <section id = "testimonials">
      <h5>Courses Learnt</h5>
      <h2>Certifications</h2>

      <Swiper className="container testimonial__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className='testimonial'>
          <div className='certi__avatar'>
            <img src = {certi1} alt = ""/>
          </div>
          <h5 className='certi__name'>IBM</h5>
          <h6>Artifical Intelligence Analyst</h6>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='certi__avatar'>
            <img src = {certi2} alt = ""/>
          </div>
          <h5 className='certi__name'>Google</h5>
          <h6>Foundations: Data, Data, Everywhere</h6>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='certi__avatar'>
            <img src = {certi3} alt = ""/>
          </div>
          <h5 className='certi__name'>Google</h5>
          <h6>Data Analysis with R programming</h6>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='certi__avatar'>
            <img src = {certi4} alt = ""/>
          </div>
          <h5 className='certi__name'>Duke University</h5>
          <h6>Java Programming: Solving Problems with Software</h6>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials