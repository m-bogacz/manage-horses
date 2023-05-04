import { getDefaultExamplephoto, getDefaultphoto } from '@/utils/imageLoader/getDefualtPhoto';

import { Box, List, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { SideBarItem } from './SideBarItem';
import { useHorses } from '@/hooks/useHorses';

export const SideBarList = () => {
  const { isLoading, error, data } = useHorses();

  if (error) return <Box>Error</Box>;

  return (
    <Skeleton isLoaded={!isLoading}>
      <List mt={2}>
        {data &&
          data.data.map((horse) => (
            <SideBarItem
              key={horse.name}
              name={horse.name}
              src={horse.profileImageUrl ? horse.profileImageUrl : getDefaultExamplephoto()}
            />
          ))}
      </List>
    </Skeleton>
  );
};
