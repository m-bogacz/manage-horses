import React from 'react';
import { Table } from '@/shared/table/Table';
import { Box } from '@chakra-ui/react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addVeterinarianServices } from '@/apps/services/services';

export const Veterinarian = () => {
  const {
    name,
    veterinarian: { veterinarian, type },
  } = useHorseContext();

  const { data, isLoaded, addDataFromTab } = useSubmitFormHandler(addVeterinarianServices, name, veterinarian, type);

  return (
    <>
      <Box textAlign={'right'}>
        <AddTabForm title="Add veterinarian" nameForm={type} add={addDataFromTab} />
      </Box>

      <Box>
        <Table tab={data} isLoaded={isLoaded} type={type} />
      </Box>
    </>
  );
};
