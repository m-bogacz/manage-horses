import React from 'react';
import { CreatableSelect } from '@/shared/createableSelect/CreatableSelect';
import { FieldValues } from 'react-hook-form';
import { AsyncCreateableSelectProps } from './helpers/types';
import { loadParentOptions } from './helpers/loadParentOptions';

export const AyncCreateableSelect = <TForm extends FieldValues>({
  name,
  control,
  label,
  gender,
}: AsyncCreateableSelectProps<TForm>) => {
  const { promiseOptions } = loadParentOptions(gender);

  return <CreatableSelect name={name} label={label} control={control} loadOptions={promiseOptions} />;
};
