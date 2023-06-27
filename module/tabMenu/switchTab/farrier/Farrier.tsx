import React from 'react';
import { Table } from '@/shared/table/Table';
import { Box } from '@chakra-ui/react';
import { useHorseContext } from '@/apps/context/horseContext/HorseContext';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addFarrierServices } from '@/apps/api/modules/tabs/tabs.services';

export const Farrier = () => {
  const { name, farrier } = useHorseContext();
  const type = farrier.type;

  const { data, addDataFromTab, isLoaded } = useSubmitFormHandler(addFarrierServices, name, farrier);

  return (
    <Box>
      <Box textAlign={'right'}>
        <AddTabForm title="Add farrier" nameForm={type} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data.tabs} isLoaded={isLoaded} type={type} />
      </Box>
    </Box>
  );
};
