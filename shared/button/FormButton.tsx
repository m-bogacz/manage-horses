import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { FormButtonProps } from './types';

export const FormButton = ({
  onClick,
  type = 'button',
  text,
  children,
  bg: propsBg,
  ...props
}: FormButtonProps & ButtonProps) => {
  return (
    <Button
      type={type}
      _hover={{ bg: 'button.100' }}
      width={'100%'}
      onClick={onClick}
      bg={propsBg ? propsBg : 'button.100'}
      color="white"
      {...props}
    >
      {text ? text : children}
    </Button>
  );
};
