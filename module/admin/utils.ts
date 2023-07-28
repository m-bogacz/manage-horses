import { IconType } from 'react-icons';
import { FiActivity, FiKey, FiSettings, FiUsers } from 'react-icons/fi';

interface AdminRouteLinks {
  name: string;
  icon: IconType;
  href: string;
}

const pathToAdmin = '/user/admin';

export const adminRouteLinks: Array<AdminRouteLinks> = [
  { name: 'Activate', href: `${pathToAdmin}/activate`, icon: FiActivity },
  { name: 'Users', href: `${pathToAdmin}/users`, icon: FiUsers },
  { name: 'Permission ', href: `${pathToAdmin}/permission`, icon: FiKey },
  { name: 'Settings ', href: `${pathToAdmin}/settings`, icon: FiSettings },
];
