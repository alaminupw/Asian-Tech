import React from "react";
import './OurPartner.css';

import partner1 from '../../assets/images/partner1.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/partner3.png';
import partner4 from '../../assets/images/partner4.png';
import partner5 from '../../assets/images/partner5.png';
import partner6 from '../../assets/images/partner6.png';
import partner9 from '../../assets/images/partner9.png';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './Styles.css';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'

const OurPartner = () => {
    return (
        <div className="Partner-Site">
            <div className="Partner-container">
                <div className="container-fluid">
                    <div className="swiper-feature mb-4">  {/* gap between two swipers */}
                        <Swiper
                            slidesPerView={2}           // visible slides
                            spaceBetween={30}
                            centeredSlides={true}       // optional, center করতে চাইলে রাখো
                            loop={true}
                            grabCursor={true}
                            autoplay={{
                            delay: 1,                     // 0 = no pause
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,       // hover-এ pause বন্ধ
                            reverseDirection: false,      // left to right (default)
                            }}
                            speed={8000}                   // slow speed — 20 seconds এ full cycle, চাইলে 15000/25000 করো
                            freeMode={true}                 // smooth feel
                            modules={[Autoplay]}
                            className="mySwiper"
                            allowTouchMove={false}            // touch disable → continuous stop হবে না
                            breakpoints={{
            576: { slidesPerView: 3, spaceBetween: 20 },    // sm
            768: { slidesPerView: 4, spaceBetween: 25 },    // md
            992: { slidesPerView: 6, spaceBetween: 30 },    // lg
            1200: { slidesPerView: 6, spaceBetween: 35 },   // xl
          }}
                            onSwiper={(swiper) => {
                            // linear transition force করা (খুব important!)
                            if (swiper.$wrapperEl) {
                                swiper.$wrapperEl[0].style.transitionTimingFunction = 'linear';
                            }
                            }} 
                        >
                            <SwiperSlide className="custom-slide ">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner3}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner4}></img>
                            </SwiperSlide>
                        
                            <SwiperSlide className="custom-slide">
                                <img src={partner3}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner4}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner3}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner4}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner1}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner9}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner1}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            
                            {/* আরো slide দিলে loop আরো smooth হয় */}
                        </Swiper>
                    </div>

                    <div className="">  {/* নিচেরটা, gap আগের div-এ আছে */}
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            centeredSlides={true}           // optional, চাইলে false করে আরো smooth করতে পারো
                            loop={true}
                            grabCursor={true}
                            autoplay={{
                            delay: 1,                     // no pause
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            reverseDirection: true,       // ← এটা যোগ করো! right to left (reverse)
                            }}
                            speed={8000}                    // তোমার fast speed, চাইলে adjust
                            freeMode={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                            allowTouchMove={false}
                            breakpoints={{
            576: { slidesPerView: 3, spaceBetween: 20 },    // sm
            768: { slidesPerView: 4, spaceBetween: 25 },    // md
            992: { slidesPerView: 6, spaceBetween: 30 },    // lg
            1200: { slidesPerView: 6, spaceBetween: 35 },   // xl
          }}
                            onSwiper={(swiper) => {
                            if (swiper.$wrapperEl) {
                                swiper.$wrapperEl[0].style.transitionTimingFunction = 'linear';
                            }
                            }}
                        >
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner3}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner4}></img>
                            </SwiperSlide>
                        
                            <SwiperSlide className="custom-slide">
                                <img src={partner5}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner4}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner6}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner9}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner1}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner9}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner1}></img>
                            </SwiperSlide>
                            <SwiperSlide className="custom-slide">
                                <img src={partner2}></img>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartner;