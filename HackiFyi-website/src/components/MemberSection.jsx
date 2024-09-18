'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import MemberCard from './MemberCard';

const MemberSection = (props) => {
  return (
    <div id='Founders' className="py-10">
      <div className="p-1 text-center">
        <p className="w-full p-0 lg:p-10 text-xl lg:text-5xl font-mono font-bold">
          Meet the Team
        </p>
      </div>
      <div className="w-full p-5 py-14">
        <div className="lg:hidden">
          <Swiper
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="max-w-[90%] lg:max-w-[80%]"
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <MemberCard
                name="Name"
                designation="Designation"
                imageUrl="/images/image.png"
                linkedinUrl="#"
                quote="Some quote"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                name="Name"
                designation="Designation"
                imageUrl="/images/image.png"
                linkedinUrl="#"
                quote="Some quote"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                name="Name"
                designation="Designation"
                imageUrl="/images/image.png"
                linkedinUrl="#"
                quote="Some quote"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard
                name="Name"
                designation="Designation"
                imageUrl="/images/image.png"
                linkedinUrl="#"
                quote="Some quote"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden lg:grid lg:grid-cols-4 min-[580px]:grid-cols-2 grid-cols-1 gap-5 gap-y-8 lg:justify-between justify-items-center content-around">
          <MemberCard
            name="Name"
            designation="Designation"
            imageUrl="/images/image.png"
            linkedinUrl="#"
            quote="Some quote"
          />
          <MemberCard
            name="Name"
            designation="Designation"
            imageUrl="/images/image.png"
            linkedinUrl="#"
            quote="Some quote"
          />
          <MemberCard
            name="Name"
            designation="Designation"
            imageUrl="/images/image.png"
            linkedinUrl="#"
            quote="Some quote"
          />
          <MemberCard
            name="Name"
            designation="Designation"
            imageUrl="/images/image.png"
            linkedinUrl="#"
            quote="Some quote"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
