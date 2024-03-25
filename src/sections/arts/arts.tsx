'use client';

import { SectionTitle, Slider } from '@/components/ui';

import { useViewportSize } from '@/hooks';
import data from '@/data/arts.json';
import { ARTS_MOBILE_IMAGES, ARTS_DESKTOP_IMAGES } from '@/data/images';

export const Arts = () => {
  const { id, title } = data;
  const { width } = useViewportSize();

  const isMobile = width && width < 1280;
  return (
    <section id={id} className="section">
      <SectionTitle>{title}</SectionTitle>

      <Slider
        slidesData={isMobile ? ARTS_MOBILE_IMAGES : ARTS_DESKTOP_IMAGES}
      />
    </section>
  );
};
