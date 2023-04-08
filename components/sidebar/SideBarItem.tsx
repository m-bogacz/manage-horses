import { FlexProps, Flex, Box, Avatar, Text, HStack } from '@chakra-ui/react';
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
        p="2"
        mx="4"
        gap={3}
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
