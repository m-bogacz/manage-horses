import { GenderType } from '@/utils/types';

export interface FormTemplateDetailsProps {
  readonly familySide: 'father' | 'mother';
  readonly placeholder?: string;
  readonly gender: GenderType;
  readonly label: string;
}
