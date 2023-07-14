import { Layout } from '@/module/layout/Layout';
import { ChildrenPageProps } from '@/utils/types';
import { Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

const HorsePage = ({ children }: ChildrenPageProps) => {
  const { status } = useSession();

  if (status === 'loading') return <Spinner color="red.500" />;

  return children;
};

export const HorsePageLayout = (page: ReactNode) => <Layout>{page}</Layout>;

HorsePage.getLayout = HorsePageLayout;

export default HorsePage;
