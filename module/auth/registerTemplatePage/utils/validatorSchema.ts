import { z } from 'zod';
import { validatorNameText, validatorPasswordText, validatorEmailText } from '@/utils/validators';

export const registerSchema = z.object({
  name: z.string().min(3, validatorNameText),
  email: z.string().email(validatorEmailText),
  password: z.string().min(7, validatorPasswordText),
});
