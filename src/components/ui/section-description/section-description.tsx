import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  className?: string;
}

export const SectionDescription: FC<Props> = ({ children, className = '' }) => {
  return (
    <h3
      className={clsx(
        'text-center text-base uppercase leading-[1.18] xl:text-2xl xl:leading-[1.2] ',
        className,
      )}
    >
      {children}
    </h3>
  );
};
