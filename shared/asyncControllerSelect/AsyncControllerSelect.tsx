import React from 'react';
import AsyncSelect from 'react-select/async';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { AsyncControllerSelectProps } from './types';

export const AsyncControllerSelect = <TForm extends FieldValues>({
  name,
  control,
  loadOptions,
}: AsyncControllerSelectProps<TForm>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions {...field} />;
      }}
    />
  );
};
