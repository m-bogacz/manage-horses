import { FormControl, Input, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  placeholder?: string;
  label?: string | boolean;
  asTextArea?: boolean;
}

export const InputField = ({ name, placeholder, label = false, asTextArea = false }: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <FormLabel htmlFor={name}>{label ? label : ''}</FormLabel>

      {asTextArea ? (
        <Textarea id={name} placeholder={placeholder} {...register(name)} />
      ) : (
        <Input id={name} placeholder={placeholder} {...register(name)} />
      )}

      {errors[name] && <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
};
