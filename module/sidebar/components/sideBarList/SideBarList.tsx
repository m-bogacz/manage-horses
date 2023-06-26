import { getDefaultExamplephoto } from '@/utils/imageLoader/getDefualtPhoto';
import { Box, List, Spinner } from '@chakra-ui/react';
import React from 'react';
import { SideBarItem } from './SideBarItem';
import { SideBarListHorseEntity } from '@/apps/api/services/types';

interface SideBarListProps {
  readonly data?: SideBarListHorseEntity;
  readonly isLoading: boolean;
  readonly error: unknown;
}

export const SideBarList = ({ isLoading, error, data = [] }: SideBarListProps) => {
  if (error) return <Box>Error</Box>;

  if (isLoading) {
    return (
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" textAlign={'center'} />
    );
  }

  return (
    <List mt={2}>
      {data &&
        data.map((horse) => (
          <SideBarItem
            key={horse.name}
            name={horse.name}
            src={horse.profileImageUrl ? horse.profileImageUrl : getDefaultExamplephoto()}
          />
        ))}
    </List>
  );
};
