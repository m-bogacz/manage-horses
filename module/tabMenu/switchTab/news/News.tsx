import React from 'react';
import { useHorseContext } from '@/apps/context/HorseContext';
import { Table } from '@/shared/table/Table';
import { Box } from '@chakra-ui/react';
import { AddTabForm } from '../../addTabForm/AddTabForm';
import { useSubmitFormHandler } from '../../hooks/useSubmitFormHandler';
import { addNewsServices } from '@/apps/services/services';
import { useFetchTab } from '../../hooks/useFetchTab';
import { VariantTabType, Tab } from '@/utils/types';

export const News = () => {
  const { name, news } = useHorseContext();
  const type = news.type;
  const { data, isLoaded, addDataFromTab } = useSubmitFormHandler(addNewsServices, name, news, type);

  return (
    <Box>
      <Box textAlign={'right'}>
        <AddTabForm title="Add news" nameForm={type} add={addDataFromTab} />
      </Box>
      <Box>
        <Table tab={data.tabs} isLoaded={isLoaded} type={type} />
      </Box>
    </Box>
  );
};
