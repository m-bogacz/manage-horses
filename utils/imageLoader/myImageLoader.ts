import { ImageLoaderProps } from 'next/image';

export const myImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://dpdasginastynijsarwv.supabase.co/storage/v1/object/public/horses/horses/${src}?w=${width}&q=${
    quality || 75
  }`;
};
