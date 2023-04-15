import React from 'react';
import { OptionType } from '@/utils/types';

export const useAsyncControllerSelect = <T extends OptionType>(options: T[]) => {
  const filterOptions = (inputValue: string) => {
    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<T[]>((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  return { promiseOptions };
};
