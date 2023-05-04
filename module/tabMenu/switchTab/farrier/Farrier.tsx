import React from 'react';
import { Table } from '@/shared/table/Table';
import { Box, Skeleton, Text } from '@chakra-ui/react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addFarrierServices } from '@/apps/services/services';

export const Farrier = () => {
  const { name, farrier } = useHorseContext();
  const { data, addDataFromTab, isLoaded } = useSubmitFormHandler(addFarrierServices, name, farrier, 'farrier');

  return (
    <Box>
      <Box textAlign={'right'}>
        <AddTabForm title="Add farrier" nameForm={'farrier'} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data} isLoaded={isLoaded} />
      </Box>
    </Box>
  );
};
