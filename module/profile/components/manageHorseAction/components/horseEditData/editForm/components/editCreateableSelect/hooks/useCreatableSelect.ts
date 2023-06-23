import { fetchHorsesByGender } from '@/apps/services/services';
import { createOption, filterhorses } from '../../../utils/helpers';
import { OptionType, GenderType } from '@/utils/types';

export const useCreatableSelect = (gender: GenderType) => {
  const promiseOptions = async (inputValue: string) => {
    const data = await fetchHorsesByGender(gender);
    const mares = data.map((el) => createOption(el.name));
    return new Promise<OptionType[]>((resolve) => {
      resolve(filterhorses(inputValue, mares));
    });
  };

  return { promiseOptions };
};
