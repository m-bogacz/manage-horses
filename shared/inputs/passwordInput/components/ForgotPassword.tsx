import React from 'react';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { FormHelperText } from '@chakra-ui/react';

interface ForgotPasswordProps {
  href: string;
  content?: string;
}

export const ForgotPassword = ({ href, content = 'forgot password?' }: ForgotPasswordProps) => {
  return (
    <FormHelperText textAlign="right">
      <ChakraNextLink href={href}>{content}</ChakraNextLink>
    </FormHelperText>
  );
};
