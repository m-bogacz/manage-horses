import React from 'react';
import { Table } from '@/shared/table/Table';
import { Box, Skeleton } from '@chakra-ui/react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { addVeterinarianServices } from '@/module/MultiStepForm/components/form/services/services';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';

export const Veterinarian = () => {
  const { name, veterinarian } = useHorseContext();
  const { data, isLoading, isLoaded, addDataFromTab } = useSubmitFormHandler(
    addVeterinarianServices,
    name,
    veterinarian,
    'veterinarian'
  );

  console.log(data);

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
