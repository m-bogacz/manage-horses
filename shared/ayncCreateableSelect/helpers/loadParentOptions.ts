import { fetchHorsesByGender } from '@/apps/api/services/horse.services';
import { createOption, filterhorses } from '@/utils/helpers';
import { OptionType, GenderType } from '@/utils/types';

export const loadParentOptions = (gender: GenderType) => {
  const promiseOptions = async (inputValue: string) => {
    const data = await fetchHorsesByGender(gender);
    const mares = data.map((el) => createOption(el.name));
    return new Promise<OptionType[]>((resolve) => {
      resolve(filterhorses(inputValue, mares));
    });
  };

  return { promiseOptions };
};
