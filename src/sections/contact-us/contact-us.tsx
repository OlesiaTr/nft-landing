import { XMarkIcon } from '@heroicons/react/24/outline';

import data from '@/data/contact-us.json';
import { SectionDescription, SectionTitle } from '@/components/ui';
import { ContactUsForm } from '@/components/base';

export const ContactUs = () => {
  const { id, title, description } = data;

  return (
    <section id={id} className="section  ">
      <SectionTitle>{title}</SectionTitle>

      <div className="flex flex-col items-center gap-4 sm:max-w-xs md:max-w-sm md:gap-6 xl:max-w-xl xl:gap-10">
        <XMarkIcon className="size-9" />

        <SectionDescription>{description}</SectionDescription>

        <ContactUsForm />
      </div>
    </section>
  );
};
