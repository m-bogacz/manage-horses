import { downloadImageFromSupBase } from '@/utils/imageLoader/getDefualtPhoto';

const breakpoints = [780, 640, 384, 256, 128, 96, 64, 48];

const getPhotos = (
  images: { width: number; height: number; id: number; createdAt: Date; src: string; alt: string }[]
) =>
  images.map((photo) => ({
    src: downloadImageFromSupBase(photo.src, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: downloadImageFromSupBase(photo.src, breakpoint, height),
        width: breakpoint,
        height,
      };
    }),
  }));

export default getPhotos;
