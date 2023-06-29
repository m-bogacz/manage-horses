import { Flex, Box, HStack, Stack, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useCreateUser } from './hooks/useCreateUser';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { InputField } from '@/shared/inputs/InputField';
import { PasswordInput } from '@/shared/inputs/passwordInput/PasswordInput';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterTemplatePage() {
  const { create, loading } = useCreateUser();

  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await create({ name: data.name, email: data.email, password: data.password });
    } catch (error) {
      console.log('onSubmit', error);
    }
  };

  return (
    <>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color="teal.400">
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'teal.300'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            minW={{ base: '100%', md: '468px' }}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Stack spacing={4} textAlign={'center'}>
                  <InputField name="name" placeholder="name" label="Name" />
                  <InputField name="email" placeholder="email" label="Email" />
                  <PasswordInput name="password" placeholder="password" label="Password" />

                  <Stack spacing={10} pt={2}>
                    <Button type="submit" isLoading={loading} loadingText="Submitting" size="lg" colorScheme="teal">
                      Sign up
                    </Button>
                  </Stack>
                  <HStack pt={6} justifyContent={'center'}>
                    <Text>Already a user?</Text>
                    <ChakraNextLink href={'/login'}>Login</ChakraNextLink>
                  </HStack>
                </Stack>
              </form>
            </FormProvider>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
