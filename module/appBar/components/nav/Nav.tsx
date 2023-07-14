import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { AuthenticationOptions } from './components/authenticationOptions/AuthenticationOptions';
import { UserBar } from './components/userBar/UserBar';

export const Navigation = () => {
  const { data: session } = useSession();

  return (
    <Flex
      bg={useColorModeValue('appbar.100', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      borderStyle={'solid'}
      justifyContent={'flex-end'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'flex-end'}
      flex={2}
    >
      {!session?.user ? <AuthenticationOptions /> : <UserBar />}
    </Flex>
  );
};
