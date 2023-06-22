import { createSafeContext } from '@/lib/createSafeContext';
import { getDefaultExamplephoto } from '@/utils/imageLoader/getDefualtPhoto';
import { HorseData } from '@/utils/types';
import { ReactNode } from 'react';

interface HorseProviderProps {
  readonly children: ReactNode;
  value: HorseData;
}

type DefaultPhotoSrcType = { defaultPhotoSrc: string };

interface ReturnValueType extends HorseData, DefaultPhotoSrcType {}

const [useHorseContext, HorseContextProvider] = createSafeContext<ReturnValueType>();

const HorseProvider = ({ children, value }: HorseProviderProps) => {
  const defaultPhotoSrc = getDefaultExamplephoto();

  const returnValue = {
    ...value,
    defaultPhotoSrc,
  };

  return <HorseContextProvider value={returnValue}>{children}</HorseContextProvider>;
};
export { useHorseContext, HorseProvider };
