import React from 'react';
import { FormControl, RadioGroup, Stack, Radio, FormErrorMessage, StackDirection, FormLabel } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

type RadioType = {
  value: string;
  content: string;
};

interface InputFieldProps {
  name: string;
  placeholder?: string;
  label?: string | boolean;
  radioValues: RadioType[];
  direction?: StackDirection;
}

export const RadioInput = ({
  name,
  label = 'Select Horse Gender',
  direction = 'row',
  radioValues,
}: InputFieldProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl label="choose sex" isInvalid={Boolean(errors.sex)}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value} name={name}>
            <Stack direction={direction}>
              {radioValues.map((radio) => {
                return (
                  <Radio key={radio.value} {...register(name)} value={radio.value}>
                    {radio.content}
                  </Radio>
                );
              })}
            </Stack>
          </RadioGroup>
        )}
      />
      {errors[name] && <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
};
