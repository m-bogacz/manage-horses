import { createSafeContext } from '@/lib/createSafeContext';
import { getDefaultExamplephoto } from '@/utils/imageLoader/getDefualtPhoto';
import { HorseDataContext } from '@/utils/types';
import { ReactNode } from 'react';

interface HorseProviderProps {
  readonly children: ReactNode;
  value: HorseDataContext;
}

type DefaultPhotoSrcType = { defaultPhotoSrc: string };

interface ReturnValueType extends HorseDataContext, DefaultPhotoSrcType {}

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
