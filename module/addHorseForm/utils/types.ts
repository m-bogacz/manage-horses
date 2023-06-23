import { OptionType, GenderType, customParent } from '@/utils/types';

export type STEP_TYPE = 1 | 2 | 3;

export const STEP = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
} as const;

export type FAMILY_MEMBERS = 'parent';
export interface ParentSideInfo {
  parent: OptionType[];
}

export interface FormDataEntity {
  name: string;
  birthday: Date | null;
  father: customParent | string;
  mother: customParent | string;
  images: string[];
  place: string;
  profileImageUrl: string;
  profileImage: string;
  gender: GenderType;
}
