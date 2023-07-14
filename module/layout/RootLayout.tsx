import { Box, Flex } from '@chakra-ui/react';
import { AppBar } from '../appBar/AppBar';
import { ChildrenPageProps } from '@/utils/types/page';

export const RootLayout = ({ children }: ChildrenPageProps) => {
  return (
    <Flex h={'100vh'} flexDir={'column'}>
      <Box as="nav">
        <AppBar />
      </Box>
      <Box flex={1}>{children}</Box>
    </Flex>
  );
};
