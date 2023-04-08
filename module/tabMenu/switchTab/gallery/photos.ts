import { downloadImageFromSupBase } from '@/utils/imageLoader/getDefualtPhoto';

const breakpoints = [780, 640, 384, 256, 128, 96, 64, 48];

const images = [
  { src: 'Fado.jpg', width: 780, height: 1620 },
  { src: 'horse-profile.jpg', width: 780, height: 720 },
  { src: 'ada1.jpeg', width: 780, height: 720 },
  { src: 'ada2.jpeg', width: 780, height: 721 },
  { src: 'ada3.jpeg', width: 780, height: 608 },
  { src: 'Fado.jpg', width: 780, height: 1620 },
  { src: 'ada4.jpeg', width: 780, height: 720 },
  { src: 'ada5.jpeg', width: 780, height: 920 },
  { src: 'ada6.jpeg', width: 780, height: 694 },
  { src: 'ada7.jpeg', width: 780, height: 720 },
  { src: 'ada8.jpeg', width: 780, height: 810 },
  { src: 'ada9.jpeg', width: 780, height: 720 },
];

const photos = images.map((photo) => ({
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

export default photos;
