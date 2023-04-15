import { FormControl, Input, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  placeholder?: string;
  label?: string | boolean;
}

export const InputField = ({ name, placeholder, label = false }: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <FormLabel htmlFor={name}>{label ? label : ''}</FormLabel>
      <Input id={name} placeholder={placeholder} {...register(name)} />
      {errors[name] && <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
};
