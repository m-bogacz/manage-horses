import { TabSectionType } from '@/utils/types';
import { defaultValuesTabForm } from '../addTabForm/tabFormFields';

export type TabsSectionEntity = TabSectionType[];

export type FormField = {
  name: string;
  placeholder: string;
  label: string;
  textarea?: boolean;
};

export type FormFields = FormField[];

export type DefaultValuesTabFormType = typeof defaultValuesTabForm;
