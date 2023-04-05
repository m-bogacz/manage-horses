import { FlexProps, Flex, Box, Avatar, Text, Stack, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface NavItemProps extends FlexProps {
  name: string;
}

export const NavItem = ({ name }: NavItemProps) => {
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
          <Avatar name="name" src="/adaZdjecia/Fado1.jpg" />
          <Text>{name}</Text>
        </HStack>
      </Flex>
    </Link>
  );
};
