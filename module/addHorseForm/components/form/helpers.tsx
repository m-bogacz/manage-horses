import { HorseEntity } from '@/utils/types';
import { MotherSideInformation } from './components/motherSideInformation/MotherInformation';
import { FatherSideInformation } from './components/fatherSideInformation/FatherInformation';
import { HorseInformation } from './components/horseInformation/HorseInformation';
import { Summary } from './components/summary/Summary';

export const defaultValues = {
  name: '',
  birthday: null,
  sex: 'mare',
  profileImage: '',
  profileImageUrl: '',
  mother: {
    value: '',
    label: '',
  },
  father: {
    value: '',
    label: '',
  },
  images: [],
  place: '',
  children: null,

  news: [],
  veterinarian: [],
  farrier: [],
} satisfies HorseEntity;

export const steps = [
  { name: 'Horse Information', component: <HorseInformation /> },
  { name: 'Mother Information', component: <MotherSideInformation /> },
  { name: 'Father Information', component: <FatherSideInformation /> },
  { name: 'Summary', component: <Summary /> },
] as const;

export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target?.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};
