import React from 'react';
import { AuthenticationOptions } from './components/authenticationOptions/AuthenticationOptions';
import { UserBar } from './components/userBar/UserBar';
import { useSession } from 'next-auth/react';

export const UserAuthSwitch = () => {
  const { data: session } = useSession();

  return !session?.user ? <AuthenticationOptions /> : <UserBar />;
};
