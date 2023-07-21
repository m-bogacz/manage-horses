import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ChildrenPageProps } from '@/utils/types/page';
import { APP_BAR_CONFIG } from '@/utils/const';

export const NavContainer = ({ children }: ChildrenPageProps) => {
  return (
    <Flex
      bg={useColorModeValue('appbar.100', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      borderStyle={'solid'}
      justifyContent={'flex-end'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      flex={2}
      minH={APP_BAR_CONFIG.HEIGHT}
      mr={10}
    >
      {children}
    </Flex>
  );
};
