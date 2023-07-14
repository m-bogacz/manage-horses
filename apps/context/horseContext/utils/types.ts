import { HorseData } from '@/utils/types/horse';
import { ReactNode } from 'react';

export interface HorseProviderProps {
  readonly children: ReactNode;
  readonly value: HorseData;
}

export interface HorseContextType extends HorseData {}
