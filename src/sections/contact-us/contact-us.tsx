import React, { FC } from 'react';

import data from '@/data/contact-us.json';
import { SectionDescription, SectionTitle } from '@/components/ui';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ContactUsForm } from '@/components/base';

export interface Props {}

export const ContactUs: FC<Props> = () => {
  // console.log('data:', data);
  const { id, title, description } = data;

  return (
    <section
      id={id}
      className="flex flex-col items-center gap-6 px-[72px] md:gap-10 xl:gap-20 "
    >
      <SectionTitle>{title}</SectionTitle>

      <div className="flex flex-col items-center gap-4 sm:max-w-xs md:max-w-sm md:gap-6 xl:max-w-xl xl:gap-10">
        <XMarkIcon className="size-9" />

        <SectionDescription>{description}</SectionDescription>

        <ContactUsForm />
      </div>
    </section>
  );
};
