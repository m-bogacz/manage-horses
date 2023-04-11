import { HorseEntity } from '@/utils/types';
import { FirstStepHorseDetails } from '../components/FirstStepHorseDetails';
import { SecondStepMotherDetails } from '../components/SecondStepMotherDetails';
import { ThirdStepFatherDetails } from '../components/ThirdStepFatherDetails';

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

export const switchStep = (active: number) => {
  switch (active) {
    case 1:
      return <FirstStepHorseDetails />;
    case 2:
      return <SecondStepMotherDetails />;
    case 3:
      return <ThirdStepFatherDetails />;
    default:
      return <FirstStepHorseDetails />;
  }
};
