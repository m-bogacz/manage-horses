import { FieldValues, FieldPath, Control } from 'react-hook-form';

export interface CreateableSelectProps<TForm extends FieldValues> {
  name: FieldPath<TForm>;
  control: Control<TForm>;
  placeholder?: string;
  label: string;
  loadOptions: (inputValue: string) => any;
}
