import { createSafeContext } from '@/lib/createSafeContext';
import { getDefaultphoto } from '@/utils/imageLoader/getDefualtPhoto';
import { HorseEntity } from '@/utils/types';
import { ReactNode } from 'react';

interface HorseProviderProps {
  readonly children: ReactNode;
  value: HorseEntity;
}

type DefaultPhotoSrcType = { defaultPhotoSrc: string };

interface ReturnValueType extends HorseEntity, DefaultPhotoSrcType {}

const [useHorseContext, HorseContextProvider] = createSafeContext<ReturnValueType>();

const HorseProvider = ({ children, value }: HorseProviderProps) => {
  const defaultPhotoSrc = getDefaultphoto(value.images);

  const returnValue = {
    ...value,
    defaultPhotoSrc,
  };

  return <HorseContextProvider value={returnValue}>{children}</HorseContextProvider>;
};
export { useHorseContext, HorseProvider };
