import * as z from 'zod';
import data from '@/data/contact-us.json';

const { userName, walletAddress } = data.form.validation;

export const schema = z.object({
  userName: z
    .string()
    .trim()
    .min(userName.minLength.value, userName.minLength.message)
    .max(userName.maxLength.value, userName.maxLength.message)
    .regex(RegExp(userName.format.reg), userName.format.message),

  walletAddress: z
    .string()
    .trim()
    .regex(RegExp(walletAddress.format.reg), walletAddress.format.message),
});

export type FormValues = z.infer<typeof schema>;
