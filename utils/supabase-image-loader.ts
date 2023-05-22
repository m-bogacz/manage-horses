import { ImageLoaderProps } from 'next/image';

export default function supabaseLoader({ src, width, quality }: ImageLoaderProps) {
  return `https://dpdasginastynijsarwv.supabase.co/storage/v1/render/image/public/${src}?width=${width}&quality=${
    quality || 75
  }`;
}

// export const downloadImageFromSupBase = (src: string, width: number, height: number, quality = 75) => {
//   return `https://dpdasginastynijsarwv.supabase.co/storage/v1/object/public/${src}?width=${width}&height=${height}&quality=${quality}`;
// };
