'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Report } from 'notiflix';
import data from '@/data/contact-us.json';
import { Button, FormField } from '@/components/ui';
import { schema } from './schema';

export const ContactUsForm = () => {
  const { inputs, button, onSuccess } = data.form;

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    watch,
    reset,
  } = useForm<FieldValues>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const userName = watch('userName');
  const walletAddress = watch('walletAddress');

  const formSubmit: SubmitHandler<FieldValues> = () => {
    Report.success(
      onSuccess.description,
      onSuccess.title,
      onSuccess.buttonAgreement,
      () => {
        reset();
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      autoComplete="off"
      className="flex flex-col gap-4 pb-4 xl:gap-6 xl:pb-6"
    >
      {inputs.map(input => (
        <FormField
          key={input.id}
          isDiscord={input.name === 'userName'}
          register={register}
          errors={errors}
          {...input}
        />
      ))}

      <Button
        disabled={userName === '' || walletAddress === ''}
        aria-label={button.ariaLabel}
        type="submit"
      >
        {isSubmitSuccessful
          ? Object.keys(errors).length > 0
            ? 'ERROR'
            : 'MINTED'
          : button.label}
      </Button>
    </form>
  );
};
