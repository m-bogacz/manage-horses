import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface FormButtonProps {
  onClick?: () => void;
  type?: 'submit' | 'button';
  text: string;
}

export const FormButton = ({ onClick, type = 'button', text, ...props }: FormButtonProps & ButtonProps) => {
  return (
    <Button
      type={type}
      _hover={{ bg: 'button.100' }}
      width={'100%'}
      onClick={onClick}
      bg={'button.100'}
      color="white"
      {...props}
    >
      {text}
    </Button>
  );
};
