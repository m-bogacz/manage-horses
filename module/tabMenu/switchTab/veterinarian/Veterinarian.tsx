import React from 'react';
import { Table } from '@/shared/table/Table';
import { Box } from '@chakra-ui/react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addVeterinarianServices } from '@/apps/services/services';

export const Veterinarian = () => {
  const { name, veterinarian } = useHorseContext();
  const { data, isLoaded, addDataFromTab } = useSubmitFormHandler(
    addVeterinarianServices,
    name,
    veterinarian,
    'veterinarian'
  );

  return (
    <>
      <Box textAlign={'right'}>
        <AddTabForm title="Add veterinarian" nameForm={'veterinarian'} add={addDataFromTab} />
      </Box>

      <Box>
        <Table tab={data} isLoaded={isLoaded} />
      </Box>
    </>
  );
};
