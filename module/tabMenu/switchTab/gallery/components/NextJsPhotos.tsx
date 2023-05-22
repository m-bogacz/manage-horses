import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';

export default function NextJsImage({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image src={src} alt={alt} title={title} width={1180} height={980} onClick={onClick} />
    </div>
  );
}
