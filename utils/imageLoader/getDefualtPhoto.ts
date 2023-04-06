import { SlideEntity } from '../types';

export const getDefaultphoto = (images: SlideEntity[] | null): string => {
  if (images === null) {
    return 'https://dpdasginastynijsarwv.supabase.co/storage/v1/object/public/horses/horses/horse.jpeg';
  }
  const defualtImage = images.filter((image) => image.default);

  return defualtImage[0].src;
};
