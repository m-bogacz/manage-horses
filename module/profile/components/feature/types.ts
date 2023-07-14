import { ParentHorseData } from '@/utils/types/horse';

export interface FeatureProps {
  title: string;
  desc: string;
  variant?: 'small' | 'medium' | 'big';
}

export interface FeatureParentProps extends Omit<FeatureProps, 'desc'> {
  parent: ParentHorseData;
}
