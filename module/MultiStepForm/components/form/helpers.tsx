import { HorseEntity } from '@/utils/types';
import { DamInformation } from './components/DamInformation';
import { HorseInformation } from './components/horseInformation/HorseInformation';
import { SireInformation } from './components/SireInformation';
import { Summary } from './components/Summary';

export const defaultValues = {
  name: '',
  birthday: '',
  sex: 'mare',
  profileImage: null,
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
  tabs: {
    News: [],
    Vet: [],
    Blacksmith: [],
  },
} satisfies HorseEntity;

export const steps = [
  { name: 'Horse Information', component: <HorseInformation /> },
  { name: 'Dam Information', component: <DamInformation /> },
  { name: 'Sire Information', component: <SireInformation /> },
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
