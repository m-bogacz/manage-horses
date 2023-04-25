import React from 'react';
import { Uploader } from '@/module/uploader/Uploader';
import { useImageUploader } from './hooks/useImageUploader';
import { Button, Center, Flex, Heading, Box } from '@chakra-ui/react';

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export const ImageUploader = ({ name }: { name: string }) => {
  const { cropperRef, imageSrc, onImageChange, getCropData, cropData } = useImageUploader(name);

  return (
    <Center w={'100%'} border={'1px dashed #718096'} p={5}>
      <Box maxW={200}>
        {imageSrc && (
          <Cropper
            ref={cropperRef}
            src={cropData ? cropData : imageSrc}
            style={{ height: 200 }}
            aspectRatio={1}
            guides={false}
          />
        )}
      </Box>

      <Flex flexDir={'column'} ml={5} gap={5}>
        <Heading size={'lg'}>Drag & drop</Heading>
        <Uploader label="To Upload" name={name} onImageChange={onImageChange} />
        <Button onClick={getCropData}>Cut photo</Button>
      </Flex>
    </Center>
  );
};
