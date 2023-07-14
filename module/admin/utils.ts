import { IconType } from 'react-icons';
import { FiHome, FiTrendingUp } from 'react-icons/fi';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Activate', href: 'activate', icon: FiHome },
  { name: 'Users', href: 'users', icon: FiHome },
  { name: 'Permission ', href: 'permission', icon: FiTrendingUp },
  { name: 'Settings ', href: 'settings', icon: FiTrendingUp },
];
