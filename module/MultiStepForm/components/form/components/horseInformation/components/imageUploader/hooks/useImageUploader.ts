import React, { useCallback, useEffect, useState } from 'react';
import { readFileAsDataURL } from '@/module/MultiStepForm/components/form/helpers';
import { useFormContext } from 'react-hook-form';

export const useImageUploader = (name: string) => {
  const { watch } = useFormContext();
  const [imageDataURL, setImageDataURL] = useState<string | null>(null);

  const watchedImageUploder = watch(name);

  const handleFileChange = useCallback(async (file: FileList) => {
    try {
      const dataURL = await readFileAsDataURL(file[0]);
      setImageDataURL(dataURL);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    handleFileChange(watchedImageUploder);
  }, [handleFileChange, watchedImageUploder]);

  return { imageDataURL };
};
