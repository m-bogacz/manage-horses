import React from 'react';
import { Table } from '@/shared/table/Table';
import { Box, Skeleton, Text } from '@chakra-ui/react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addFarrierServices } from '@/apps/services/services';

export const Farrier = () => {
  const {
    name,
    farrier: { farrier, type },
  } = useHorseContext();

  const { data, addDataFromTab, isLoaded } = useSubmitFormHandler(addFarrierServices, name, farrier, type);

  return (
    <Box>
      <Box textAlign={'right'}>
        <AddTabForm title="Add farrier" nameForm={type} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data} isLoaded={isLoaded} type={type} />
      </Box>
    </Box>
  );
};
