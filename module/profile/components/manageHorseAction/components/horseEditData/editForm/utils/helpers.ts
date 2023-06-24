import { HorseContextType } from '@/apps/context/horseContext/utils/types';

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

export const getDefaultValuesEditForm = ({ id, name, birthday, gender, place, mother, father }: HorseContextType) => {
  return {
    id,
    name: name,
    birthday: birthday ? new Date(birthday) : null,
    gender: gender,
    place,
    mother: { value: mother?.name ?? null, label: mother?.name ?? null },
    father: { value: father?.name ?? null, label: father?.name ?? null },
  };
};
