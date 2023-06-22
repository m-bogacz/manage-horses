import React from 'react';
import AsyncCreatable from 'react-select/async-creatable';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { CreateableSelectProps } from './types';

export const CreatableSelect = <TForm extends FieldValues>({
  name,
  control,
  label,
  loadOptions,
}: CreateableSelectProps<TForm>) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label ? label : ''}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return <AsyncCreatable cacheOptions loadOptions={loadOptions} defaultOptions {...field} />;
        }}
      />
    </FormControl>
  );
};
