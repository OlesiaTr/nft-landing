import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  className?: string;
  isWhite?: boolean;
  isCentered?: boolean;
}

export const SectionTitle: FC<Props> = ({
  children,
  className = '',
  isWhite = true,
  isCentered = true,
}) => {
  return (
    <h2
      className={clsx(
        'font-grotesk text-[44px] font-black uppercase leading-[0.91]  md:text-[80px] md:leading-none  xl:text-[160px]',
        {
          'text-white': isWhite,
          'text-center': isCentered,
        },
        className,
      )}
    >
      {children}
    </h2>
  );
};
