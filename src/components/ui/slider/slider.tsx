'use client';

import React, { FC } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import data from '@/data/arts.json';

import 'swiper/css';
import 'swiper/css/navigation';
import { SlideComponent, SliderControls } from '@/components/ui';

export interface Props {
  slidesData: {
    image1x: any;
    image2x: any;
    alt: string;
  }[];
}

export const Slider: FC<Props> = ({ slidesData }) => {
  const { sliderControls } = data;
  return (
    <Swiper
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      modules={[Navigation, Autoplay, A11y]}
      a11y={{
        prevSlideMessage: sliderControls.prevBtnAriaLabel,
        nextSlideMessage: sliderControls.nextBtnAriaLabel,
      }}
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={30}
      centeredSlides={false}
      initialSlide={0}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="size-full max-w-[210px] md:max-w-[600px] xl:max-w-[960px]"
    >
      {slidesData.map((card, idx) => (
        <SwiperSlide
          tag="li"
          className="mb-6 flex items-center justify-center"
          key={idx}
        >
          <SlideComponent card={card} />
        </SwiperSlide>
      ))}
      <SliderControls />
    </Swiper>
  );
};
