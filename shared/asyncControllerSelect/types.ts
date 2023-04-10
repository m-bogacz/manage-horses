import { FieldValues } from 'react-hook-form';
import { OptionsOrGroups } from 'react-select';
import { GroupBase } from 'react-select';
import { Control, FieldErrors, FieldPath } from 'react-hook-form';

export type OptionType = {
  value: string | number;
  label: string;
};

type LoadOptionsType<T> = (
  inputValue: string,
  callback: (options: OptionsOrGroups<any, GroupBase<any>>) => void
) => void | Promise<OptionsOrGroups<T, GroupBase<T>>>;

export interface AsyncControllerSelectProps<TForm extends FieldValues> {
  name: FieldPath<TForm>;
  control: Control<TForm>;
  loadOptions: LoadOptionsType<TForm>;
  defaultValue?: GroupBase<OptionType>;
  placeholder?: string;
  rules?: FieldErrors<TForm>;
  isMulti?: boolean;
}
