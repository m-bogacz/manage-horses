import { Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { AuthenticationOptions } from './components/authenticationOptions/AuthenticationOptions';
import { UserBar } from './components/userBar/UserBar';
import { Suspense } from 'react';
import { NavContainer } from './components/NavContainer';

export const Navigation = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <Spinner />;

  return (
    <NavContainer>
      <Suspense fallback={<Spinner />}>{!session?.user ? <AuthenticationOptions /> : <UserBar />}</Suspense>
    </NavContainer>
  );
};
