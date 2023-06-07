import React from 'react';
import { Stack } from '@chakra-ui/react';
import { HorseDeleteConfirm } from './components/horseDeleteConfirm/HorseDeleteConfirm';
import { HorseEditData } from './components/horseEditData/HorseEditData';

export const ManageHorseAction = () => {
  return (
    <Stack direction="row" spacing="6" justifyContent={'center'} p={5}>
      <HorseEditData />
      <HorseDeleteConfirm />
    </Stack>
  );
};
