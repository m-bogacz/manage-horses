import React from 'react';
import { Box, List, Skeleton } from '@chakra-ui/react';
import { SideBarItem } from './SideBarItem';
import { SideBarListHorseEntity } from '@/apps/api/types';
import { getDefaultPhoto } from '@/apps/api/services/supabase.services';

interface SideBarListProps {
  readonly data?: SideBarListHorseEntity;
  readonly isLoading: boolean;
  readonly error: unknown;
}

export const SideBarList = ({ isLoading, error, data = [] }: SideBarListProps) => {
  if (error) return <Box>Error</Box>;

  const horsesList = data.map((horse) => (
    <SideBarItem
      key={horse.name}
      name={horse.name}
      src={horse.profileImageUrl ? horse.profileImageUrl : getDefaultPhoto()}
    />
  ));

  return (
    <List mt={2}>
      <Skeleton isLoaded={!isLoading}>{horsesList}</Skeleton>
    </List>
  );
};
