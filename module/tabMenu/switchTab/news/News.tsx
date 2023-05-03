import React from 'react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { Table } from '@/shared/table/Table';
import { Box, Skeleton } from '@chakra-ui/react';
import { addNewsServices } from '@/module/MultiStepForm/components/form/services/services';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';

export const News = () => {
  const { name, news } = useHorseContext();
  const { data, isLoading, isLoaded, addDataFromTab } = useSubmitFormHandler(addNewsServices, name, news, 'news');

  return (
    <>
      <Box textAlign={'right'}>
        <AddTabForm title="Add news" nameForm={'news'} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data} isLoaded={isLoading} />
      </Box>
    </>
  );
};
