import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  InputGroup,
  Input,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputLeftElement,
  IconButton,
} from '@chakra-ui/react';

interface PasswordInputProps {
  name: string;
  placeholder?: string;
  label?: string | boolean;
  formHelpertext?: React.ReactNode;
}

export const PasswordInput = ({ name, placeholder, label = '', formHelpertext }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <FormLabel htmlFor={name} color="gray.500">
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <LockIcon color="gray.400" />
        </InputLeftElement>
        <Input id={name} type={showPassword ? 'text' : 'password'} placeholder={placeholder} {...register(name)} />
        <InputRightElement>
          <IconButton
            aria-label="password"
            bg={'transparent'}
            size="sm"
            onClick={handleShowClick}
            icon={showPassword ? <ViewIcon color="gray.500" /> : <ViewOffIcon color="gray.500" />}
          />
        </InputRightElement>
      </InputGroup>
      {errors[name] && <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>}
      {formHelpertext ? formHelpertext : null}
    </FormControl>
  );
};
