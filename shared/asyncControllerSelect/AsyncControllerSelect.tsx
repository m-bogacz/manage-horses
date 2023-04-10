import React from 'react';
import AsyncSelect from 'react-select/async';
import { Controller, FieldValues } from 'react-hook-form';
import { AsyncControllerSelectProps } from './types';

export const AsyncControllerSelect = <TForm extends FieldValues>({
  name,
  control,
  loadOptions,
  ...props
}: AsyncControllerSelectProps<TForm>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref } }) => {
        return (
          <AsyncSelect
            ref={ref}
            onChange={onChange}
            cacheOptions
            value={value}
            loadOptions={loadOptions}
            defaultOptions
            {...props}
          />
        );
      }}
    />
  );
};
