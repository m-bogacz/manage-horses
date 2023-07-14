import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';

export const AccessDenied = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Box>Access Denied</Box>
      </Stack>
    </Container>
  );
};
