import { HorseData } from '@/utils/types';
import { ReactNode } from 'react';

export interface HorseProviderProps {
  readonly children: ReactNode;
  readonly value: HorseData;
}

export interface HorseContextType extends HorseData {}
