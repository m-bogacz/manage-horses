import { useSession } from 'next-auth/react';

export const useCheckAdmin = () => {
  const { data: session } = useSession();

  return session?.user.role === 'admin';
};
