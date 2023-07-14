import { Box, Heading, Container, Text, Stack, Progress } from '@chakra-ui/react';

export default function NotAccess() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }} lineHeight={'110%'}>
            Your account has been successfully created!
          </Heading>
          <Text fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }} color={'gray.500'}>
            {`However, before you can log in, your account needs to be verified by the platform's administrator`}
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            Once your account has been verified, you will be able to access all the features of our platform. We
            appreciate your patience and understanding in this matter.
          </Text>
          <Stack>
            <Progress size="md" color="table.100" hasStripe isIndeterminate />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
