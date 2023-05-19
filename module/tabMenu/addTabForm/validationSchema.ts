import { z, date } from 'zod';

export const addTabFormValidationSchema = z.object({
  title: z.string().min(5, 'Title must be 5 or more characters long'),
  description: z.string().min(5, 'Description must be 5 or more characters long'),
  date: date({ required_error: 'Please select date' }),
});
