import { ReactNode } from 'react';
import { Layout } from '@/module/layout/Layout';
import { Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { ChildrenPageProps } from '@/utils/types/page';

const HorsePage = ({ children }: ChildrenPageProps) => {
  const { status } = useSession();

  if (status === 'loading') return <Spinner color="red.500" />;

  return children;
};

export const HorsePageLayout = (page: ReactNode) => <Layout>{page}</Layout>;

HorsePage.getLayout = HorsePageLayout;

export default HorsePage;
