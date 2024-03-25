'use client';

import { useSwiper } from 'swiper/react';
import data from '@/data/arts.json';

export const SliderControls = () => {
  const swiper = useSwiper();
  const { sliderControls } = data;
  return (
    <div className="flex items-center justify-center gap-12">
      <button
        name="slider"
        type="button"
        onClick={() => swiper.slidePrev()}
        aria-label={sliderControls.prevBtnAriaLabel}
        className="cursor-pointer border-0 bg-transparent p-0 font-biro text-2xl leading-tight transition hover:text-accent focus:text-accent"
      >
        {sliderControls.prevBtnText}
      </button>
      <button
        name="slider"
        type="button"
        onClick={() => swiper.slideNext()}
        aria-label={sliderControls.nextBtnAriaLabel}
        className="cursor-pointer border-0 bg-transparent p-0 font-biro text-2xl leading-tight transition hover:text-accent focus:text-accent"
      >
        {sliderControls.nextBtnText}
      </button>
    </div>
  );
};
