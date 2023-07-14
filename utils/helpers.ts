import { OptionType } from './types/horse';

export const getFirstElement = <T>(arr: T[]) => {
  return arr[0];
};

export const filterhorses = (inputValue: string, arr: OptionType[]) => {
  return arr.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};
export const createOption = (label: string) => ({
  label,
  value: label,
});
