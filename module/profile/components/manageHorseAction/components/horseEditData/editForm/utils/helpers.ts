import { OptionType } from '@/utils/types';

export const formFields = {
  input: [
    { name: 'name', placeholder: 'name', label: 'Change name' },
    { name: 'place', placeholder: 'place of birth', label: 'Change place of birth' },
    { name: 'birthday', placeholder: 'date of birth', label: 'Change date of birth' },
  ],
  radio: [
    { value: 'mare', content: 'mare' },
    { value: 'gelding', content: 'gelding' },
    { value: 'stallion', content: 'stallion' },
  ],
};

export const filterhorses = (inputValue: string, arr: OptionType[]) => {
  return arr.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};
export const createOption = (label: string) => ({
  label,
  value: label,
});
