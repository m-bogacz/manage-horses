import { useColorModeValue, Flex, Text, Divider, Skeleton } from '@chakra-ui/react';
import Image from 'next/image';

import { NavItem } from './NavItem';
import { HorsesEntity } from '@/utils/types';
import { useState, useEffect } from 'react';
import { useHorses } from '@/hooks/useHorse/useHorses';
import { useQuery } from '@tanstack/react-query';

export default function SidebarContent() {
  const { isLoading, error, data } = useHorses();

  if (!data) return null;

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
        <Flex h="20" alignItems="center" mx="8" gap={2}>
          <Image priority src="/logo.svg" height={42} width={42} alt="Logo App" />
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Horses
          </Text>
        </Flex>
        <Divider />
        {data.horses.map((horse) => (
          <NavItem key={horse.name} name={horse.name} />
        ))}
      </Skeleton>
    </Flex>
  );
}
