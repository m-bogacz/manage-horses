import { createSafeContext } from '@/lib/createSafeContext';
import { HorseEntity } from '@/utils/types';
import { ReactNode } from 'react';

interface HorseProviderProps {
  readonly children: ReactNode;
  value: HorseEntity;
}

const [useHorseContext, HorseContextProvider] = createSafeContext<HorseEntity>();

const HorseProvider = ({ children, value }: HorseProviderProps) => {
  return <HorseContextProvider value={value}>{children}</HorseContextProvider>;
};
export { useHorseContext, HorseProvider };
