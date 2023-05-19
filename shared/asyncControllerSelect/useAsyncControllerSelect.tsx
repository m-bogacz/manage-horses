import React from 'react';
import { OptionType } from '@/utils/types';
import { FAMILY_MEMBERS, ParentSideInfo } from '@/module/MultiStepForm/utils/types';

export const useAsyncControllerSelect = <T extends ParentSideInfo>(options: T) => {
  const filterParentOptions = (inputValue: string, familyMember: FAMILY_MEMBERS) => {
    return options[familyMember].filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const familyMemberOptions = (inputValue: string, familyMember: FAMILY_MEMBERS) =>
    new Promise<OptionType[]>((resolve) => {
      setTimeout(() => {
        resolve(filterParentOptions(inputValue, familyMember));
      }, 1000);
    });

  return { familyMemberOptions };
};
