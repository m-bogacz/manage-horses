import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().nonempty('Enter your name'),
  password: z.string().nonempty('Enter the password'),
});
