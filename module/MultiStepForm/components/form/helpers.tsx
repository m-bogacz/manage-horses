import { HorseEntity } from '@/utils/types';
import { MotherInformation } from './components/motherInformation/MotherInformation';
import { HorseInformation } from './components/horseInformation/HorseInformation';
import { FatherInformation } from './components/fatherInformation/FatherInformation';
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
  { name: 'Mother Information', component: <MotherInformation /> },
  { name: 'Father Information', component: <FatherInformation /> },
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
