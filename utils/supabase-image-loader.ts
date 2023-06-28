import { ImageLoaderProps } from 'next/image';

export default function supabaseLoader({ src, width, quality }: ImageLoaderProps) {
  return `https://dpdasginastynijsarwv.supabase.co/storage/v1/render/image/public/${src}?width=${width}&quality=${
    quality || 75
  }`;
}
