import { createSafeContext } from '@/lib/createSafeContext';
import { HorseContextType, HorseProviderProps } from './utils/types';

const [useHorseContext, HorseContextProvider] = createSafeContext<HorseContextType>();

const HorseProvider = ({ children, value }: HorseProviderProps) => {
  return <HorseContextProvider value={value}>{children}</HorseContextProvider>;
};

export { useHorseContext, HorseProvider };
