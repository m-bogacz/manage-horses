import { z, date } from 'zod';

export const addTabFormValidationSchema = z.object({
  title: z.string().min(2, 'Tytuł musi mieć co najmniej 2 znaki'),
  description: z.string().min(2, 'Opis musi mieć co najmniej 2 znaki'),
  date: date({ required_error: 'Proszę wybrać datę' }),
});
