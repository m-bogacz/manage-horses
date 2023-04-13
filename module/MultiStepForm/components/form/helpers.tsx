import { HorseEntity } from '@/utils/types';
import { DamInformation } from './components/DamInformation';
import { HorseInformation } from './components/HorseInformation';
import { SireInformation } from './components/SireInformation';
import { Summary } from './components/Summary';

export const defaultValues = {
  name: '',
  birthday: '',
  sex: 'mare',
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
