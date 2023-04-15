import React from 'react';
import Image from 'next/image';
import { Uploader } from '@/module/uploader/Uploader';
import { useImageUploader } from './hooks/useImageUploader';
import { Center, Flex, Heading } from '@chakra-ui/react';

export const ImageUploader = ({ name }: { name: string }) => {
  const { imageDataURL } = useImageUploader(name);

  return (
    <Center w={'100%'} border={'1px dashed #718096'} p={5}>
      <Image
        priority
        src={imageDataURL ? imageDataURL : '/horse.svg'}
        height={200}
        width={200}
        alt="Profile Image of horse"
      />

      <Flex flexDir={'column'} align="center" ml={5}>
        <Heading size={'lg'}>Drag & drop</Heading>
        <Uploader label="To Upload" name={name} />
      </Flex>
    </Center>
  );
};
