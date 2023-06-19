import { HorseDataContext } from '@/utils/types';

export interface FeatureProps {
  title: string;
  desc: string;
  variant?: 'small' | 'medium' | 'big';
}

export interface FeatureParentProps extends FeatureProps {
  parent: HorseDataContext;
}
