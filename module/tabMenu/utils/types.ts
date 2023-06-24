import { TabSectionType } from '@/utils/types';
import { defaultValuesTabForm } from '../addTabForm/utils/tabFormFields';

export type TabsSectionEntity = TabSectionType[];

export type FormField = {
  readonly name: string;
  readonly placeholder: string;
  readonly label: string;
  readonly textarea?: boolean;
};

export type FormFields = FormField[];

export type DefaultValuesTabFormType = typeof defaultValuesTabForm;
