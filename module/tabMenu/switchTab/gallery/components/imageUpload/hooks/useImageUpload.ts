import React, { ChangeEvent, useRef, useState } from 'react';

interface ImageProps {
  readonly src: string;
  readonly alt: string;
}

interface ImageUploadProps {
  readonly label?: string;
  readonly initialImage: ImageProps | null;
  readonly objectFit?: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down';
  readonly accept?: string;
  readonly sizeLimit: number;
  readonly onChangePicture?: (imageData: string) => Promise<void> | void;
}

export const useImageUpload = ({ initialImage, sizeLimit, onChangePicture }: ImageUploadProps) => {
  const pictureRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<ImageProps | null>(initialImage);
  const [updatingPicture, setUpdatingPicture] = useState(false);
  const [pictureError, setPictureError] = useState<string | null>(null);

  const handleOnChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    const fileName = file?.name?.split('.')?.[0] ?? 'New file';

    reader.addEventListener(
      'load',
      async function () {
        try {
          setImage({ src: reader.result as string, alt: fileName });
          if (typeof onChangePicture === 'function') {
            await onChangePicture(reader.result as string);
          }
        } catch (err) {
          console.error('Unable to update image', err);
        } finally {
          setUpdatingPicture(false);
        }
      },
      false
    );

    if (file) {
      if (file.size <= sizeLimit) {
        setUpdatingPicture(true);
        setPictureError('');
        reader.readAsDataURL(file);
      } else {
        setPictureError('File size is exceeding 10MB.');
      }
    }
  };

  const handleOnClickPicture = () => {
    if (pictureRef.current) {
      pictureRef.current.click();
    }
  };

  return { image, updatingPicture, pictureRef, pictureError, setImage, handleOnClickPicture, handleOnChangePicture };
};
