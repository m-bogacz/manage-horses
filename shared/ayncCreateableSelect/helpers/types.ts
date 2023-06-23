import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { GenderType } from '@/utils/types';

export interface AsyncCreateableSelectProps<TForm extends FieldValues> {
  name: FieldPath<TForm>;
  control: Control<TForm>;
  placeholder?: string;
  label: string;
  gender: GenderType;
}
