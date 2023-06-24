import { FormFields } from '../../utils/types';

export const tabFormFields = [
  { name: 'title', placeholder: 'write title', label: 'Title' },
  { name: 'executedBy', placeholder: 'write name', label: 'executed by' },
  { name: 'description', placeholder: 'write description', label: 'Descripton', textarea: true },
  { name: 'date', placeholder: 'write date', label: 'Date' },
] satisfies FormFields;

export const defaultValuesTabForm = {
  date: new Date(),
  title: '',
  description: '',
  executedBy: '',
};
