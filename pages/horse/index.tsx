import { Layout } from '@/module/layout/Layout';
import { signOut } from 'next-auth/react';

const HorsePage = ({ children }: any) => {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>

      {children}
    </>
  );
};
export const HorsePageLayout = (page: any) => <Layout>{page}</Layout>;

HorsePage.getLayout = HorsePageLayout;

export default HorsePage;
