import React from 'react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { Table } from '@/shared/table/Table';
import { Box } from '@chakra-ui/react';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addNewsServices } from '@/apps/services/services';

export const News = () => {
  const { name, news } = useHorseContext();
  const { data, isLoaded, addDataFromTab } = useSubmitFormHandler(addNewsServices, name, news, 'news');

  return (
    <>
      <Box textAlign={'right'}>
        <AddTabForm title="Add news" nameForm={'news'} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data} isLoaded={isLoaded} />
      </Box>
    </>
  );
};
