import { useColorModeValue, Flex, Text, Divider, Skeleton } from '@chakra-ui/react';
import Image from 'next/image';

import { SideBarItem } from './SideBarItem';
import { HorsesEntity, SlideEntity } from '@/utils/types';
import { useState, useEffect } from 'react';
import { useHorses } from '@/hooks/useHorse/useHorses';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export const Sidebar = () => {
  const { isLoading, error, data } = useHorses();

  if (!data) return null;

  const getDefaultphoto = (images: SlideEntity[] | null): string => {
    if (images === null) {
      return 'https://dpdasginastynijsarwv.supabase.co/storage/v1/object/public/horses/horses/horse.jpeg';
    }
    const defualtImage = images.filter((image) => image.default);

    return defualtImage[0].src;
  };

  return (
    <Flex
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      h="full"
      backgroundColor={{ base: 'gray.200', md: 'white' }}
      flexDir={'column'}
    >
      <Skeleton isLoaded={!isLoading}>
        <Link href={'/'}>
          <Flex h="20" alignItems="center" mx="8" gap={2}>
            <Image priority src="/logo.svg" height={42} width={42} alt="Logo App" />
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Horses
            </Text>
          </Flex>
        </Link>
        <Divider />
        {data.horses.map((horse) => (
          <SideBarItem key={horse.name} name={horse.name} src={getDefaultphoto(horse.images)} />
        ))}
      </Skeleton>
    </Flex>
  );
};
