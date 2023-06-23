import React from 'react';
import { CreatableSelect } from '@/shared/createableSelect/CreatableSelect';
import { FieldValues } from 'react-hook-form';
import { Control, FieldPath } from 'react-hook-form';
import { GenderType } from '@/utils/types';
import { useCreatableSelect } from './hooks/useCreatableSelect';

export interface CreateableSelectProps<TForm extends FieldValues> {
  name: FieldPath<TForm>;
  control: Control<TForm>;
  placeholder?: string;
  label: string;
  gender: GenderType;
}

export const EditCreateableSelect = <TForm extends FieldValues>({
  name,
  control,
  label,
  gender,
}: CreateableSelectProps<TForm>) => {
  const { promiseOptions } = useCreatableSelect(gender);

  return <CreatableSelect name={name} label={label} control={control} loadOptions={promiseOptions} />;
};
