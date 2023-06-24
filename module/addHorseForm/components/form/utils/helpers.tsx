import { MotherSideInformation } from '../components/motherSideInformation/MotherInformation';
import { FatherSideInformation } from '../components/fatherSideInformation/FatherInformation';
import { HorseInformation } from '../components/horseInformation/HorseInformation';
import { Summary } from '../components/summary/Summary';
import { customParent } from '@/utils/types';
import { FormDataEntity } from './types';

export const defaultValues = {
  name: '',
  birthday: null,
  gender: 'mare',
  profileImage: '',
  profileImageUrl: '',
  mother: '',
  father: '',
  images: [],
  place: '',
} satisfies FormDataEntity;

export const steps = [
  { name: 'Horse Information', component: <HorseInformation /> },
  { name: 'Mother Information', component: <MotherSideInformation /> },
  { name: 'Father Information', component: <FatherSideInformation /> },
  { name: 'Summary', component: <Summary /> },
] as const;

export const formFields = {
  input: [
    { name: 'name', placeholder: 'name' },
    { name: 'place', placeholder: 'place of birth' },
    { name: 'birthday', placeholder: 'date of birth' },
  ],
  radio: [
    { value: 'mare', content: 'mare' },
    { value: 'gelding', content: 'gelding' },
    { value: 'stallion', content: 'stallion' },
  ],
};

export const returnNameofObject = (obj: customParent | string) => {
  if (typeof obj === 'object' && 'value' in obj) {
    return obj.value;
  }
  return obj;
};
