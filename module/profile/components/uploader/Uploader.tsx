import React, { useState } from 'react';
import { Uploader } from '@/module/uploader/Uploader';
import { Button, Center, Flex, Heading, Box } from '@chakra-ui/react';

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Image from 'next/image';
import { useImageUploader } from './hooks/useImageUploader';
import { QueryCache } from '@tanstack/react-query';

export const ImageUploader = ({ name }: { name: string }) => {
  const [photoCropped, setPhotoCropped] = useState(false);
  const { cropperRef, imageSrc, onImageChange, getCropData, cropData } = useImageUploader(name);

  const onCrop = () => {
    setPhotoCropped(true);
    getCropData();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoCropped(false);
    onImageChange(e);
  };

  return (
    <Center w={'100%'} border={'1px dashed #718096'} p={5}>
      <Box maxW={200}>
        {imageSrc && !photoCropped && (
          <Cropper
            ref={cropperRef}
            src={cropData ? cropData : imageSrc}
            style={{ height: 200 }}
            aspectRatio={1}
            guides={false}
          />
        )}
        {photoCropped && cropData && <Image width={200} height={200} src={cropData} alt="horse" />}
      </Box>

      <Flex flexDir={'column'} ml={5} gap={5}>
        <Heading size={'lg'}>Drag & drop</Heading>
        <Uploader label="To Upload" name={name} onImageChange={handleImageChange} />
        {!photoCropped ? <Button onClick={onCrop}>Cut photo</Button> : null}
      </Flex>
    </Center>
  );
};
