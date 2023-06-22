import React from 'react';
import AsyncCreatable from 'react-select/async-creatable';
import { Controller } from 'react-hook-form';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const CreatableSelect = ({ name, control, label, loadOptions }: any) => {
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
