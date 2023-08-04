import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { MenuButton, HStack, Avatar, VStack, Text, Box, AvatarBadge } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

export const UserInfo = ({ isOpen }: { isOpen: boolean }) => {
  const { data: session } = useSession();
  return (
    <MenuButton as={'button'} py={1} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
      <HStack>
        <Avatar bg={'gray.400'} size={'sm'}>
          <AvatarBadge boxSize="1.15em" bg="green.500" />
        </Avatar>
        <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
          <Text fontSize="md">{session?.user.username}</Text>

          <Text fontSize="xs" color="gray.600">
            {session?.user.role}
          </Text>
        </VStack>
        <Box display={{ base: 'none', md: 'flex' }}>{isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}</Box>
      </HStack>
    </MenuButton>
  );
};
