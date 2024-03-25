import React, { FC } from 'react';

export interface Props {
  card: {
    image1x: any;
    image2x: any;
    alt: string;
  };
}

export const SlideComponent: FC<Props> = ({ card }) => {
  return (
    <div className="h-[256px] max-w-[216px] overflow-hidden rounded-xl md:h-[336px] md:max-w-[284px] md:rounded-3xl xl:h-[280px] xl:max-w-[240px]">
      <img
        srcSet={`${card.image1x.default.src} 1x, ${card.image2x.default.src} 2x`}
        src={card.image1x.default.src}
        alt={card.alt}
        className="h-full object-cover"
      />
    </div>
  );
};
