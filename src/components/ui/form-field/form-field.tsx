import clsx from 'clsx';
import React, { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import DiscordIcon from '~/icons/discord-logo.svg';
import MetamaskIcon from '~/icons/metamask-logo.svg';

export interface Props {
  isDiscord: boolean;
  register: UseFormRegister<FieldValues>;
  type: string;
  placeholder: string;
  name: string;
  errors: FieldErrors;
  required: boolean;
}

export const FormField: FC<Props> = ({
  isDiscord = false,
  type,
  register,
  placeholder,
  errors = {},
  name,
}) => {
  const hasError = errors && errors[name];

  return (
    <div className="flex flex-col items-end">
      {' '}
      <div className="flex w-full items-center rounded-lg bg-black backdrop-blur-[6px]">
        <div className="flex size-12 items-center justify-center rounded-l-lg rounded-r-none p-2.5 xl:size-16">
          {isDiscord ? (
            <DiscordIcon className="size-6 fill-current text-darkBlue" />
          ) : (
            <MetamaskIcon className="size-6" />
          )}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          aria-invalid={hasError ? 'true' : 'false'}
          {...register(name)}
          className={clsx(
            'flex w-full items-center rounded-l-none rounded-r-lg border border-black bg-darkBg px-6 py-4 text-xs uppercase leading-[1.16] outline-none placeholder:text-placeholder hover:border hover:border-white hover:text-white focus:border focus:border-white focus:text-white active:border active:border-white active:text-white xl:py-[22px] xl:text-base xl:leading-[1.18]',
            { 'border-accent': hasError, 'text-accent': hasError },
          )}
        />
      </div>
      {hasError && ( // @ts-ignore
        <span className="uppercase text-accent">{errors[name]?.message}</span>
      )}
    </div>
  );
};
