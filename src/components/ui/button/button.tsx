import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

export interface Props {
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<Props> = ({ children, disabled = false }) => {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-lg bg-accent px-[70px] pb-3 pt-2.5 font-grotesk text-base font-black uppercase leading-[1.18] backdrop-blur-[6px] hover:text-black md:px-[107px] xl:px-[140px] xl:pb-5 xl:pt-4 xl:leading-[1.21]',
        { 'bg-disabledBg': disabled },
      )}
    >
      {children}
    </button>
  );
};
