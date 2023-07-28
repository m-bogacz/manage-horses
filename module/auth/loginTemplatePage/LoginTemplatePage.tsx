import React from 'react';
import { Flex, Stack, Avatar, Heading, Text, Button, Box, HStack } from '@chakra-ui/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { InputField } from '@/shared/inputs/InputField';
import { PasswordInput } from '@/shared/inputs/passwordInput/PasswordInput';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { loginSchema } from './utils/validatorSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Inputs } from './utils/types';
import { useLogin } from './hooks/useLogin';

const LoginTemplatePage = () => {
  const { login, loading } = useLogin();

  const methods = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data);
  };

  return (
    <Flex flexDirection="column" width="100wh" height="100vh" justifyContent="center" alignItems="center" bg="gray.50">
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="primary.300" />
        <Heading color="primary.200">Welcome</Heading>
        <Box minW={{ base: '100%', md: '468px' }}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
                <InputField name="name" placeholder="name" />
                <PasswordInput name="password" placeholder="Password" />

                <Button
                  isLoading={loading}
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  bg="primary.200"
                  width="full"
                >
                  Login
                </Button>
                <HStack pt={6} justifyContent={'center'}>
                  <Text>New to us?</Text>
                  <ChakraNextLink href={'/register'}>Sign up</ChakraNextLink>
                </HStack>
              </Stack>
            </form>
          </FormProvider>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginTemplatePage;
