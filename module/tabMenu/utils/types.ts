import { TabSectionType } from '@/utils/types';

export type TabsSectionEntity = TabSectionType[];

export type FormField = {
  name: string;
  placeholder: string;
  label: string;
  textarea?: boolean;
};

export type FormFields = FormField[];
