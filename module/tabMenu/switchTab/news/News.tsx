import React from 'react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { Table } from '@/shared/table/Table';
import { Box } from '@chakra-ui/react';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addNewsServices } from '@/apps/services/services';

export const News = () => {
  const {
    name,
    news: { news, type },
  } = useHorseContext();
  const { data, isLoaded, addDataFromTab } = useSubmitFormHandler(addNewsServices, name, news, type);

  return (
    <Box>
      <Box textAlign={'right'}>
        <AddTabForm title="Add news" nameForm={type} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data} isLoaded={isLoaded} type={type} />
      </Box>
    </Box>
  );
};
