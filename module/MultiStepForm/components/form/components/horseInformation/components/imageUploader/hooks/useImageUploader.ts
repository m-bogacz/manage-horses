import { useState, useRef } from 'react';
import { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useFormContext } from 'react-hook-form';

export const useImageUploader = (name: string) => {
  const { setValue } = useFormContext();

  const [imageSrc, setImageSrc] = useState<string | null>('./horse.svg');

  const [cropData, setCropData] = useState<string | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const croppedDataURL = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      setCropData(croppedDataURL);
      setValue(name, croppedDataURL);
    }
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setCropData(null);
        setImageSrc(reader.result as string);
      };
    }
  };

  return { cropperRef, imageSrc, onImageChange, getCropData, cropData };
};
