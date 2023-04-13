import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
type FormButtonSubmit = {
  type: 'submit';
  text: string;
};

type FormButton = {
  onClick: () => void;
  type?: 'button';
  text: string;
};

type FormButtonProps = FormButtonSubmit | FormButton;

export const FormButton = ({
  onClick,
  type = 'button',
  text,
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
      {text}
    </Button>
  );
};
