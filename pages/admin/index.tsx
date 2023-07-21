import { ReactElement } from 'react';
import { AdminPageLayout } from '@/module/layout/AdminLayout';

interface AdminProps {
  readonly children: ReactElement;
}

const AdminPage = ({ children }: AdminProps) => {
  return children;
};

AdminPage.getLayout = AdminPageLayout;

export default AdminPage;
