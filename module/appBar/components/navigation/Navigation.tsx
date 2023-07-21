import { useSession } from 'next-auth/react';
import { NavContainer } from './components/navContainer/NavContainer';
import { UserAuthSwitch } from './components/userAuthSwitch/UserAuthSwitch';
import { NavLoadingSpinner } from './components/navLoadingSpinner/NavLoadingSpinner';

export const Navigation = () => {
  const { status } = useSession();

  return <NavContainer>{status === 'loading' ? <NavLoadingSpinner /> : <UserAuthSwitch />}</NavContainer>;
};
