import { OptionType } from '@/utils/types/horse';

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
