import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const SEX = ['mare', 'gelding', 'stallion'];

const FormTemplateDetailsSchema = z
  .object({
    value: z.string().nonempty('Wartość nie może być pusta'),
    label: z.string().nonempty('Etykieta nie może być pusta'),
  })
  .nullable()
  .refine((v) => v?.value !== '', { message: 'Musisz wybrać opcję' });

export const step1Schema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  surname: z.string().min(2, 'Drugie imię musi mieć co najmniej 2 znaki'),
  date: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  sex: z.string({ invalid_type_error: 'Zaznacz jedną z opcji' }).refine((val) => SEX.map((sex) => sex).includes(val)),
});

export const step2Schema = z.object({
  mother: FormTemplateDetailsSchema,
});

export const step3Schema = z.object({
  father: FormTemplateDetailsSchema,
});

export const switchResolver = (active: number) => {
  if (active === 1) return zodResolver(step1Schema);
  if (active === 2) return zodResolver(step2Schema);
  if (active === 3) return zodResolver(step3Schema);
};
