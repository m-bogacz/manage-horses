import { GenderType } from '@/utils/types/horse';

export interface FormTemplateDetailsProps {
  readonly familySide: 'father' | 'mother';
  readonly placeholder?: string;
  readonly gender: GenderType;
  readonly label: string;
}
