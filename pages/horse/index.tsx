import { Layout } from '@/module/layout/Layout';
import { ChildrenPageProps } from '@/utils/types';
import { ReactNode } from 'react';

const HorsePage = ({ children }: ChildrenPageProps) => {
  return children;
};

export const HorsePageLayout = (page: ReactNode) => <Layout>{page}</Layout>;

HorsePage.getLayout = HorsePageLayout;

export default HorsePage;
