import { Flex, Text, Divider, Skeleton } from '@chakra-ui/react';
import Image from 'next/image';
import { SideBarItem } from './SideBarItem';
import { useHorses } from '@/hooks/useHorse/useHorses';
import Link from 'next/link';
import { getDefaultphoto } from '@/utils/imageLoader/getDefualtPhoto';

export const Sidebar = () => {
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
