import { SlideEntity } from '@/utils/types';
import { FlexProps, Flex, Box, Avatar, Text, Stack, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface SideBarItemProps extends FlexProps {
  name: string;
  src: string;
}

export const SideBarItem = ({ name, src }: SideBarItemProps) => {
  return (
    <Link href={`/horse/${name}`} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
      >
        <HStack>
          <Avatar name={name} src={src} />
          <Text>{name}</Text>
        </HStack>
      </Flex>
    </Link>
  );
};
