import { FormFields } from '../utils/types';

export const tabFormFields = [
  { name: 'title', placeholder: 'write title', label: 'Title' },
  { name: 'date', placeholder: 'write date', label: 'Date' },
  { name: 'description', placeholder: 'write description', label: 'Descripton', textarea: true },
  { name: 'name', placeholder: 'write name', label: 'Name' },
] satisfies FormFields;
