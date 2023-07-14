import { activateUserServices, deactivateUserServices } from '@/apps/api/modules/user/user.services';
import { revalidate } from '@/apps/api/services/revalidate.services';
import { UserType } from '@/utils/types/user';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useToggleUserActivation = (user: UserType) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const queryClient = useQueryClient();

  const mutationActivate = useMutation(activateUserServices, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
    },
  });

  const mutationUnActivate = useMutation(deactivateUserServices, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['userData']);
    },
  });

  const activateUser = async (userId: string) => {
    setLoading(true);

    await mutationActivate.mutateAsync(userId);
    await revalidate(router.pathname);
    setLoading(false);
  };

  const deactivateUser = async (userId: string) => {
    setLoading(true);
    await mutationUnActivate.mutateAsync(userId);
    await revalidate(router.pathname);
    setLoading(false);
  };

  const handleToggleUserActivation = async () => {
    if (user.activated) {
      await deactivateUser(user.id);
    } else {
      await activateUser(user.id);
    }
  };

  return { handleToggleUserActivation, loading };
};
