import { HStack, Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { AuthenticationOptions } from './components/userAuthSwitch/components/authenticationOptions/AuthenticationOptions';
import { UserBar } from './components/userAuthSwitch/components/userBar/UserBar';
import { Suspense } from 'react';
import { NavContainer } from './components/navContainer/NavContainer';
import { UserAuthSwitch } from './components/userAuthSwitch/UserAuthSwitch';
import { NavLoadingSpinner } from './components/navLoadingSpinner/NavLoadingSpinner';

export const Navigation = () => {
  const { status } = useSession();

  return (
    <Suspense fallback={<Spinner />}>
      <NavContainer>{status === 'loading' ? <NavLoadingSpinner /> : <UserAuthSwitch />}</NavContainer>;
    </Suspense>
  );
};
